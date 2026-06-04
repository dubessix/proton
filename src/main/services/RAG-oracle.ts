import { IpcMain, app } from 'electron'
import fs from 'fs/promises'
import path from 'path'
import crypto from 'crypto'
import { GoogleGenAI } from '@google/genai'
import Groq from 'groq-sdk'
import axios from 'axios'

// ═══════════════════════════════════════════════════════════════════
// 🌐 HAPUPPY CONFIG
// ═══════════════════════════════════════════════════════════════════
const HAPUPPY_BASE = 'https://beta.hapuppy.com/v1/chat/completions'
const HAPUPPY_EMBED = 'https://beta.hapuppy.com/v1/embeddings'
const MODEL_EMBED = 'text-embedding-3-small' // Cheap + accurate
const MODEL_ANSWER = 'deepseek-v3.2' // Smart reasoning for code Q&A
const EMBED_TIMEOUT = 30000
const ANSWER_TIMEOUT = 60000

const getStateDir = () => path.join(app.getPath('userData'), 'iris_scan_states')

interface ScanState {
  dirPath: string
  processedFiles: string[]
  vectorDB: { filePath: string; chunk: string; embedding: number[] }[]
}

const getStateFilePath = (dirPath: string) => {
  const hash = crypto.createHash('md5').update(path.normalize(dirPath)).digest('hex')
  return path.join(getStateDir(), `${hash}.json`)
}

const saveState = async (state: ScanState) => {
  try {
    await fs.mkdir(getStateDir(), { recursive: true })
    await fs.writeFile(getStateFilePath(state.dirPath), JSON.stringify(state, null, 2))
  } catch (e) {}
}

const loadState = async (dirPath: string): Promise<ScanState | null> => {
  try {
    await fs.mkdir(getStateDir(), { recursive: true })
    const data = await fs.readFile(getStateFilePath(dirPath), 'utf-8')
    return JSON.parse(data)
  } catch {
    return null
  }
}

let vectorDB: { filePath: string; chunk: string; embedding: number[] }[] = []
let processedFiles = new Set<string>()
let isCancelled = false

const cosineSimilarity = (vecA: number[], vecB: number[]) => {
  let dot = 0,
    normA = 0,
    normB = 0
  for (let i = 0; i < vecA.length; i++) {
    dot += vecA[i] * vecB[i]
    normA += vecA[i] * vecA[i]
    normB += vecB[i] * vecB[i]
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// ═══════════════════════════════════════════════════════════════════
// 🧠 SMART EMBEDDING (Gemini → Hapuppy fallback)
// ═══════════════════════════════════════════════════════════════════
async function smartEmbed(
  texts: string[],
  geminiKey: string | null,
  taskType: 'RETRIEVAL_DOCUMENT' | 'RETRIEVAL_QUERY'
): Promise<number[][]> {
  // 🅰️ Try Gemini first (if key available)
  if (geminiKey && geminiKey.trim()) {
    try {
      const ai = new GoogleGenAI({ apiKey: geminiKey })
      const response: any = await ai.models.embedContent({
        model: 'gemini-embedding-001',
        contents: texts,
        config: { taskType }
      })
      return response.embeddings.map((e: any) => e.values)
    } catch (err: any) {
      console.warn('[RAG Oracle] ⚠️ Gemini embed failed → fallback Hapuppy:', err?.message)
    }
  }

  // 🅱️ Fallback to Hapuppy text-embedding-3-small
  const hapuppyKey = (process.env.HAPUPPY_API_KEY || '').trim()
  if (!hapuppyKey) {
    throw new Error('No embedding API available (no Gemini key + no HAPUPPY_API_KEY in .env)')
  }

  console.log('[RAG Oracle] 🅱️ Using Hapuppy embeddings...')

  const response = await axios.post(
    HAPUPPY_EMBED,
    {
      model: MODEL_EMBED,
      input: texts
    },
    {
      timeout: EMBED_TIMEOUT,
      headers: {
        Authorization: `Bearer ${hapuppyKey}`,
        'Content-Type': 'application/json'
      }
    }
  )

  return response.data?.data?.map((d: any) => d.embedding) || []
}

// ═══════════════════════════════════════════════════════════════════
// 🧠 SMART ANSWER (Groq → Hapuppy DeepSeek fallback)
// ═══════════════════════════════════════════════════════════════════
async function smartAnswer(
  contextText: string,
  query: string,
  groqKey: string | null
): Promise<string> {
  const systemPrompt =
    "You are an elite coding assistant. Answer the user's question based ONLY on the provided codebase context. Give direct code snippets and explanations. Be concise."

  // 🅰️ Try Groq first (if key available)
  if (groqKey && groqKey.trim()) {
    try {
      console.log('[RAG Oracle] 🅰️ Using Groq Llama 3.1...')
      const groq = new Groq({ apiKey: groqKey })
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Context:\n${contextText}\n\nQuestion: ${query}` }
        ],
        model: 'llama-3.1-8b-instant'
      })
      const answer = chatCompletion.choices[0]?.message?.content
      if (answer) return answer
      throw new Error('Empty Groq response')
    } catch (err: any) {
      console.warn('[RAG Oracle] ⚠️ Groq failed → fallback Hapuppy DeepSeek:', err?.message)
    }
  }

  // 🅱️ Fallback to Hapuppy DeepSeek
  const hapuppyKey = (process.env.HAPUPPY_API_KEY || '').trim()
  if (!hapuppyKey) {
    throw new Error('No answer API available (no Groq key + no HAPUPPY_API_KEY in .env)')
  }

  console.log('[RAG Oracle] 🅱️ Using Hapuppy DeepSeek...')

  const response = await axios.post(
    HAPUPPY_BASE,
    {
      model: MODEL_ANSWER,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Context:\n${contextText}\n\nQuestion: ${query}` }
      ],
      temperature: 0.3,
      max_tokens: 2048
    },
    {
      timeout: ANSWER_TIMEOUT,
      headers: {
        Authorization: `Bearer ${hapuppyKey}`,
        'Content-Type': 'application/json'
      }
    }
  )

  return response.data?.choices?.[0]?.message?.content?.trim() || 'No answer generated.'
}

