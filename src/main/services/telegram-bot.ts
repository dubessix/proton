/**
 * IRIS Telegram Bot — HAPUPPY EDITION (JARVIS FINAL + DEBUG VOICE)
 * 
 * Features:
 * ✅ Silent network error handling
 * ✅ Auto-recovery when network restored
 * ✅ Multi-modal (text, voice, photo)
 * ✅ Smart model routing (gemini/deepseek/sonar/qwen)
 * ✅ Whisper-1 voice transcription (cheapest)
 * ✅ Deep research 5-min timeout
 * ✅ Sonar models bypass tools (they have web built-in)
 * ✅ DEBUG MODE for voice (full error logging)
 */

import TelegramBot from "node-telegram-bot-api";
import axios from "axios";
import fs from "fs";
import path from "path";
import os from "os";
import { BrowserWindow, safeStorage, app, ipcMain } from "electron";

// ═════════════════════════════════════════════════════════════════════════════
// 🌐 ENDPOINTS
// ═════════════════════════════════════════════════════════════════════════════
const HAPUPPY_BASE = "https://beta.hapuppy.com/v1/chat/completions";
const HAPUPPY_TRANSCRIBE = "https://beta.hapuppy.com/v1/audio/transcriptions";

// ═════════════════════════════════════════════════════════════════════════════
// 🎯 FINAL MODEL ROSTER (per Boss's locked config)
// ═════════════════════════════════════════════════════════════════════════════
const MODEL_CHAT     = "gemini-2.5-flash";              // 💬 Default chat
const MODEL_VISION   = "gemini-2.5-flash";              // 👁️ Photo analysis (same)
const MODEL_SMART    = "deepseek-v3.2";                 // 🧠 Complex reasoning
const MODEL_CODE     = "qwen3-coder-480b-a35b-instruct";// 💻 Coding tasks
const MODEL_WEB      = "sonar";                         // 🌐 Web search
const MODEL_RESEARCH = "sonar-deep-research";           // 🔬 Deep research
const MODEL_VOICE    = "whisper-1";                     // 🎙️ Voice transcription

// ⏱️ TIMING & LIMITS
const MAX_TOOL_LOOPS         = 8;
const NORMAL_TIMEOUT         = 60000;   // 1 min
const DEEP_RESEARCH_TIMEOUT  = 300000;  // 5 min
const TELEGRAM_MSG_LIMIT     = 4000;

// ═════════════════════════════════════════════════════════════════════════════
// 🔑 HAPUPPY KEY LOADER
// ═════════════════════════════════════════════════════════════════════════════
function loadHapuppyKey(): { key: string; source: string } {
  try {
    const secureConfigPath = path.join(
      app.getPath("userData"),
      "iris_secure_vault.json",
    );

    if (fs.existsSync(secureConfigPath)) {
      const data = JSON.parse(fs.readFileSync(secureConfigPath, "utf8"));

      if (data.hapuppy) {
        if (safeStorage.isEncryptionAvailable()) {
          const decrypted = safeStorage.decryptString(
            Buffer.from(data.hapuppy, "base64"),
          );
          if (decrypted) return { key: decrypted.trim(), source: "vault" };
        } else {
          const decoded = Buffer.from(data.hapuppy, "base64").toString("utf8");
          if (decoded) return { key: decoded.trim(), source: "vault" };
        }
      }
    }
  } catch {}

  if (process.env.HAPUPPY_API_KEY) {
    return { key: process.env.HAPUPPY_API_KEY.trim(), source: ".env" };
  }

  return { key: "", source: "NOT FOUND" };
}

// ═════════════════════════════════════════════════════════════════════════════
// 🧠 SMART MODEL ROUTER (picks best model per query)
// ═════════════════════════════════════════════════════════════════════════════
function pickBestModel(userText: string): string {
  const t = userText.toLowerCase();
  const length = userText.length;

  // 🔬 Deep research
  if (/\b(deep research|research deeply|detailed report|comprehensive analysis|investigate thoroughly|full report on)\b/i.test(t)) {
    return MODEL_RESEARCH;
  }

  // 🌐 Needs current/web info
  if (/\b(latest|today|current|news|recent|2024|2025|price of|weather|stock|score|who won|breaking|happening)\b/i.test(t)) {
    return MODEL_WEB;
  }

  // 💻 Code
  if (/\b(code|debug|script|terminal|bash|python|javascript|typescript|fix bug|refactor|function|api endpoint)\b/i.test(t)) {
    return MODEL_CODE;
  }

  // 🧠 Reasoning
  if (/\b(explain why|analyze|compare|strategy|plan my|reason through|step by step)\b/i.test(t) || length > 400) {
    return MODEL_SMART;
  }

  // 💬 Default
  return MODEL_CHAT;
}

