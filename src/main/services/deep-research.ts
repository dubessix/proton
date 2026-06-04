import { IpcMain } from 'electron'
import { tavily } from '@tavily/core'
import Groq from 'groq-sdk'
import axios from 'axios'

// ═══════════════════════════════════════════════════════════════════
// 🌐 HAPUPPY CONFIG
// ═══════════════════════════════════════════════════════════════════
const HAPUPPY_BASE = 'https://beta.hapuppy.com/v1/chat/completions'
const MODEL_RESEARCH = 'sonar-deep-research'
const DEEP_RESEARCH_TIMEOUT = 300000 // 5 minutes

// ═══════════════════════════════════════════════════════════════════
// 🧠 IRIS SMART DETECTOR — Picks best method per query
// ═══════════════════════════════════════════════════════════════════
function isDeepQuery(query: string): boolean {
  const text = query.toLowerCase()

  // Keywords that signal DEEP research needed
  const deepKeywords = [
    'deep research',
    'comprehensive',
    'detailed report',
    'full analysis',
    'in-depth',
    'thorough',
    'extensive',
    'complete report',
    'write a report',
    'build a report',
    'long report',
    'investigate thoroughly',
    'everything about',
    'all about',
    'full breakdown',
    'detailed breakdown',
    'analyze deeply',
    'deep dive',
    'explore in depth',
    'synthesize all information',
    'gather all data',
    'compile comprehensive report',
    'exhaustive research',
    'detailed findings',
    'full synthesis',
    'complete analysis'
  ]

  // Check for deep keywords
  const hasDeepKeyword = deepKeywords.some((kw) => text.includes(kw))

  // Also: very long queries (>200 chars) usually want deep research
  const isLongQuery = query.length > 200

  return hasDeepKeyword || isLongQuery
}

export default function registerDeepResearch({ ipcMain }: { ipcMain: IpcMain }) {
  ipcMain.handle('execute-deep-research', async (event, { query, tavilyKey, groqKey }) => {
    // 🧠 IRIS decides which method to use
    const deepMode = isDeepQuery(query)
    console.log(`[Deep Research] 🧠 IRIS thinks: ${deepMode ? 'DEEP mode' : 'QUICK mode'}`)
    console.log(`[Deep Research] 📝 Query: "${query.slice(0, 80)}${query.length > 80 ? '...' : ''}"`)

    // ════════════════════════════════════════════════════════════════
    // 🅰️ QUICK MODE — Tavily + Groq (5-10s)
    // 🅱️ DEEP MODE  — Hapuppy Sonar (2-5min)
    // ════════════════════════════════════════════════════════════════

    // Decide primary method
    const tryQuickFirst = !deepMode // Quick by default

    if (tryQuickFirst) {
      // ────────────────────────────────────────────────────────────
      // 🅰️ PRIMARY: Try Tavily + Groq (FAST)
      // ────────────────────────────────────────────────────────────
      if (tavilyKey && groqKey) {
        const result = await tryTavilyGroq(query, tavilyKey, groqKey, event)
        if (result.success) return result
        console.warn('[Deep Research] ⚠️ Quick mode failed → switching to Deep mode')
      } else {
        console.log('[Deep Research] ℹ️ Tavily/Groq keys missing → using Hapuppy')
      }

      // Fallback to Hapuppy
      return await tryHapuppy(query, event)

    } else {
      // ────────────────────────────────────────────────────────────
      // 🅱️ PRIMARY: Try Hapuppy Sonar (DEEP)
      // ────────────────────────────────────────────────────────────
      const result = await tryHapuppy(query, event)
      if (result.success) return result

      console.warn('[Deep Research] ⚠️ Deep mode failed → trying Quick mode')

      // Fallback to Tavily+Groq
      if (tavilyKey && groqKey) {
        return await tryTavilyGroq(query, tavilyKey, groqKey, event)
      }

      return result // Return original Hapuppy error
    }
  })
}

