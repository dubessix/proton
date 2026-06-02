import TelegramBot from 'node-telegram-bot-api'
import { BrowserWindow, app, Notification } from 'electron'
import fs from 'fs'
import path from 'path'
import https from 'https'
import Store from 'electron-store'

const StoreClass = (Store as any).default || Store
const store = new StoreClass()

let bot: TelegramBot | null = null

// ✅ Active reminder timers
const activeTimers = new Map<string, NodeJS.Timeout>()

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export default function registerTelegramBot(ipcMain: any) {
  const TOKEN = process.env.TELEGRAM_BOT_TOKEN
  const ALLOWED_CHAT_ID = process.env.TELEGRAM_CHAT_ID

  if (!TOKEN || !ALLOWED_CHAT_ID) {
    console.log('⚠️ Telegram bot not configured. Add TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID to .env')
    return
  }

  bot = new TelegramBot(TOKEN, { polling: true })
  console.log('🤖 IRIS Telegram Bot Online!')

  // ============================
  // HELPERS
  // ============================

  function getWindow(): BrowserWindow | null {
    return BrowserWindow.getAllWindows()[0] || null
  }

  function isAuthorized(chatId: number): boolean {
    return chatId.toString() === ALLOWED_CHAT_ID
  }

  async function send(chatId: number, text: string) {
    try {
      // Telegram max message length is 4096
      if (text.length > 4000) {
        text = text.slice(0, 4000) + '...'
      }
      await bot?.sendMessage(chatId, text, { parse_mode: 'Markdown' })
    } catch (err) {
      try {
        // Fallback without markdown if parse fails
        await bot?.sendMessage(chatId, text)
      } catch (e) {
        console.error('Send error:', e)
      }
    }
  }

  async function sendPhoto(chatId: number, imgPath: string, caption?: string) {
    try {
      if (!fs.existsSync(imgPath)) {
        await send(chatId, '❌ Screenshot file not found.')
        return
      }
      await bot?.sendPhoto(chatId, fs.createReadStream(imgPath), { caption })
    } catch (err) {
      console.error('Photo error:', err)
      await send(chatId, '❌ Could not send photo.')
    }
  }

  async function downloadVoice(fileId: string): Promise<string> {
    const fileLink = await bot?.getFileLink(fileId)
    const destPath = path.join(app.getPath('userData'), 'tg_voice.ogg')
    return new Promise((resolve, reject) => {
      const file = fs.createWriteStream(destPath)
      https.get(fileLink!, (res) => {
        res.pipe(file)
        file.on('finish', () => { file.close(); resolve(destPath) })
      }).on('error', reject)
    })
  }

  // ============================
  // REMINDER SYSTEM
  // ============================

  function showNotification(title: string, body: string) {
    new Notification({ title, body, urgency: 'critical' }).show()
  }

  function scheduleOnce(id: string, ms: number, task: string, chatId: number) {
    const timer = setTimeout(async () => {
      showNotification('⏰ IRIS Reminder', task)
      activeTimers.delete(id)
      await send(chatId, `⏰ *Reminder:* ${task}`)
    }, ms)
    activeTimers.set(id, timer)
  }

  function scheduleDaily(reminder: any, chatId: number) {
    const [hours, minutes] = reminder.time.split(':').map(Number)
    const tick = async () => {
      const now = new Date()
      const next = new Date()
      next.setHours(hours, minutes, 0, 0)
      if (next.getTime() <= now.getTime()) {
        next.setDate(next.getDate() + 1)
      }
      const delay = next.getTime() - now.getTime()
      const timer = setTimeout(async () => {
        showNotification('📅 IRIS Daily', reminder.task)
        await send(chatId, `📅 *Daily Reminder:* ${reminder.task}`)
        tick()
      }, delay)
      activeTimers.set(reminder.id, timer)
    }
    tick()
  }

  function scheduleAlarm(reminder: any, chatId: number) {
    const [hours, minutes] = reminder.time.split(':').map(Number)
    const now = new Date()
    const alarmTime = new Date()
    alarmTime.setHours(hours, minutes, 0, 0)
    if (alarmTime.getTime() <= now.getTime()) {
      alarmTime.setDate(alarmTime.getDate() + 1)
    }
    const delay = alarmTime.getTime() - now.getTime()
    const timer = setTimeout(async () => {
      showNotification('🔔 IRIS Alarm', reminder.task)
      activeTimers.delete(reminder.id)
      // Remove from store
      const reminders = store.get('tg_reminders', []) as any[]
      store.set('tg_reminders', reminders.filter((r: any) => r.id !== reminder.id))
      await send(chatId, `🔔 *Alarm:* ${reminder.task}`)
    }, delay)
    activeTimers.set(reminder.id, timer)
  }

  // Restore saved reminders on startup
  function restoreReminders() {
    const reminders = store.get('tg_reminders', []) as any[]
    const chatId = parseInt(ALLOWED_CHAT_ID!)
    for (const r of reminders) {
      if (r.type === 'daily') scheduleDaily(r, chatId)
      else if (r.type === 'alarm') scheduleAlarm(r, chatId)
    }
  }
  restoreReminders()

  // ============================
  // SEND TO IRIS AI (Core)
  // Routes through irisService
  // which has ALL tools
  // ============================

  async function sendToIRIS(
    chatId: number,
    message: string,
    timeoutMs = 30000
  ): Promise<string> {
    return new Promise((resolve) => {
      const win = getWindow()
      if (!win) {
        resolve('⚠️ IRIS window not found.')
        return
      }

      win.webContents.send('telegram-ai', { chatId, message })

      const timer = setTimeout(() => {
        ipcMain.removeAllListeners('telegram-ai-reply')
        resolve('⏱ Request timed out. Try again.')
      }, timeoutMs)

      ipcMain.once('telegram-ai-reply', (_: any, reply: string) => {
        clearTimeout(timer)
        resolve(reply || '✅ Done!')
      })
    })
  }

  // ============================
  // MESSAGE HANDLER
  // ============================

  bot.on('message', async (msg) => {
    const chatId = msg.chat.id
    const text = msg.text || ''

    // Security check
    if (!isAuthorized(chatId)) {
      await send(chatId, '🔒 Unauthorized access blocked.')
      console.warn(`⚠️ Unauthorized Telegram access: ${chatId}`)
      return
    }

    // ✅ Voice message
    if (msg.voice) {
      try {
        await send(chatId, '🎤 Processing voice...')
        const voicePath = await downloadVoice(msg.voice.file_id)
        getWindow()?.webContents.send('telegram-voice', { chatId, voicePath })

        const timer = setTimeout(async () => {
          ipcMain.removeAllListeners('telegram-voice-reply')
          await send(chatId, '🎤 Voice received! Please type your command.')
        }, 15000)

        ipcMain.once('telegram-voice-reply', async (_: any, reply: string) => {
          clearTimeout(timer)
          await send(chatId, `🤖 *IRIS:* ${reply}`)
        })
      } catch (err: any) {
        await send(chatId, `❌ Voice error: ${err.message}`)
      }
      return
    }

    // ✅ Photo message
    if (msg.photo) {
      await send(chatId, '📸 Photo received! Use text commands to process it.')
      return
    }

    // Handle text commands
    if (text) await handleCommand(chatId, text)
  })

  // ============================
  // COMMAND HANDLER
  // ============================

  async function handleCommand(chatId: number, text: string) {
    const lower = text.toLowerCase().trim()

    // ============================
    // HELP
    // ============================
    if (lower === '/start' || lower === '/help') {
      await send(chatId, `
👁️ *IRIS AI — Remote Control*

*💬 Chat & Voice:*
Just type anything → IRIS replies
Send voice message → IRIS understands

*📁 Files:*
\`/find resume\` — find file
\`/readfile /path/file.txt\` — read file
\`/writefile notes.txt content\` — write file
\`/dir Downloads\` — list directory
\`/mkdir FolderName\` — create folder
\`/openfile /path/file\` — open file
\`/file copy /src /dest\` — copy/move/delete

*🚀 Apps:*
\`/open chrome\` — open app
\`/close chrome\` — close app
\`/search AI news\` — web search

*⌨️ Control:*
\`/type hello world\` — type text
\`/shortcut ctrl+c\` — press shortcut
\`/click 500 300\` — click coordinates
\`/scroll down\` — scroll screen
\`/volume 50\` — set volume 0-100
\`/screenshot\` — take screenshot

*📧 Gmail:*
\`/emails\` — read emails
\`/sendemail to@mail.com Subject Body\`
\`/draftemail to@mail.com Subject Body\`

*💬 WhatsApp:*
\`/whatsapp John Hello there\`
\`/schedulewhatsapp John 10 Hello\`

*⏰ Reminders:*
\`/remind 10 drink water\`
\`/daily 08:00 workout\`
\`/alarm 16:00 meeting\`
\`/reminders\` — show all
\`/cancelreminders\` — cancel all

*💻 Terminal:*
\`/terminal ls -la\`
\`/vscode /path/project\`

*🌐 Research:*
\`/research quantum computing\`
\`/hack https://apple.com\`

*📊 Finance:*
\`/stock AAPL\`
\`/comparestock AAPL GOOGL\`
\`/weather Delhi\`

*🧠 Memory:*
\`/note Title Content\`
\`/notes\` — read notes
\`/index /path/project\`
\`/oracle how does auth work\`

*📷 Gallery:*
\`/photo /path/image.jpg\`
\`/gallery\`

*🎵 Spotify:*
\`/spotify lo-fi beats\`

*💻 System:*
\`/status\` — system info
\`/lock\` — lock IRIS
      `)
      return
    }

    // ============================
    // SCREENSHOT
    // ============================
    if (lower === '/screenshot') {
      await send(chatId, '📸 Taking screenshot...')
      getWindow()?.webContents.send('tg-screenshot-req')
      const timer = setTimeout(async () => {
        ipcMain.removeAllListeners('tg-screenshot-done')
        await send(chatId, '❌ Screenshot timeout.')
      }, 10000)
      ipcMain.once('tg-screenshot-done', async (_: any, imgPath: string) => {
        clearTimeout(timer)
        if (imgPath) await sendPhoto(chatId, imgPath, '📸 Current Screen')
        else await send(chatId, '❌ Screenshot failed.')
      })
      return
    }

    // ============================
    // SYSTEM STATUS
    // ============================
    if (lower === '/status') {
      getWindow()?.webContents.send('tg-status-req')
      const timer = setTimeout(async () => {
        ipcMain.removeAllListeners('tg-status-done')
        await send(chatId, '❌ Status timeout.')
      }, 10000)
      ipcMain.once('tg-status-done', async (_: any, status: any) => {
        clearTimeout(timer)
        if (!status) {
          await send(chatId, '❌ Could not get status.')
          return
        }
        await send(chatId, `
💻 *System Status*
• CPU: ${status?.cpu || '?'}%
• RAM: ${status?.memory?.usedPercentage || '?'}%
• OS: ${status?.os?.type || '?'}
• Uptime: ${status?.os?.uptime || '?'}
• Temp: ${status?.temperature || '?'}°C
        `)
      })
      return
    }

    // ============================
    // LOCK
    // ============================
    if (lower === '/lock') {
      getWindow()?.webContents.send('tg-lock')
      await send(chatId, '🔒 IRIS Locked!')
      return
    }

    // ============================
    // VOLUME
    // ============================
    if (lower.startsWith('/volume ')) {
      const level = parseInt(text.slice(8))
      if (isNaN(level) || level < 0 || level > 100) {
        await send(chatId, '❌ Usage: /volume 50 (0-100)')
        return
      }
      getWindow()?.webContents.send('tg-volume', level)
      await send(chatId, `🔊 Volume → ${level}%`)
      return
    }

    // ============================
    // FILE OPERATIONS
    // ============================

    // Find file
    if (lower.startsWith('/find ')) {
      const query = text.slice(6)
      await send(chatId, `🔍 Searching *${query}*...`)
      const reply = await sendToIRIS(chatId, `find file: ${query}`)
      await send(chatId, reply)
      return
    }

    // Read file
    if (lower.startsWith('/readfile ')) {
      const filePath = text.slice(10)
      await send(chatId, `📄 Reading file...`)
      const reply = await sendToIRIS(chatId, `read file at path: ${filePath}`)
      await send(chatId, reply)
      return
    }

    // Write file
    if (lower.startsWith('/writefile ')) {
      const parts = text.slice(11).split(' ')
      const fileName = parts[0]
      const content = parts.slice(1).join(' ')
      if (!fileName || !content) {
        await send(chatId, '❌ Usage: /writefile filename.txt content here')
        return
      }
      const reply = await sendToIRIS(chatId, `write to file ${fileName}: ${content}`)
      await send(chatId, reply)
      return
    }

    // List directory
    if (lower.startsWith('/dir ')) {
      const dirPath = text.slice(5)
      await send(chatId, `📁 Loading directory...`)
      const reply = await sendToIRIS(chatId, `load directory: ${dirPath}`)
      await send(chatId, reply)
      return
    }

    // Create folder
    if (lower.startsWith('/mkdir ')) {
      const folderName = text.slice(7)
      const reply = await sendToIRIS(chatId, `create folder: ${folderName}`)
      await send(chatId, reply)
      return
    }

    // Open file
    if (lower.startsWith('/openfile ')) {
      const filePath = text.slice(10)
      const reply = await sendToIRIS(chatId, `open file: ${filePath}`)
      await send(chatId, reply)
      return
    }

    // Manage file (copy/move/delete)
    if (lower.startsWith('/file ')) {
      const parts = text.slice(6).split(' ')
      const operation = parts[0]
      const src = parts[1]
      const dest = parts[2]
      if (!operation || !src) {
        await send(chatId, '❌ Usage: /file copy /src /dest\n/file delete /path\n/file move /src /dest')
        return
      }
      const reply = await sendToIRIS(chatId, `${operation} file from ${src}${dest ? ` to ${dest}` : ''}`)
      await send(chatId, reply)
      return
    }

    // ============================
    // APPS
    // ============================

    // Open app
    if (lower.startsWith('/open ')) {
      const appName = text.slice(6)
      getWindow()?.webContents.send('tg-open-app', appName)
      await send(chatId, `🚀 Opening *${appName}*...`)
      return
    }

    // Close app
    if (lower.startsWith('/close ')) {
      const appName = text.slice(7)
      const reply = await sendToIRIS(chatId, `close app: ${appName}`)
      await send(chatId, reply)
      return
    }

    // Web search
    if (lower.startsWith('/search ')) {
      const query = text.slice(8)
      const reply = await sendToIRIS(chatId, `search google for: ${query}`)
      await send(chatId, reply)
      return
    }

    // ============================
    // KEYBOARD & MOUSE
    // ============================

    // Type text
    if (lower.startsWith('/type ')) {
      const typeText = text.slice(6)
      const reply = await sendToIRIS(chatId, `type this text: ${typeText}`)
      await send(chatId, reply)
      return
    }

    // Press shortcut
    if (lower.startsWith('/shortcut ')) {
      const shortcut = text.slice(10)
      const reply = await sendToIRIS(chatId, `press keyboard shortcut: ${shortcut}`)
      await send(chatId, reply)
      return
    }

    // Click coordinates
    if (lower.startsWith('/click ')) {
      const parts = text.slice(7).split(' ')
      const x = parseInt(parts[0])
      const y = parseInt(parts[1])
      if (isNaN(x) || isNaN(y)) {
        await send(chatId, '❌ Usage: /click 500 300')
        return
      }
      const reply = await sendToIRIS(chatId, `click on screen at coordinates x:${x} y:${y}`)
      await send(chatId, reply)
      return
    }

    // Scroll
    if (lower.startsWith('/scroll ')) {
      const direction = text.slice(8)
      const reply = await sendToIRIS(chatId, `scroll screen ${direction}`)
      await send(chatId, reply)
      return
    }

    // ============================
    // GMAIL
    // ============================

    // Read emails
    if (lower === '/emails') {
      await send(chatId, '📧 Fetching emails...')
      getWindow()?.webContents.send('tg-emails-req')
      const timer = setTimeout(async () => {
        ipcMain.removeAllListeners('tg-emails-done')
        await send(chatId, '❌ Email timeout.')
      }, 15000)
      ipcMain.once('tg-emails-done', async (_: any, emails: string) => {
        clearTimeout(timer)
        await send(chatId, emails)
      })
      return
    }

    // Send email
    if (lower.startsWith('/sendemail ')) {
      const parts = text.slice(11).split(' ')
      const to = parts[0]
      const subject = parts[1]
      const body = parts.slice(2).join(' ')
      if (!to || !subject || !body) {
        await send(chatId, '❌ Usage: /sendemail to@mail.com Subject Body')
        return
      }
      await send(chatId, '📧 Sending email...')
      const reply = await sendToIRIS(chatId, `send email to ${to} with subject "${subject}" and body "${body}"`)
      await send(chatId, reply)
      return
    }

    // Draft email
    if (lower.startsWith('/draftemail ')) {
      const parts = text.slice(12).split(' ')
      const to = parts[0]
      const subject = parts[1]
      const body = parts.slice(2).join(' ')
      if (!to || !subject || !body) {
        await send(chatId, '❌ Usage: /draftemail to@mail.com Subject Body')
        return
      }
      const reply = await sendToIRIS(chatId, `draft email to ${to} with subject "${subject}" and body "${body}"`)
      await send(chatId, reply)
      return
    }

    // ============================
    // WHATSAPP
    // ============================

    // Send WhatsApp
    if (lower.startsWith('/whatsapp ')) {
      const parts = text.slice(10).split(' ')
      const name = parts[0]
      const message = parts.slice(1).join(' ')
      if (!name || !message) {
        await send(chatId, '❌ Usage: /whatsapp John Hello there')
        return
      }
      await send(chatId, `📱 Sending WhatsApp to *${name}*...`)
      const reply = await sendToIRIS(chatId, `send whatsapp message to ${name}: ${message}`)
      await send(chatId, reply)
      return
    }

    // Schedule WhatsApp
    if (lower.startsWith('/schedulewhatsapp ')) {
      const parts = text.slice(18).split(' ')
      const name = parts[0]
      const minutes = parseInt(parts[1])
      const message = parts.slice(2).join(' ')
      if (!name || isNaN(minutes) || !message) {
        await send(chatId, '❌ Usage: /schedulewhatsapp John 10 Hello')
        return
      }
      const reply = await sendToIRIS(chatId, `schedule whatsapp to ${name} after ${minutes} minutes: ${message}`)
      await send(chatId, reply)
      return
    }

    // ============================
    // REMINDERS
    // ============================

    // Remind once
    if (lower.startsWith('/remind ')) {
      const parts = text.slice(8).split(' ')
      const minutes = parseInt(parts[0])
      const task = parts.slice(1).join(' ')
      if (isNaN(minutes) || !task) {
        await send(chatId, '❌ Usage: /remind 10 drink water')
        return
      }
      const id = generateId()
      scheduleOnce(id, minutes * 60 * 1000, task, chatId)
      await send(chatId, `⏱ Got it! Reminding you about *${task}* in ${minutes} min.`)
      return
    }

    // Daily reminder
    if (lower.startsWith('/daily ')) {
      const parts = text.slice(7).split(' ')
      const time = parts[0]
      const task = parts.slice(1).join(' ')
      if (!time || !task) {
        await send(chatId, '❌ Usage: /daily 08:00 workout')
        return
      }
      const id = generateId()
      const reminder = { id, type: 'daily', time, task }
      const reminders = store.get('tg_reminders', []) as any[]
      reminders.push(reminder)
      store.set('tg_reminders', reminders)
      scheduleDaily(reminder, chatId)
      await send(chatId, `📅 Daily reminder set! *${task}* every day at ${time}.`)
      return
    }

    // Alarm
    if (lower.startsWith('/alarm ')) {
      const parts = text.slice(7).split(' ')
      const time = parts[0]
      const task = parts.slice(1).join(' ')
      if (!time || !task) {
        await send(chatId, '❌ Usage: /alarm 16:00 meeting')
        return
      }
      const id = generateId()
      const reminder = { id, type: 'alarm', time, task }
      const reminders = store.get('tg_reminders', []) as any[]
      reminders.push(reminder)
      store.set('tg_reminders', reminders)
      scheduleAlarm(reminder, chatId)
      await send(chatId, `🔔 Alarm set for *${time}*! Task: ${task}`)
      return
    }

    // Show reminders
    if (lower === '/reminders') {
      const reminders = store.get('tg_reminders', []) as any[]
      if (!reminders.length) {
        await send(chatId, '📋 No active reminders.')
        return
      }
      const list = reminders.map((r: any) =>
        `• ${r.task} — ${r.type === 'daily' ? `📅 Daily at ${r.time}` : `🔔 Alarm at ${r.time}`}`
      ).join('\n')
      await send(chatId, `📋 *Active Reminders:*\n${list}`)
      return
    }

    // Cancel all reminders
    if (lower === '/cancelreminders') {
      for (const timer of activeTimers.values()) clearTimeout(timer)
      activeTimers.clear()
      store.set('tg_reminders', [])
      await send(chatId, '✅ All reminders cancelled!')
      return
    }

    // ============================
    // TERMINAL
    // ============================

    if (lower.startsWith('/terminal ')) {
      const command = text.slice(10)
      await send(chatId, `💻 Running: \`${command}\``)
      const reply = await sendToIRIS(chatId, `run terminal command: ${command}`)
      await send(chatId, `\`\`\`\n${reply}\n\`\`\``)
      return
    }

    // VS Code
    if (lower.startsWith('/vscode ')) {
      const projectPath = text.slice(8)
      const reply = await sendToIRIS(chatId, `open in vscode: ${projectPath}`)
      await send(chatId, reply)
      return
    }

    // ============================
    // RESEARCH & WEB
    // ============================

    // Deep research
    if (lower.startsWith('/research ')) {
      const query = text.slice(10)
      await send(chatId, `🔬 Researching *${query}*... (this may take a moment)`)
      const reply = await sendToIRIS(chatId, `deep research: ${query}`, 60000)
      await send(chatId, reply)
      return
    }

    // Hack website
    if (lower.startsWith('/hack ')) {
      const url = text.slice(6)
      await send(chatId, `💉 Hacking *${url}*...`)
      const reply = await sendToIRIS(chatId, `hack live website: ${url}`)
      await send(chatId, reply)
      return
    }

    // ============================
    // STOCKS & WEATHER
    // ============================

    // Stock
    if (lower.startsWith('/stock ')) {
      const ticker = text.slice(7)
      await send(chatId, `📈 Getting stock data for *${ticker}*...`)
      const reply = await sendToIRIS(chatId, `get stock data for: ${ticker}`)
      await send(chatId, reply)
      return
    }

    // Compare stocks
    if (lower.startsWith('/comparestock ')) {
      const parts = text.slice(14).split(' ')
      const stock1 = parts[0]
      const stock2 = parts[1]
      if (!stock1 || !stock2) {
        await send(chatId, '❌ Usage: /comparestock AAPL GOOGL')
        return
      }
      await send(chatId, `📊 Comparing *${stock1}* vs *${stock2}*...`)
      const reply = await sendToIRIS(chatId, `compare stocks ${stock1} and ${stock2}`)
      await send(chatId, reply)
      return
    }

    // Weather
    if (lower.startsWith('/weather ')) {
      const location = text.slice(9)
      await send(chatId, `🌤 Getting weather for *${location}*...`)
      const reply = await sendToIRIS(chatId, `get weather for: ${location}`)
      await send(chatId, reply)
      return
    }

    // ============================
    // MEMORY & NOTES
    // ============================

    // Save note
    if (lower.startsWith('/note ')) {
      const parts = text.slice(6).split(' ')
      const title = parts[0]
      const content = parts.slice(1).join(' ')
      if (!title || !content) {
        await send(chatId, '❌ Usage: /note Title Content here')
        return
      }
      const reply = await sendToIRIS(chatId, `save note with title "${title}": ${content}`)
      await send(chatId, reply)
      return
    }

    // Read notes
    if (lower === '/notes') {
      await send(chatId, '📝 Reading notes...')
      const reply = await sendToIRIS(chatId, 'read my notes')
      await send(chatId, reply)
      return
    }

    // Index codebase
    if (lower.startsWith('/index ')) {
      const dirPath = text.slice(7)
      await send(chatId, `🧠 Indexing *${dirPath}*...`)
      const reply = await sendToIRIS(chatId, `ingest codebase at: ${dirPath}`, 60000)
      await send(chatId, reply)
      return
    }

    // Oracle (RAG search)
    if (lower.startsWith('/oracle ')) {
      const query = text.slice(8)
      await send(chatId, `🔮 Consulting Oracle...`)
      const reply = await sendToIRIS(chatId, `consult oracle: ${query}`, 60000)
      await send(chatId, reply)
      return
    }

    // ============================
    // GALLERY
    // ============================

    // Analyze photo
    if (lower.startsWith('/photo ')) {
      const imgPath = text.slice(7)
      await send(chatId, `📷 Analyzing photo...`)
      const reply = await sendToIRIS(chatId, `analyze photo at: ${imgPath}`)
      await send(chatId, reply)
      return
    }

    // Read gallery
    if (lower === '/gallery') {
      await send(chatId, `🖼 Reading gallery...`)
      const reply = await sendToIRIS(chatId, 'read gallery images')
      await send(chatId, reply)
      return
    }

    // ============================
    // SPOTIFY
    // ============================

    if (lower.startsWith('/spotify ')) {
      const query = text.slice(9)
      await send(chatId, `🎵 Playing *${query}*...`)
      const reply = await sendToIRIS(chatId, `play spotify music: ${query}`)
      await send(chatId, reply)
      return
    }

    // ============================
    // DEFAULT → IRIS AI
    // Routes through irisService
    // with ALL tools available
    // ============================
    await send(chatId, '🤖 Thinking...')
    const reply = await sendToIRIS(chatId, text)
    await send(chatId, `🤖 *IRIS:*\n${reply}`)
  }

  // ============================
  // ONLINE/OFFLINE NOTIFY
  // ============================

  setTimeout(async () => {
    try {
      await send(parseInt(ALLOWED_CHAT_ID!), `
🟢 *IRIS is Online!*
Type /help for all commands.
      `)
    } catch (e) {}
  }, 3000)

  app.on('before-quit', async () => {
    try {
      await bot?.sendMessage(parseInt(ALLOWED_CHAT_ID!), '🔴 *IRIS is Offline.*')
    } catch (e) {}
  })

  return bot
}