// ═════════════════════════════════════════════════════════════════════════════
// 🛠️ TOOL DECLARATIONS (OpenAI format)
// ═════════════════════════════════════════════════════════════════════════════
const IRIS_TOOLS = [
  { name: "smart_file_search", description: "Deep file search.", params: { query: "string" }, required: ["query"] },
  { name: "read_file", description: "Read file content.", params: { file_path: "string" }, required: ["file_path"] },
  { name: "write_file", description: "Write text to file.", params: { file_name: "string", content: "string" }, required: ["file_name", "content"] },
  { name: "manage_file", description: "Copy/Move/Delete files.", params: { operation: "string", source_path: "string", dest_path: "string" }, required: ["operation", "source_path"] },
  { name: "open_file", description: "Open file in default app.", params: { file_path: "string" }, required: ["file_path"] },
  { name: "read_directory", description: "Scan directory.", params: { directory_path: "string" }, required: ["directory_path"] },
  { name: "create_folder", description: "Create folder.", params: { folder_path: "string" }, required: ["folder_path"] },
  { name: "open_app", description: "Launch system app.", params: { app_name: "string" }, required: ["app_name"] },
  { name: "google_search", description: "Search Google.", params: { query: "string" }, required: ["query"] },
  { name: "save_note", description: "Save a note.", params: { title: "string", content: "string" }, required: ["title", "content"] },
  { name: "read_notes", description: "Read saved notes.", params: {}, required: [] },
  { name: "send_whatsapp", description: "Send WhatsApp message.", params: { contact_name: "string", message: "string" }, required: ["contact_name", "message"] },
  { name: "play_music", description: "Play Spotify song.", params: { song_name: "string" }, required: ["song_name"] },
  { name: "take_screenshot", description: "Take screenshot.", params: {}, required: [] },
  { name: "run_terminal", description: "Run shell command.", params: { command: "string", path: "string" }, required: ["command"] },
  { name: "get_weather", description: "Get weather for a city.", params: { location: "string" }, required: ["location"] },
  { name: "get_stock_price", description: "Get stock price. Use .NS for Indian stocks.", params: { ticker: "string" }, required: ["ticker"] },
  { name: "generate_image", description: "Generate AI image.", params: { prompt: "string" }, required: ["prompt"] },
  { name: "read_emails", description: "Read Gmail.", params: { max_results: "number" }, required: [] },
  { name: "send_email", description: "Send email.", params: { to: "string", subject: "string", body: "string" }, required: ["to", "subject", "body"] },
  { name: "deep_research", description: "Deep web research. Takes 2-5 minutes.", params: { query: "string" }, required: ["query"] },
  { name: "open_map", description: "Open interactive map.", params: { location: "string" }, required: ["location"] },
  { name: "get_navigation", description: "Get driving directions.", params: { origin: "string", destination: "string" }, required: ["origin", "destination"] },
];

function toolsForHapuppy() {
  return IRIS_TOOLS.map((t) => ({
    type: "function",
    function: {
      name: t.name,
      description: t.description,
      parameters: {
        type: "object",
        properties: Object.fromEntries(
          Object.entries(t.params).map(([k, v]) => [k, { type: v as string }]),
        ),
        required: t.required,
      },
    },
  }));
}

// ═════════════════════════════════════════════════════════════════════════════
// 📡 IPC TOOL BRIDGE (with smart timeout)
// ═════════════════════════════════════════════════════════════════════════════
const LONG_RUNNING_TOOLS = new Set(["deep_research", "smart_file_search", "index_Folder"]);

async function callRendererTool(
  name: string,
  args: Record<string, any>,
): Promise<string> {
  const mainWindow = BrowserWindow.getAllWindows()[0];
  if (!mainWindow || mainWindow.isDestroyed()) {
    return "Error: Main window not available.";
  }

  const timeout = LONG_RUNNING_TOOLS.has(name) ? DEEP_RESEARCH_TIMEOUT : 60000;

  return new Promise<string>((resolve) => {
    const requestId = `tg_tool_${Date.now()}_${Math.random().toString(36).slice(2)}`;

    const responseHandler = (_e: any, data: any) => {
      if (data.requestId === requestId) {
        ipcMain.removeListener("telegram-tool-response", responseHandler);
        resolve(data.result);
      }
    };

    ipcMain.on("telegram-tool-response", responseHandler);
    mainWindow.webContents.send("telegram-tool-request", {
      requestId,
      name,
      args,
    });

    setTimeout(() => {
      ipcMain.removeListener("telegram-tool-response", responseHandler);
      resolve(`Tool "${name}" timed out after ${timeout / 1000}s.`);
    }, timeout);
  });
}