// ═══════════════════════════════════════════════════════════════════
// 🅰️ METHOD: TAVILY + GROQ (Quick, 5-10 seconds)
// ═══════════════════════════════════════════════════════════════════
async function tryTavilyGroq(
  query: string,
  tavilyKey: string,
  groqKey: string,
  event: any
): Promise<{ success: boolean; summary?: string; error?: string }> {
  try {
    console.log('[Deep Research] 🅰️ Running Tavily + Groq...')

    event.sender.send('oracle-progress', {
      status: 'scanning',
      file: 'IRIS Quick Mode — Tavily Neural Search...',
      totalFound: 1
    })

    const tvly = tavily({ apiKey: tavilyKey })
    const tavilyData = await tvly.search(query, {
      searchDepth: 'advanced',
      includeAnswer: true,
      maxResults: 5
    })
    const rawContext = tavilyData.results
      .map((r: any) => `Source: ${r.url}\nContent: ${r.content}`)
      .join('\n\n')

    event.sender.send('oracle-progress', {
      status: 'reading',
      file: 'Llama 3.1 Synthesizing Data...',
      totalFound: 2
    })

    const groq = new Groq({ apiKey: groqKey })
    const prompt = `
        You are an elite research analyst. Answer: "${query}".
        Output ONLY a JSON object with a key "summary" containing a detailed, well-formatted markdown summary of your findings.
        Context: ${rawContext}
        `

    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.1-8b-instant',
      response_format: { type: 'json_object' }
    })

    const jsonString =
      chatCompletion.choices[0]?.message?.content || '{"summary": "No data generated."}'
    const parsedData = JSON.parse(jsonString)
    const extractedSummary = parsedData.summary || 'No data generated.'

    event.sender.send('oracle-progress', {
      status: 'embedded',
      file: 'Quick research complete...',
      totalFound: 3
    })

    console.log('[Deep Research] ✅ Tavily+Groq succeeded')
    return { success: true, summary: extractedSummary }
  } catch (error: any) {
    const errMsg = error?.message || String(error)
    console.warn('[Deep Research] ❌ Tavily+Groq failed:', errMsg)
    return { success: false, error: errMsg }
  }
}

// ═══════════════════════════════════════════════════════════════════
// 🅱️ METHOD: HAPUPPY SONAR-DEEP-RESEARCH (Deep, 2-5 minutes)
// ═══════════════════════════════════════════════════════════════════
async function tryHapuppy(
  query: string,
  event: any
): Promise<{ success: boolean; summary?: string; error?: string }> {
  try {
    console.log('[Deep Research] 🅱️ Running Hapuppy sonar-deep-research...')

    const hapuppyKey = (process.env.HAPUPPY_API_KEY || '').trim()

    if (!hapuppyKey) {
      return {
        success: false,
        error: 'HAPUPPY_API_KEY missing in .env file'
      }
    }

    event.sender.send('oracle-progress', {
      status: 'scanning',
      file: 'IRIS Deep Mode — Hapuppy Sonar Web Crawl...',
      totalFound: 1
    })

    event.sender.send('oracle-progress', {
      status: 'reading',
      file: 'Sonar Deep Research Synthesizing (2-5 min)...',
      totalFound: 2
    })

    const response = await axios.post(
      HAPUPPY_BASE,
      {
        model: MODEL_RESEARCH,
        messages: [
          {
            role: 'system',
            content:
              'You are an elite research analyst. Perform deep web research and synthesize findings into a clear, structured markdown report with key facts, data points, and sources.'
          },
          {
            role: 'user',
            content: query
          }
        ],
        temperature: 0.3,
        max_tokens: 4096
      },
      {
        timeout: DEEP_RESEARCH_TIMEOUT,
        headers: {
          Authorization: `Bearer ${hapuppyKey}`,
          'Content-Type': 'application/json'
        }
      }
    )

    const summary = response.data?.choices?.[0]?.message?.content?.trim() || ''

    if (!summary) {
      return { success: false, error: 'Hapuppy returned empty response' }
    }

    event.sender.send('oracle-progress', {
      status: 'embedded',
      file: 'Deep research complete via Hapuppy Sonar...',
      totalFound: 3
    })

    console.log('[Deep Research] ✅ Hapuppy Sonar succeeded')
    return { success: true, summary }
  } catch (error: any) {
    const errMsg = error?.response?.data?.error?.message || error?.message || String(error)
    console.error('[Deep Research] ❌ Hapuppy failed:', errMsg)
    return { success: false, error: errMsg }
  }
}