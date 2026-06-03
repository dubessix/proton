import { useState, useEffect } from "react";

interface BotStatus {
  running: boolean;
}

const TelegramWidget = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<BotStatus>({ running: false });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [uptime, setUptime] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  // ── Poll bot status every 3s ─────────────────────────────────────────
  useEffect(() => {
    const check = async () => {
      try {
        const s = await window.electron.ipcRenderer.invoke(
          "telegram-bot-status",
        );
        setStatus(s);
        if (s.running && !startTime) setStartTime(Date.now());
        if (!s.running && startTime) setStartTime(null);
      } catch {}
    };
    check();
    const interval = setInterval(check, 3000);
    return () => clearInterval(interval);
  }, [startTime]);

  // ── Update uptime ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!startTime) {
      setUptime(0);
      return;
    }
    const timer = setInterval(() => {
      setUptime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${time}] ${msg}`, ...prev].slice(0, 50));
  };

  const showToast = (
    msg: string,
    type: "success" | "error" | "info" = "info",
  ) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const startBot = async () => {
    setLoading(true);
    addLog("Starting bot...");
    try {
      const res = await window.electron.ipcRenderer.invoke(
        "telegram-bot-start",
      );
      if (res.success) {
        showToast("Bot started successfully!", "success");
        addLog("✅ Bot is now online");
      } else {
        showToast(res.error, "error");
        addLog(`❌ ${res.error}`);
      }
    } catch (err: any) {
      showToast(err.message, "error");
      addLog(`❌ ${err.message}`);
    }
    setLoading(false);
  };

  const stopBot = async () => {
    setLoading(true);
    addLog("Stopping bot...");
    try {
      await window.electron.ipcRenderer.invoke("telegram-bot-stop");
      showToast("Bot stopped.", "info");
      addLog("🛑 Bot stopped");
    } catch (err: any) {
      showToast(err.message, "error");
    }
    setLoading(false);
  };

  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}h ${m}m ${s}s`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  };

  return (
    <>
      {/* ─── Floating Button ──────────────────────────────────────── */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 group z-40"
        title="Telegram Bot Control"
      >
        <div className="relative">
          {/* Pulse rings when running */}
          {status.running && (
            <>
              <span className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping" />
              <span className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-pulse" />
            </>
          )}
          <div
            className={`relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 ${
              status.running
                ? "bg-gradient-to-br from-blue-400 to-cyan-500"
                : "bg-gradient-to-br from-gray-200 to-gray-300"
            }`}
          >
            <svg
              className="w-7 h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
            </svg>
          </div>
          {/* Status dot */}
          <div
            className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              status.running ? "bg-green-400" : "bg-gray-400"
            }`}
          />
        </div>
      </button>

      {/* ─── Modal ───────────────────────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-blue-50/60 via-white/40 to-cyan-50/60 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255,255,255,0.5)",
            }}
          >
            {/* ── Header ─────────────────────────────────────────── */}
            <div className="relative bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 p-6 text-white">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold">IRIS Telegram</h2>
                  <p className="text-xs text-white/80">Remote AI Interface</p>
                </div>
              </div>

              {/* Live status badge */}
              <div className="flex items-center gap-2 mt-3 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5 w-fit">
                <span
                  className={`w-2 h-2 rounded-full ${
                    status.running
                      ? "bg-green-300 animate-pulse"
                      : "bg-gray-300"
                  }`}
                />
                <span className="text-xs font-medium">
                  {status.running
                    ? `Online • ${formatUptime(uptime)}`
                    : "Offline"}
                </span>
              </div>
            </div>

            {/* ── Body ───────────────────────────────────────────── */}
            <div className="p-6 space-y-5">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-xs text-gray-500">Status</div>
                  <div
                    className={`font-bold text-sm ${
                      status.running ? "text-green-600" : "text-gray-400"
                    }`}
                  >
                    {status.running ? "Active" : "Stopped"}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
                  <div className="text-2xl mb-1">⏱️</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                  <div className="font-bold text-sm text-gray-700">
                    {status.running ? formatUptime(uptime) : "—"}
                  </div>
                </div>
              </div>

              {/* Info card */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-100">
                <div className="flex gap-3">
                  <div className="text-xl">💡</div>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">
                      Quick Setup
                    </p>
                    <p className="text-xs text-amber-700 mt-1">
                      Configure your credentials in{" "}
                      <code className="bg-amber-100 px-1 rounded">.env</code>{" "}
                      file, then hit start.
                    </p>
                  </div>
                </div>
              </div>

              {/* Activity log */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Activity Log
                  </h3>
                  {logs.length > 0 && (
                    <button
                      onClick={() => setLogs([])}
                      className="text-xs text-gray-400 hover:text-gray-600"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 max-h-32 overflow-y-auto p-3">
                  {logs.length === 0 ? (
                    <p className="text-xs text-gray-400 text-center py-2">
                      No activity yet
                    </p>
                  ) : (
                    <div className="space-y-1">
                      {logs.map((log, i) => (
                        <div
                          key={i}
                          className="text-xs text-gray-600 font-mono"
                        >
                          {log}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Control buttons */}
              <div className="flex gap-3">
                {!status.running ? (
                  <button
                    onClick={startBot}
                    disabled={loading}
                    className="flex-1 group relative py-3 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 disabled:opacity-50 transition-all"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Starting...
                        </>
                      ) : (
                        <>▶️ Start Bot</>
                      )}
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={stopBot}
                    disabled={loading}
                    className="flex-1 group relative py-3 rounded-2xl bg-gradient-to-r from-red-400 to-rose-500 text-white font-semibold shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 disabled:opacity-50 transition-all"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Stopping...
                        </>
                      ) : (
                        <>⏹️ Stop Bot</>
                      )}
                    </span>
                  </button>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-center gap-2 pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-400">
                  Powered by Gemini AI
                </span>
                <span className="text-xs text-gray-300">•</span>
                <span className="text-xs text-gray-400">@BotFather</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Toast Notification ──────────────────────────────────── */}
      {toast && (
        <div className="fixed bottom-24 right-6 z-[60] animate-slide-up">
          <div
            className={`rounded-2xl px-4 py-3 shadow-2xl backdrop-blur-md border max-w-xs ${
              toast.type === "success"
                ? "bg-green-50/95 border-green-200 text-green-800"
                : toast.type === "error"
                  ? "bg-red-50/95 border-red-200 text-red-800"
                  : "bg-blue-50/95 border-blue-200 text-blue-800"
            }`}
          >
            <div className="flex items-start gap-2">
              <span className="text-lg">
                {toast.type === "success"
                  ? "✅"
                  : toast.type === "error"
                    ? "❌"
                    : "ℹ️"}
              </span>
              <p className="text-sm font-medium">{toast.msg}</p>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default TelegramWidget;