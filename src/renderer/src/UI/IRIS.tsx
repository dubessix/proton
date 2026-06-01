import { useState, useEffect, Suspense, lazy } from "react";
import {
  RiWifiLine,
  RiShieldFlashLine,
  RiLayoutGridLine,
  RiBrainLine,
  RiFolderOpenLine,
  RiPhoneLine,
  RiSettings4Line,
  RiBatteryChargeLine,
  RiCameraLine,
  RiComputerLine,
  RiCloseLine,
  RiImageLine,
} from "react-icons/ri";
import { getSystemStatus } from "@renderer/services/system-info";
import { getHistory } from "@renderer/services/iris-ai-brain";
import ViewSkeleton from "@renderer/components/ViewSkelrton";
import { useTheme } from "@renderer/hooks/useTheme";

import DashboardView from "../views/Dashboard";
import PhoneView from "../views/Phone";
import { VisionMode } from "@renderer/IndexRoot";

// const AppsView = lazy(() => import('../views/APP'))
const WorkFlowEditorView = lazy(() => import("../views/WorkFlowEditor"));
const NotesView = lazy(() => import("../views/Notes"));
const SettingsView = lazy(() => import("../views/Settings"));
const GalleryView = lazy(() => import("../views/Gallery"));

interface IrisProps {
  isSystemActive: boolean;
  toggleSystem: () => void;
  isMicMuted: boolean;
  toggleMic: () => void;
  isVideoOn: boolean;
  visionMode: VisionMode;
  startVision: (mode: "camera" | "screen") => void;
  stopVision: () => void;
  activeStream: MediaStream | null;
}