function keepTyping(
  bot: TelegramBot,
  chatId: number,
  action: TelegramBot.ChatAction = "typing",
) {
  let active = true;
  bot.sendChatAction(chatId, action).catch(() => {});
  const interval = setInterval(() => {
    if (active) bot.sendChatAction(chatId, action).catch(() => {});
  }, 4000);
  return () => {
    active = false;
    clearInterval(interval);
  };
}

// ═════════════════════════════════════════════════════════════════════════════
// 🎭 SYSTEM PROMPT
// ═════════════════════════════════════════════════════════════════════════════
async function buildSystemPrompt(chatId: number): Promise<string> {
  let context = "";
  try {
    context = await callRendererTool("__get_iris_context__", {});
  } catch {}

  return `# 👁️ IRIS — Telegram Interface (JARVIS-style)
You are IRIS, a high-performance AI agent of Debjeet Dhar.
Execute commands aggressively using tools. Be concise.

## IDENTITY
- Creator/Boss: Debjeet Dhar — address as "Sir" or "Boss" occasionally
- Tone: Witty, sharp, Hinglish-friendly, JARVIS-style
- Rule: Never sound like a support bot. Action over words.

## RULES
- Keep replies short for Telegram (under 200 words usually)
- Use minimal Markdown (bold/italic only)
- Call tools when needed — don't ask permission
- Multi-step? Chain tool calls aggressively
- Deep research takes 2-5 min — that's normal

## CONTEXT
- Time: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
- Chat ID: ${chatId}
${context}
`;
}

// ═════════════════════════════════════════════════════════════════════════════
// 🤖 HAPUPPY CHAT (smart model + timeout aware)
// ═════════════════════════════════════════════════════════════════════════════
async function askHapuppy(
  userText: string,
  apiKey: string,
  systemPrompt: string,
  model: string = MODEL_CHAT,
): Promise<string> {
  const isResearch = model.includes("sonar-deep");
  const timeout = isResearch ? DEEP_RESEARCH_TIMEOUT : NORMAL_TIMEOUT;
  const useTools = !model.includes("sonar");

  let messages: any[] = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userText },
  ];

  let loops = MAX_TOOL_LOOPS;

  while (loops-- > 0) {
    let res;
    try {
      const payload: any = {
        model,
        messages,
        temperature: 0.7,
        max_tokens: 2048,
      };
      if (useTools) {
        payload.tools = toolsForHapuppy();
        payload.tool_choice = "auto";
      }

      res = await axios.post(HAPUPPY_BASE, payload, {
        timeout,
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });
    } catch (err: any) {
      const errMsg = err?.response?.data?.error?.message || err?.message;
      console.error("[IRIS Telegram] Hapuppy error:", errMsg);
      return `⚠️ AI error: ${errMsg}`;
    }

    const msg = res.data?.choices?.[0]?.message;
    if (!msg) return "🤔 No response.";

    const toolCalls = msg.tool_calls || [];
    if (toolCalls.length === 0) {
      return msg.content?.trim() || "✅ Done.";
    }

    messages.push(msg);

    for (const tc of toolCalls) {
      const name = tc.function.name;
      let args = {};
      try {
        args = JSON.parse(tc.function.arguments || "{}");
      } catch {}

      console.log(`[IRIS Telegram] 🔧 [${model}] Calling: ${name}`);
      const result = await callRendererTool(name, args);
      messages.push({
        role: "tool",
        tool_call_id: tc.id,
        content: result,
      });
    }
  }

  return "⚠️ Max tool depth reached.";
}