export default function registerOracle({ ipcMain }: { ipcMain: IpcMain }) {
  ipcMain.handle('cancel-ingestion', () => {
    isCancelled = true
    return { success: true }
  })

  // ════════════════════════════════════════════════════════════════
  // 📚 INGEST CODEBASE (Memorize your code)
  // ════════════════════════════════════════════════════════════════
  ipcMain.handle('ingest-codebase', async (event, { dirPath, geminiKey }) => {
    try {
      // 🧠 IRIS smart: Use Gemini if available, else Hapuppy
      // (No throw if missing — fallback will handle it)
      const targetPath = path.normalize(dirPath.trim())
      isCancelled = false

      const prevState = await loadState(targetPath)
      if (prevState) {
        vectorDB = prevState.vectorDB
        processedFiles = new Set(prevState.processedFiles)
      } else {
        vectorDB = []
        processedFiles = new Set()
      }

      const ignoreDirs = ['node_modules', '.git', 'dist', 'build', '.next', 'out', 'public']
      const ignoreFiles = [
        'package-lock.json',
        'yarn.lock',
        'pnpm-lock.yaml',
        'package.json',
        'tsconfig.json'
      ]
      const allowedExts = ['.js', '.ts', '.jsx', '.tsx', '.py', '.md']
      let allFiles: string[] = []

      async function fastScan(currentPath: string) {
        if (isCancelled) return
        let entries
        try {
          entries = await fs.readdir(currentPath, { withFileTypes: true })
        } catch {
          return
        }
        for (const entry of entries) {
          const fullPath = path.join(currentPath, entry.name)
          if (entry.isDirectory() && !ignoreDirs.includes(entry.name)) {
            await fastScan(fullPath)
          } else if (
            entry.isFile() &&
            allowedExts.includes(path.extname(entry.name)) &&
            !ignoreFiles.includes(entry.name)
          ) {
            allFiles.push(fullPath)
          }
        }
      }

      event.sender.send('oracle-progress', {
        status: 'scanning',
        file: 'Initializing...',
        totalFound: 0
      })
      await fastScan(targetPath)

      if (isCancelled) return { success: false, error: 'Aborted by user.' }

      const filesToProcess = allFiles.filter((f) => !processedFiles.has(f))
      const filesWithStats = await Promise.all(
        filesToProcess.map(async (f) => ({ path: f, size: (await fs.stat(f)).size }))
      )
      filesWithStats.sort((a, b) => a.size - b.size)
      const sortedFilesToProcess = filesWithStats.map((f) => f.path)

      event.sender.send('oracle-progress', {
        status: 'scanning',
        file: 'Scan Complete',
        totalFound: allFiles.length,
        filesProcessed: processedFiles.size,
        chunks: vectorDB.length
      })

      for (let i = 0; i < sortedFilesToProcess.length; i++) {
        if (isCancelled) {
          event.sender.send('oracle-progress', { status: 'cancelled' })
          break
        }

        const fullPath = sortedFilesToProcess[i]
        const fileName = path.basename(fullPath)

        event.sender.send('oracle-progress', {
          status: 'reading',
          file: fileName,
          filesProcessed: processedFiles.size,
          totalFiles: allFiles.length,
          chunks: vectorDB.length
        })

        const stats = await fs.stat(fullPath)
        if (stats.size > 100000) continue
        const content = await fs.readFile(fullPath, 'utf-8')
        const rawChunks = content.match(/[\s\S]{1,1500}/g) || []
        const validChunks = rawChunks.filter((c) => c.trim().length > 10)

        if (validChunks.length === 0) {
          processedFiles.add(fullPath)
          continue
        }

        try {
          // 🧠 Smart embedding (Gemini → Hapuppy fallback)
          const embeddings = await smartEmbed(
            validChunks.map((chunk) => `File: ${fileName}\n\n${chunk}`),
            geminiKey || null,
            'RETRIEVAL_DOCUMENT'
          )

          embeddings.forEach((emb, idx) => {
            vectorDB.push({ filePath: fullPath, chunk: validChunks[idx], embedding: emb })
          })

          processedFiles.add(fullPath)
          await saveState({
            dirPath: targetPath,
            processedFiles: Array.from(processedFiles),
            vectorDB
          })

          event.sender.send('oracle-progress', {
            status: 'embedded',
            file: fileName,
            filesProcessed: processedFiles.size,
            totalFiles: allFiles.length,
            chunks: vectorDB.length
          })
          await sleep(3500)
        } catch (apiError: any) {
          console.warn(`[RAG Oracle] ⚠️ Skipping ${fileName}:`, apiError?.message)
          await sleep(5000)
        }
      }

      return { success: true, totalChunks: vectorDB.length, wasResumed: !!prevState }
    } catch (err: any) {
      console.error('[RAG Oracle] ❌ Ingest failed:', err?.message)
      return { success: false, error: String(err?.message || err) }
    }
  })

  // ════════════════════════════════════════════════════════════════
  // 🔮 CONSULT ORACLE (Ask questions about ingested code)
  // ════════════════════════════════════════════════════════════════
  ipcMain.handle('consult-oracle', async (_event, { query, geminiKey, groqKey }) => {
    try {
      if (vectorDB.length === 0) {
        return { success: false, answer: 'Error: No files loaded into memory.' }
      }

      // 🧠 Smart embedding (Gemini → Hapuppy fallback)
      const queryEmbeddings = await smartEmbed([query], geminiKey || null, 'RETRIEVAL_QUERY')
      const queryEmbedding = queryEmbeddings[0]

      if (!queryEmbedding) {
        return { success: false, error: 'Failed to generate query embedding' }
      }

      const rankedChunks = vectorDB
        .map((item) => ({ ...item, score: cosineSimilarity(queryEmbedding, item.embedding) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)

      const contextText = rankedChunks.map((c) => `// File: ${c.filePath}\n${c.chunk}`).join('\n\n')

      // 🧠 Smart answer (Groq → Hapuppy DeepSeek fallback)
      const answer = await smartAnswer(contextText, query, groqKey || null)

      return {
        success: true,
        answer,
        scannedFiles: rankedChunks.map((c) => c.filePath)
      }
    } catch (err: any) {
      console.error('[RAG Oracle] ❌ Consult failed:', err?.message)
      return { success: false, error: String(err?.message || err) }
    }
  })
}