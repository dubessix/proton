/**
 * IRIS Telegram Bot — HAPUPPY EDITION
 * Uses Hapuppy proxy for 100+ models with 100K daily credits
 * 
 * Features:
 * ✅ Silent network error handling (no log spam)
 * ✅ Auto-recovery when network restored
 * ✅ Self-healing polling
 * ✅ Multi-modal (text, voice, photo)
 */

import TelegramBot from "node-telegram-bot-api";
import axios from "axios";
import fs from "fs";
import path from "path";
import os from "os";
import { BrowserWindow, safeStorage, app, ipcMain } from "electron";

// ═════════════════════════════════════════════════════════════════════════════
// CONFIG — Hapuppy is OpenAI-compatible
// ═════════════════════════════════════════════════════════════════════════════
const HAPUPPY_BASE = "https://beta.hapuppy.com/v1/chat/completions";

// 🎯 Smart model selection — best free models for each task
const MODEL_CHAT = "gemini-3.1-flash-lite"; // Default chat (cheapest with tools)
const MODEL_VISION = "gemini-2.5-flash"; // Photo analysis
const MODEL_FAST = "gemma-4-31b-it"; // Ultra-cheap quick replies
const MODEL_SMART = "deepseek-v3.2"; // Complex reasoning

const MAX_TOOL_LOOPS = 5;
const TELEGRAM_MSG_LIMIT = 4000;

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
// TOOL DECLARATIONS (OpenAI format)
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
  { name: "deep_research", description: "Deep web research.", params: { query: "string" }, required: ["query"] },
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
// IPC TOOL BRIDGE
// ═════════════════════════════════════════════════════════════════════════════
async function callRendererTool(
  name: string,
  args: Record<string, any>,
): Promise<string> {
  const mainWindow = BrowserWindow.getAllWindows()[0];
  if (!mainWindow || mainWindow.isDestroyed()) {
    return "Error: Main window not available.";
  }

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
      resolve(`Tool "${name}" timed out.`);
    }, 60000);
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
// SYSTEM PROMPT
// ═════════════════════════════════════════════════════════════════════════════
async function buildSystemPrompt(chatId: number): Promise<string> {
  let context = "";
  try {
    context = await callRendererTool("__get_iris_context__", {});
  } catch {}

  return `# 👁️ IRIS — Telegram Interface (JARVIS-style)
You are IRIS, a high-performance AI agent.
Execute commands aggressively using tools. Be concise.

## IDENTITY
- Creator: Debjeet Dhar
- Tone: Witty, sharp, Hinglish-friendly, JARVIS-style
- Rule: Never sound like a support bot.

## RULES
- Keep replies short for Telegram
- Use minimal Markdown (bold/italic only)
- Call tools when needed
- Multi-step? Chain tool calls

## CONTEXT
- Time: ${new Date().toLocaleString()}
- Chat ID: ${chatId}
${context}
`;
}

// ═════════════════════════════════════════════════════════════════════════════
// HAPUPPY CHAT — Main AI function (OpenAI-compatible)
// ═════════════════════════════════════════════════════════════════════════════
async function askHapuppy(
  userText: string,
  apiKey: string,
  systemPrompt: string,
  model: string = MODEL_CHAT,
): Promise<string> {
  let messages: any[] = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userText },
  ];

  let loops = MAX_TOOL_LOOPS;

  while (loops-- > 0) {
    let res;
    try {
      res = await axios.post(
        HAPUPPY_BASE,
        {
          model,
          messages,
          tools: toolsForHapuppy(),
          tool_choice: "auto",
          temperature: 0.7,
          max_tokens: 2048,
        },
        {
          timeout: 60000,
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        },
      );
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
// VOICE TRANSCRIPTION
// ═════════════════════════════════════════════════════════════════════════════
async function transcribeVoice(
  bot: TelegramBot,
  fileId: string,
  botToken: string,
  apiKey: string,
): Promise<string> {
  try {
    const fileInfo = await bot.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${botToken}/${fileInfo.file_path}`;
    const audioRes = await axios.get(fileUrl, {
      responseType: "arraybuffer",
      timeout: 30000,
    });
    const base64Audio = Buffer.from(audioRes.data).toString("base64");

    const res = await axios.post(
      HAPUPPY_BASE,
      {
        model: "gpt-4o-mini-transcribe",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "input_audio",
                input_audio: { data: base64Audio, format: "ogg" },
              },
              {
                type: "text",
                text: "Transcribe this audio exactly. Output only the text.",
              },
            ],
          },
        ],
      },
      {
        timeout: 30000,
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      },
    );

    return res.data?.choices?.[0]?.message?.content?.trim() || "";
  } catch (err: any) {
    // Silent fail — will prompt user to type
    return "";
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// PHOTO ANALYSIS
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
              {
                type: "image_url",
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`,
                },
              },
              {
                type: "text",
                text: caption || "Describe this image in detail.",
              },
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
// BOT CLASS
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
            family: 4, // Force IPv4 to avoid IPv6 DNS issues
          },
          timeout: 30000,
        } as any,
      });

      this.isRunning = true;
      this.registerHandlers();

      console.log("[IRIS Telegram] ✅ Bot online (HAPUPPY edition).");
      console.log(`[IRIS Telegram] 🔑 Hapuppy key: ${source}`);
      console.log(`[IRIS Telegram] 🎯 Chat model: ${MODEL_CHAT}`);
      console.log(`[IRIS Telegram] 👁️ Vision model: ${MODEL_VISION}`);
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
        `👁️ *IRIS is online.*\n\n_Powered by Hapuppy AI proxy_\n\nSend text, voice, or photo and I'll execute.\n\n/status /help${idInfo}`,
        { parse_mode: "Markdown" },
      );
    });

    this.bot.onText(/\/help/, (msg) => {
      this.bot?.sendMessage(
        msg.chat.id,
        `*Commands:*\n/start - Init\n/status - System info\n/help - This menu\n\nSend text/voice/photo to chat.`,
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
            {
              parse_mode: "Markdown",
            },
          );
          return;
        } else if (msg.text) {
          userText = msg.text;
        } else {
          stopTyping();
          return;
        }

        const systemPrompt = await buildSystemPrompt(chatId);
        const reply = await askHapuppy(userText, this.apiKey, systemPrompt);
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
    // Suppresses log spam, only notifies on state change (down/up)
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
        // First time going down → notify once
        if (!this.wasNetworkDown) {
          this.wasNetworkDown = true;
          this.networkDownSince = now;
          console.log(
            `\n[IRIS Telegram] 🌐 Network down — auto-retrying silently...\n` +
            `   (Will notify when restored)\n`
          );
        }
        // After 5 minutes of being down, give a status update
        else if (now - this.lastNetworkLog > 300000) {
          const downMins = Math.floor((now - this.networkDownSince) / 60000);
          console.log(`[IRIS Telegram] 🌐 Still offline (${downMins}m)...`);
          this.lastNetworkLog = now;
        }
      } else {
        // Non-network errors: log normally (rate-limited)
        if (now - this.lastNetworkLog > 60000) {
          console.error("[IRIS Telegram] ⚠️", errMsg);
          this.lastNetworkLog = now;
        }
      }
    });

    // Silent error handler (other types)
    this.bot.on("error", () => {
      // Silent — handled elsewhere
    });
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