const IRIS = (props: IrisProps) => {
  const [activeTab, setActiveTab] = useState("DASHBOARD");
  const [stats, setStats] = useState<any>(null);
  const [time, setTime] = useState<Date>(new Date());
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      getSystemStatus().then(setStats);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      const history = await getHistory();
      if (Array.isArray(history)) setChatHistory(history.slice(-15));
    };
    fetchHistory();
    const interval = setInterval(fetchHistory, 500);
    return () => clearInterval(interval);
  }, []);

  const handleVisionClick = () => {
    if (props.isVideoOn) {
      props.stopVision();
    } else {
      setShowSourceModal(true);
    }
  };

  const glassPanel = isDark
    ? "bg-zinc-950/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl"
    : "bg-white/55 backdrop-blur-xl border border-white/80 rounded-2xl shadow-sm";

  return (
    <div
      className={`h-screen w-full font-sans overflow-hidden select-none flex flex-col relative pb-5 ${isDark ? "bg-black text-zinc-100" : "bg-[#EEF2EF] text-[#1A1F1A]"}`}
    >
      <div
        className={`h-14 w-full flex items-center justify-between px-6 z-50 backdrop-blur-md border-b ${isDark ? "bg-zinc-950/80 border-white/5" : "bg-white/40 border-black/10"}`}
      >
        <div className="hidden lg:flex items-center gap-3">
          <RiShieldFlashLine
            className={`text-[#2ECC8F] text-xl animate-pulse`}
          />
          <div className="flex flex-col leading-none">
            <span
              className={`font-black tracking-widest text-lg ${isDark ? "text-zinc-100" : "text-[#1A1F1A]"}`}
            >
              IRIS AI
            </span>
            <span
              className={`text-[12px] font-mono tracking-wide ${isDark ? "text-emerald-500/60" : "text-[#2ECC8F]/60"}`}
            >
              Advanced Voice Assistant
            </span>
          </div>
        </div>

        <div
          className={`hidden md:flex gap-2 p-1 rounded-lg border ${isDark ? "bg-black/40 border-white/5" : "bg-white/50 border-black/10"}`}
        >
          {[
            { id: "DASHBOARD", icon: <RiLayoutGridLine /> },
            { id: "Macros", icon: <RiBrainLine /> },
            // { id: 'Apps', icon: <RiFolderOpenLine /> },
            { id: "NOTES", icon: <RiFolderOpenLine /> },
            { id: "GALLERY", icon: <RiImageLine /> },
            { id: "PHONE", icon: <RiPhoneLine /> },
            { id: "SETTINGS", icon: <RiSettings4Line /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-5 py-1.5 text-[10px] font-bold tracking-widest rounded-md transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? isDark
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                    : "bg-[#2ECC8F]/15 text-[#1A7A50] border border-[#2ECC8F]/30"
                  : isDark
                    ? "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                    : "text-[#8FA08F] hover:text-[#5A6B5A] hover:bg-black/5"
              }`}
            >
              {tab.icon} {tab.id}
            </button>
          ))}
        </div>

        <div
          className={`flex items-center gap-6 text-[11px] font-mono font-bold opacity-60 ${isDark ? "text-zinc-400" : "text-[#5A6B5A]"}`}
        >
          <div
            className={`flex items-center gap-2 ${isDark ? "text-emerald-500" : "text-[#2ECC8F]"}`}
          >
            <RiWifiLine /> <span>Network</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <RiBatteryChargeLine /> <span>100%</span>
          </div>
          <div
            className={`px-2 py-1 rounded ${isDark ? "bg-zinc-800 text-zinc-300" : "bg-white/50 text-[#5A6B5A]"}`}
          >
            {time.toLocaleTimeString()}
          </div>
        </div>
      </div>

      <div
        className={`flex-1 overflow-hidden relative ${isDark ? "bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black" : "bg-[#EEF2EF]"}`}
      >
        <div
          className={`absolute inset-0 ${activeTab === "DASHBOARD" ? "block" : "hidden"}`}
        >
          <DashboardView
            props={props}
            stats={stats}
            chatHistory={chatHistory}
            onVisionClick={handleVisionClick}
          />
        </div>

        <div
          className={`absolute inset-0 ${activeTab === "PHONE" ? "block" : "hidden"}`}
        >
          <PhoneView glassPanel={glassPanel} />
        </div>

        <Suspense fallback={<ViewSkeleton />}>
          {activeTab === "Macros" && <WorkFlowEditorView />}
          {/* {activeTab === 'Apps' && <AppsView />} */}
          {activeTab === "NOTES" && <NotesView glassPanel={glassPanel} />}
          {activeTab === "SETTINGS" && (
            <SettingsView isSystemActive={props.isSystemActive} />
          )}
          {activeTab === "GALLERY" && <GalleryView />}
        </Suspense>
      </div>

      {showSourceModal && (
        <div
          className={`absolute inset-0 z-100 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-200 ${isDark ? "bg-black/80" : "bg-black/30"}`}
        >
          <div
            className={`${glassPanel} w-96 p-1 ${isDark ? "border-emerald-500/30" : "border-[#2ECC8F]/30"} flex flex-col shadow-2xl`}
          >
            <div
              className={`flex items-center justify-between p-4 border-b ${isDark ? "border-white/5 bg-white/5" : "border-black/10 bg-black/5"}`}
            >
              <span
                className={`text-xs font-bold tracking-widest ${isDark ? "text-emerald-400" : "text-[#1A7A50]"}`}
              >
                IRIS VISION - SELECT INPUT SOURCE
              </span>
              <button
                onClick={() => setShowSourceModal(false)}
                className={`cursor-pointer transition-colors ${isDark ? "text-zinc-500 hover:text-white" : "text-[#8FA08F] hover:text-[#1A1F1A]"}`}
              >
                <RiCloseLine size={18} />
              </button>
            </div>

            <div className="p-4 grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  props.startVision("camera");
                  setShowSourceModal(false);
                }}
                className={`cursor-pointer group flex flex-col items-center justify-center gap-3 p-6 rounded-xl transition-all ${isDark ? "bg-black/40 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10" : "bg-white/40 border border-black/10 hover:border-[#2ECC8F]/50 hover:bg-[#2ECC8F]/10"}`}
              >
                <div
                  className={`p-3 rounded-full transition-colors ${isDark ? "bg-zinc-900 group-hover:bg-emerald-500 text-zinc-400 group-hover:text-black" : "bg-[#E0EBE4] group-hover:bg-[#2ECC8F] text-[#8FA08F] group-hover:text-white"}`}
                >
                  <RiCameraLine size={28} />
                </div>
                <span
                  className={`text-[10px] font-bold tracking-widest ${isDark ? "text-zinc-300 group-hover:text-emerald-400" : "text-[#5A6B5A] group-hover:text-[#1A7A50]"}`}
                >
                  CAMERA FEED
                </span>
              </button>

              <button
                onClick={() => {
                  props.startVision("screen");
                  setShowSourceModal(false);
                }}
                className={`cursor-pointer group flex flex-col items-center justify-center gap-3 p-6 rounded-xl transition-all ${isDark ? "bg-black/40 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10" : "bg-white/40 border border-black/10 hover:border-[#2ECC8F]/50 hover:bg-[#2ECC8F]/10"}`}
              >
                <div
                  className={`p-3 rounded-full transition-colors ${isDark ? "bg-zinc-900 group-hover:bg-emerald-500 text-zinc-400 group-hover:text-black" : "bg-[#E0EBE4] group-hover:bg-[#2ECC8F] text-[#8FA08F] group-hover:text-white"}`}
                >
                  <RiComputerLine size={28} />
                </div>
                <span
                  className={`text-[10px] font-bold tracking-widest ${isDark ? "text-zinc-300 group-hover:text-emerald-400" : "text-[#5A6B5A] group-hover:text-[#1A7A50]"}`}
                >
                  SCREEN SHARE
                </span>
              </button>
            </div>

            <div
              className={`p-3 text-center ${isDark ? "bg-black/20 text-zinc-600" : "bg-black/5 text-[#8FA08F]"}`}
            >
              <p className="text-[9px] font-mono">
                SELECT INPUT SOURCE FOR NEURAL PROCESSING
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IRIS;