// ═════════════════════════════════════════════════════════════════════════════
// 🎙️ VOICE TRANSCRIPTION (whisper-1) — FULL DEBUG MODE
// ═════════════════════════════════════════════════════════════════════════════
async function transcribeVoice(
  bot: TelegramBot,
  fileId: string,
  botToken: string,
  apiKey: string,
): Promise<string> {
  let tempFilePath = "";

  try {
    console.log("\n[IRIS Voice] 🎙️ START");

    const fileInfo = await bot.getFile(fileId);
    if (!fileInfo.file_path) throw new Error("No file_path");

    const fileUrl = `https://api.telegram.org/file/bot${botToken}/${fileInfo.file_path}`;
    const audioRes = await axios.get(fileUrl, {
      responseType: "arraybuffer",
      timeout: 30000,
    });

    // 🆕 Save as .webm (Whisper supports it, and OGG Opus inside .webm works)
    tempFilePath = path.join(os.tmpdir(), `iris_voice_${Date.now()}.webm`);
    fs.writeFileSync(tempFilePath, Buffer.from(audioRes.data));
    
    // 🗑️ Auto-cleanup old voice files (older than 1 hour)
    cleanOldVoiceFiles();

    console.log("[IRIS Voice] ✅ Saved as .webm:", tempFilePath);

    const FormData = (await import("form-data")).default;
    const form = new FormData();
    form.append("file", fs.createReadStream(tempFilePath), {
      filename: "voice.webm",        // 🆕 .webm extension
      contentType: "audio/webm",      // 🆕 Webm content type
    });
    form.append("model", MODEL_VOICE);

    const res = await axios.post(HAPUPPY_TRANSCRIBE, form, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        ...form.getHeaders(),
      },
      timeout: 60000,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    });

    const transcript = res.data?.text?.trim() || "";
    console.log("[IRIS Voice] 🎯 TRANSCRIPT:", transcript);
    return transcript;

  } catch (err: any) {
    console.error("[IRIS Voice] ❌", err?.response?.data || err?.message);
    return "";
  } finally {
    if (tempFilePath && fs.existsSync(tempFilePath)) {
      try { fs.unlinkSync(tempFilePath); } catch {}
    }
  }
}

// 🗑️ Helper: Delete old voice files (older than 1 hour)
function cleanOldVoiceFiles() {
  try {
    const tmpDir = os.tmpdir();
    const files = fs.readdirSync(tmpDir);
    const oneHourAgo = Date.now() - 3600000;
    
    files.forEach((file) => {
      if (file.startsWith("iris_voice_")) {
        const fullPath = path.join(tmpDir, file);
        try {
          const stats = fs.statSync(fullPath);
          if (stats.mtimeMs < oneHourAgo) {
            fs.unlinkSync(fullPath);
          }
        } catch {}
      }
    });
  } catch {}
}

