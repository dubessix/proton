import fs from "fs";
import path from "path";
import { IpcMain, App } from "electron";
import { exec } from "child_process";
import { GoogleGenAI } from "@google/genai";
import axios from "axios";

// ═══════════════════════════════════════════════════════════════════
// 🌐 HAPUPPY CONFIG
// ═══════════════════════════════════════════════════════════════════
const HAPUPPY_BASE = "https://beta.hapuppy.com/v1/chat/completions";
const MODEL_CODE = "qwen3-coder-480b-a35b-instruct";
const CODE_TIMEOUT = 180000; // 3 minutes for long code generation

export default function registerIrisCoder({
  ipcMain,
  app,
}: {
  ipcMain: IpcMain;
  app: App;
}) {
  const PROJECTS_DIR = path.resolve(app.getPath("userData"), "Projects");
  if (!fs.existsSync(PROJECTS_DIR))
    fs.mkdirSync(PROJECTS_DIR, { recursive: true });

  ipcMain.handle(
    "start-live-coding",
    async (event, { prompt, filename, geminiKey }) => {
      const filePath = path.join(PROJECTS_DIR, filename);

      try {
        fs.writeFileSync(
          filePath,
          "// Boss, connection established. Waiting for AI stream...\n",
        );

        // ════════════════════════════════════════════════════════════════
        // 🅰️ PRIMARY: Try Gemini (if key provided)
        // ════════════════════════════════════════════════════════════════
        if (geminiKey && geminiKey.trim() !== "") {
          const result = await tryGemini(
            prompt,
            filename,
            filePath,
            geminiKey,
            event,
          );
          if (result.success) return result;
          console.warn(
            "[IRIS Coder] ⚠️ Gemini failed → switching to Hapuppy qwen-coder",
          );
        } else {
          console.log(
            "[IRIS Coder] ℹ️ No Gemini key → using Hapuppy qwen-coder",
          );
        }

        // ════════════════════════════════════════════════════════════════
        // 🅱️ FALLBACK: Hapuppy qwen3-coder-480b
        // ════════════════════════════════════════════════════════════════
        return await tryHapuppyCoder(prompt, filename, filePath, event);
      } catch (err: any) {
        const errMsg = String(err?.message || err);
        console.error("[IRIS Coder] ❌ Total failure:", errMsg);
        event.sender.send(
          "live-code-chunk",
          `\n\n❌ [SYSTEM FAILURE]: ${errMsg}`,
        );
        return { success: false, error: errMsg };
      }
    },
  );

  ipcMain.handle("open-in-vscode", async (_event, filePath) => {
    try {
      exec(`code "${filePath}"`);
      return { success: true };
    } catch (err) {
      return { success: false, error: String(err) };
    }
  });
}

// ═══════════════════════════════════════════════════════════════════
// 🅰️ METHOD: GEMINI STREAMING (Original)
// ═══════════════════════════════════════════════════════════════════
async function tryGemini(
  prompt: string,
  filename: string,
  filePath: string,
  geminiKey: string,
  event: any,
): Promise<{ success: boolean; filePath?: string; error?: string }> {
  try {
    console.log("[IRIS Coder] 🅰️ Using Gemini-3-flash-preview...");

    const ai = new GoogleGenAI({ apiKey: geminiKey });

    const response = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: `You are an elite developer. Write the code for: "${prompt}". Output ONLY the raw code for the file ${filename}. Do NOT wrap it in markdown blockquotes.`,
    });

    let fullCode = "";
    for await (const chunk of response) {
      if (chunk.text) {
        fullCode += chunk.text;
        event.sender.send("live-code-chunk", chunk.text);
      }
    }

    if (!fullCode.trim()) {
      throw new Error("Gemini returned empty response");
    }

    fs.writeFileSync(filePath, fullCode);
    console.log("[IRIS Coder] ✅ Gemini succeeded");
    return { success: true, filePath };
  } catch (err: any) {
    const errMsg = String(err?.message || err);
    console.warn("[IRIS Coder] ❌ Gemini failed:", errMsg);
    return { success: false, error: errMsg };
  }
}

// ═══════════════════════════════════════════════════════════════════
// 🅱️ METHOD: HAPUPPY QWEN-CODER STREAMING (Fallback)
// ═══════════════════════════════════════════════════════════════════
async function tryHapuppyCoder(
  prompt: string,
  filename: string,
  filePath: string,
  event: any,
): Promise<{ success: boolean; filePath?: string; error?: string }> {
  try {
    console.log("[IRIS Coder] 🅱️ Using Hapuppy qwen3-coder-480b...");

    const hapuppyKey = (process.env.HAPUPPY_API_KEY || "").trim();

    if (!hapuppyKey) {
      throw new Error("HAPUPPY_API_KEY missing in .env");
    }

    // 🚀 Streaming request to Hapuppy
    const response = await axios.post(
      HAPUPPY_BASE,
      {
        model: MODEL_CODE,
        messages: [
          {
            role: "system",
            content: `You are an elite 10x developer. Write clean, optimized, production-ready code. Output ONLY raw code — no markdown blockquotes, no explanations.`,
          },
          {
            role: "user",
            content: `Write the code for: "${prompt}". The file is named ${filename}. Output ONLY the raw code.`,
          },
        ],
        temperature: 0.3,
        max_tokens: 4096,
        stream: true, // 🔥 Enable streaming for typewriter effect
      },
      {
        timeout: CODE_TIMEOUT,
        headers: {
          Authorization: `Bearer ${hapuppyKey}`,
          "Content-Type": "application/json",
        },
        responseType: "stream", // Important: get raw stream
      },
    );

    let fullCode = "";

    // 📡 Parse SSE (Server-Sent Events) stream
    await new Promise<void>((resolve, reject) => {
      let buffer = "";

      response.data.on("data", (chunk: Buffer) => {
        buffer += chunk.toString();
        const lines = buffer.split("\n");
        buffer = lines.pop() || ""; // Keep incomplete line in buffer

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data: ")) continue;

          const data = trimmed.slice(6); // Remove "data: " prefix
          if (data === "[DONE]") {
            resolve();
            return;
          }

          try {
            const parsed = JSON.parse(data);
            const content = parsed?.choices?.[0]?.delta?.content || "";
            if (content) {
              fullCode += content;
              event.sender.send("live-code-chunk", content); // 🎬 Live typing effect
            }
          } catch {
            // Skip invalid JSON chunks
          }
        }
      });

      response.data.on("end", () => resolve());
      response.data.on("error", (err: Error) => reject(err));
    });

    if (!fullCode.trim()) {
      throw new Error("Hapuppy qwen-coder returned empty response");
    }

    // Clean up markdown blockquotes if AI added them anyway
    fullCode = fullCode
      .replace(/^```[\w]*\n/, "")
      .replace(/\n```$/, "")
      .trim();

    fs.writeFileSync(filePath, fullCode);
    console.log("[IRIS Coder] ✅ Hapuppy qwen-coder succeeded");
    return { success: true, filePath };
  } catch (err: any) {
    const errMsg =
      err?.response?.data?.error?.message || err?.message || String(err);
    console.error("[IRIS Coder] ❌ Hapuppy qwen-coder failed:", errMsg);
    event.sender.send("live-code-chunk", `\n\n❌ [HAPUPPY FAILURE]: ${errMsg}`);
    return { success: false, error: errMsg };
  }
}