// ═════════════════════════════════════════════════════════════════════════════
// 👁️ PHOTO ANALYSIS
// ═════════════════════════════════════════════════════════════════════════════
async function analyzePhoto(
  bot: TelegramBot,
  fileId: string,
  botToken: string,
  apiKey: string,
  caption: string,
): Promise<string> {
  try {
    const fileInfo = await bot.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${botToken}/${fileInfo.file_path}`;
    const imgRes = await axios.get(fileUrl, {
      responseType: "arraybuffer",
      timeout: 30000,
    });
    const base64Image = Buffer.from(imgRes.data).toString("base64");

    const res = await axios.post(
      HAPUPPY_BASE,
      {
        model: MODEL_VISION,
        messages: [
          {
            role: "user",
            content: [
              { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image}` } },
              { type: "text", text: caption || "Describe this image in detail." },
            ],
          },
        ],
        max_tokens: 1024,
      },
      {
        timeout: 60000,
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      },
    );

    return res.data?.choices?.[0]?.message?.content?.trim() || "No analysis.";
  } catch (err: any) {
    return `⚠️ Photo analysis failed: ${err?.message}`;
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// 🤖 BOT CLASS
// ═════════════════════════════════════════════════════════════════════════════
class IrisTelegramBot {
  private bot: TelegramBot | null = null;
  private apiKey: string = "";
  private botToken: string = "";
  private ownerChatId: number = 0;
  private isRunning: boolean = false;

  // 🤫 Network error tracking (silent mode)
  private networkDownSince: number = 0;
  private wasNetworkDown: boolean = false;
  private lastNetworkLog: number = 0;

  async start(): Promise<{ success: boolean; error?: string }> {
    if (this.isRunning) {
      return { success: false, error: "Bot already running." };
    }

    this.botToken = (process.env.TELEGRAM_BOT_TOKEN || "").trim();
    this.ownerChatId = parseInt(process.env.TELEGRAM_OWNER_ID || "0") || 0;

    const { key, source } = loadHapuppyKey();
    this.apiKey = key;

    if (!this.botToken) {
      return { success: false, error: "❌ TELEGRAM_BOT_TOKEN missing in .env" };
    }
    if (!this.apiKey) {
      return {
        success: false,
        error: "❌ HAPUPPY_API_KEY missing. Add to .env or vault.",
      };
    }

    try {
      this.bot = new TelegramBot(this.botToken, {
        polling: {
          interval: 2000,
          autoStart: true,
          params: { timeout: 10 },
        },
        request: {
          agentOptions: {
            keepAlive: true,
            family: 4,
          },
          timeout: 30000,
        } as any,
      });

      this.isRunning = true;
      this.registerHandlers();

      console.log("[IRIS Telegram] ✅ Bot online (HAPUPPY edition).");
      console.log(`[IRIS Telegram] 🔑 Hapuppy key: ${source}`);
      console.log(`[IRIS Telegram] 💬 Chat: ${MODEL_CHAT}`);
      console.log(`[IRIS Telegram] 🧠 Smart: ${MODEL_SMART}`);
      console.log(`[IRIS Telegram] 💻 Code: ${MODEL_CODE}`);
      console.log(`[IRIS Telegram] 🌐 Web: ${MODEL_WEB}`);
      console.log(`[IRIS Telegram] 🔬 Research: ${MODEL_RESEARCH}`);
      console.log(`[IRIS Telegram] 🎙️ Voice: ${MODEL_VOICE}`);
      console.log(`[IRIS Telegram] 🛡️ Owner: ${this.ownerChatId || "OPEN"}`);

      return { success: true };
    } catch (err: any) {
      this.isRunning = false;
      return { success: false, error: err?.message };
    }
  }

  private isAuthorized(chatId: number): boolean {
    if (this.ownerChatId === 0) return true;
    return chatId === this.ownerChatId;
  }

  private registerHandlers(): void {
    if (!this.bot) return;

    this.bot.onText(/\/start/, (msg) => {
      const idInfo =
        this.ownerChatId === 0
          ? `\n\n⚠️ Your Chat ID: \`${msg.chat.id}\`\nPaste in .env for security.`
          : "";
      this.bot?.sendMessage(
        msg.chat.id,
        `👁️ *IRIS is online, Sir.*\n\n_Powered by Hapuppy AI proxy_\n\nSend text, voice, or photo and I'll execute.\n\n/status /help${idInfo}`,
        { parse_mode: "Markdown" },
      );
    });

    this.bot.onText(/\/help/, (msg) => {
      this.bot?.sendMessage(
        msg.chat.id,
        `*Commands:*\n/start - Init\n/status - System info\n/help - This menu\n\nSend text/voice/photo to chat.\n\n_Deep research takes 2-5 min._`,
        { parse_mode: "Markdown" },
      );
    });

    this.bot.onText(/\/status/, async (msg) => {
      if (!this.isAuthorized(msg.chat.id)) return;
      const status = await callRendererTool("__get_system_status__", {});
      await this.bot?.sendMessage(msg.chat.id, `🖥️ ${status}`, {
        parse_mode: "Markdown",
      });
    });

    this.bot.on("message", async (msg) => {
      const chatId = msg.chat.id;

      // 🔔 Auto-detect network recovery
      if (this.wasNetworkDown) {
        const downSeconds = Math.floor((Date.now() - this.networkDownSince) / 1000);
        console.log(
          `\n[IRIS Telegram] ✅ Network restored after ${downSeconds}s offline\n`
        );
        this.wasNetworkDown = false;
        this.networkDownSince = 0;
      }

      if (!this.isAuthorized(chatId)) {
        await this.bot
          ?.sendMessage(chatId, `🔒 Unauthorized.\nYour ID: \`${chatId}\``, {
            parse_mode: "Markdown",
          })
          .catch(() => {});
        return;
      }

      if (msg.text?.startsWith("/")) return;

      let userText = "";
      const stopTyping = keepTyping(this.bot!, chatId);

      try {
        if (msg.voice) {
          await this.bot?.sendMessage(chatId, "🎙️ _Listening..._", {
            parse_mode: "Markdown",
          }).catch(() => {});

          userText = await transcribeVoice(
            this.bot!,
            msg.voice.file_id,
            this.botToken,
            this.apiKey,
          );
          if (!userText) {
            stopTyping();
            await this.bot?.sendMessage(
              chatId,
              "⚠️ Couldn't transcribe voice. Please type instead.",
            );
            return;
          }
          await this.bot?.sendMessage(chatId, `🎤 _"${userText}"_`, {
            parse_mode: "Markdown",
          });
        } else if (msg.photo?.length) {
          const photo = msg.photo[msg.photo.length - 1];
          const caption = msg.caption || "What do you see?";
          const analysis = await analyzePhoto(
            this.bot!,
            photo.file_id,
            this.botToken,
            this.apiKey,
            caption,
          );
          stopTyping();
          await this.sendChunkedMessage(chatId, `👁️ ${analysis}`);
          return;
        } else if (msg.document) {
          stopTyping();
          await this.bot?.sendMessage(
            chatId,
            `📁 File received: \`${msg.document.file_name}\``,
            { parse_mode: "Markdown" },
          );
          return;
        } else if (msg.text) {
          userText = msg.text;
        } else {
          stopTyping();
          return;
        }

        // 🧠 Smart model selection
        const selectedModel = pickBestModel(userText);

        // 🔬 Notify user if deep research (takes long)
        if (selectedModel === MODEL_RESEARCH) {
          await this.bot?.sendMessage(
            chatId,
            "🔬 _Deep research initiated. Hold tight, 2-5 min..._",
            { parse_mode: "Markdown" }
          ).catch(() => {});
        }

        const systemPrompt = await buildSystemPrompt(chatId);
        const reply = await askHapuppy(userText, this.apiKey, systemPrompt, selectedModel);
        stopTyping();

        await this.sendChunkedMessage(chatId, reply);
      } catch (err: any) {
        stopTyping();
        console.error("[IRIS Telegram] Error:", err?.message);
        await this.bot
          ?.sendMessage(chatId, `⚠️ Error: ${err?.message}`)
          .catch(() => {});
      }
    });

    // ═════════════════════════════════════════════════════════════════════
    // 🤫 SILENT NETWORK ERROR HANDLING
    // ═════════════════════════════════════════════════════════════════════
    this.bot.on("polling_error", (err: any) => {
      const errMsg = err?.message || String(err);
      const isNetworkErr =
        errMsg.includes("EAI_AGAIN") ||
        errMsg.includes("ETIMEDOUT") ||
        errMsg.includes("AggregateError") ||
        errMsg.includes("ECONNREFUSED") ||
        errMsg.includes("ENOTFOUND");

      const now = Date.now();

      if (isNetworkErr) {
        if (!this.wasNetworkDown) {
          this.wasNetworkDown = true;
          this.networkDownSince = now;
          console.log(
            `\n[IRIS Telegram] 🌐 Network down — auto-retrying silently...\n` +
            `   (Will notify when restored)\n`
          );
        } else if (now - this.lastNetworkLog > 300000) {
          const downMins = Math.floor((now - this.networkDownSince) / 60000);
          console.log(`[IRIS Telegram] 🌐 Still offline (${downMins}m)...`);
          this.lastNetworkLog = now;
        }
      } else {
        if (now - this.lastNetworkLog > 60000) {
          console.error("[IRIS Telegram] ⚠️", errMsg);
          this.lastNetworkLog = now;
        }
      }
    });

    this.bot.on("error", () => {});
  }

  private async sendChunkedMessage(
    chatId: number,
    text: string,
  ): Promise<void> {
    if (!text) return;
    const chunks = text.match(
      new RegExp(`[\\s\\S]{1,${TELEGRAM_MSG_LIMIT}}`, "g"),
    ) || [text];
    for (const chunk of chunks) {
      try {
        await this.bot?.sendMessage(chatId, chunk);
      } catch {
        try {
          await this.bot?.sendMessage(
            chatId,
            chunk.replace(/[*_`\[\]()]/g, ""),
          );
        } catch {}
      }
    }
  }

  async stop(): Promise<void> {
    if (this.bot) {
      try {
        await this.bot.stopPolling();
      } catch {}
      this.bot = null;
    }
    this.isRunning = false;
    this.wasNetworkDown = false;
    this.networkDownSince = 0;
    console.log("[IRIS Telegram] 🛑 Bot stopped.");
  }

  get running(): boolean {
    return this.isRunning;
  }
}

export const irisTelegramBot = new IrisTelegramBot();

// ═════════════════════════════════════════════════════════════════════════════
// 📡 IPC HANDLERS
// ═════════════════════════════════════════════════════════════════════════════
ipcMain.handle("telegram-bot-start", async () => await irisTelegramBot.start());
ipcMain.handle("telegram-bot-stop", async () => {
  await irisTelegramBot.stop();
  return { success: true };
});
ipcMain.handle("telegram-bot-status", () => ({
  running: irisTelegramBot.running,
}));

console.log("[IRIS Telegram] 📡 IPC handlers registered.");