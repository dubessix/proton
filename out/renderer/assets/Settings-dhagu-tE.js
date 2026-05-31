import { A as nets, At as RiUserLine, C as themeMap, Ct as RiSettings4Line, D as AnimatePresence, Dt as RiSunLine, E as motion, F as RiBrainLine, Lt as __toESM, O as require_jsx_runtime, Pt as require_react, S as GiArtificialIntelligence, T as useThemeStore, V as RiCpuLine, W as RiDownloadCloud2Line, _t as RiRefreshLine, bt as RiScan2Line, dt as RiMoonLine, gt as RiRecordCircleLine, ht as RiPlugLine, j as RiAddLine, jt as RiUserVoiceLine, k as detectSingleFace, kt as RiTerminalWindowLine, nt as RiKey2Line, ot as RiLock2Line, st as RiLockPasswordLine, vt as RiRocketLine, wt as RiShieldKeyholeLine, yt as RiSave3Line, z as RiCloudLine } from "./index-knnN0Im8.js";
//#region src/renderer/src/hooks/useTheme.ts
var import_react = /* @__PURE__ */ __toESM(require_react());
function useTheme() {
	const { theme, setTheme, toggleTheme } = useThemeStore();
	return {
		theme,
		colors: themeMap[theme],
		setTheme,
		toggleTheme,
		isDark: theme === "dark",
		isLight: theme === "light"
	};
}
//#endregion
//#region src/renderer/src/views/Settings.tsx
var import_jsx_runtime = require_jsx_runtime();
var SettingsView = ({ isSystemActive }) => {
	const [activeTab, setActiveTab] = (0, import_react.useState)("updates");
	const [voice, setVoice] = (0, import_react.useState)(localStorage.getItem("iris_voice_profile") || "MALE");
	const [personality, setPersonality] = (0, import_react.useState)("");
	const [userName, setUserName] = (0, import_react.useState)(localStorage.getItem("iris_user_name") || "");
	const [geminiKey, setGeminiKey] = (0, import_react.useState)(localStorage.getItem("iris_custom_api_key") || "");
	const [groqKey, setGroqKey] = (0, import_react.useState)(localStorage.getItem("iris_groq_api_key") || "");
	const [hfKey, setHfKey] = (0, import_react.useState)(localStorage.getItem("iris_hf_api_key") || "");
	const [tailvyKey, setTailvyKey] = (0, import_react.useState)(localStorage.getItem("iris_tailvy_api_key") || "");
	const [isSecurityUnlocked, setIsSecurityUnlocked] = (0, import_react.useState)(false);
	const [authPin, setAuthPin] = (0, import_react.useState)("");
	const [authError, setAuthError] = (0, import_react.useState)(false);
	const [newPin, setNewPin] = (0, import_react.useState)("");
	const [faceCount, setFaceCount] = (0, import_react.useState)(0);
	const [isScanningFace, setIsScanningFace] = (0, import_react.useState)(false);
	const [enrollStatus, setEnrollStatus] = (0, import_react.useState)("");
	const videoRef = (0, import_react.useRef)(null);
	const [appVersion, setAppVersion] = (0, import_react.useState)("1.3.0");
	const [updateStatus, setUpdateStatus] = (0, import_react.useState)("idle");
	const [updateVersion, setUpdateVersion] = (0, import_react.useState)("");
	const [updateNotes, setUpdateNotes] = (0, import_react.useState)("No new updates detected.");
	const [downloadProgress, setDownloadProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (window.electron?.ipcRenderer) {
			window.electron.ipcRenderer.invoke("get-personality").then((res) => {
				if (res) setPersonality(res);
			});
			window.electron.ipcRenderer.invoke("check-vault-status").then((res) => setFaceCount(res?.faceCount || 0));
			window.electron.ipcRenderer.invoke("get-app-version").then((v) => setAppVersion(v));
			window.electron.ipcRenderer.on("updater-event", (_e, { status, data, error }) => {
				if (status === "checking") setUpdateStatus("checking");
				if (status === "available") {
					setUpdateStatus("available");
					setUpdateVersion(data.version);
					setUpdateNotes(data.releaseNotes || "Bug fixes and performance improvements.");
				}
				if (status === "not-available") {
					setUpdateStatus("idle");
					setUpdateNotes("System is up to date.");
				}
				if (status === "downloading") {
					setUpdateStatus("downloading");
					setDownloadProgress(Math.round(data.percent));
				}
				if (status === "downloaded") setUpdateStatus("ready");
				if (status === "error") {
					setUpdateStatus("error");
					setUpdateNotes(`Error: ${error}`);
				}
			});
		}
		return () => {
			if (window.electron?.ipcRenderer) window.electron.ipcRenderer.removeAllListeners("updater-event");
		};
	}, []);
	const checkForUpdates = () => window.electron.ipcRenderer.invoke("check-for-updates");
	const downloadUpdate = () => window.electron.ipcRenderer.invoke("download-update");
	const installUpdate = () => window.electron.ipcRenderer.invoke("install-update");
	const handleVoiceChange = (v) => {
		if (isSystemActive) return;
		setVoice(v);
		localStorage.setItem("iris_voice_profile", v);
	};
	const handlePersonalityChange = (e) => {
		const text = e.target.value;
		if (text.trim().split(/\s+/).filter((w) => w.length > 0).length <= 150) setPersonality(text);
	};
	const savePersonality = async () => {
		if (window.electron?.ipcRenderer) {
			await window.electron.ipcRenderer.invoke("set-personality", personality);
			alert("Personality Matrix Saved Securely to OS.");
		}
	};
	const saveUserName = () => {
		localStorage.setItem("iris_user_name", userName);
		alert("User Designation Saved.");
	};
	const saveApiKeys = async () => {
		localStorage.setItem("iris_custom_api_key", geminiKey);
		localStorage.setItem("iris_groq_api_key", groqKey);
		localStorage.setItem("iris_hf_api_key", hfKey);
		localStorage.setItem("iris_tailvy_api_key", tailvyKey);
		if (window.electron?.ipcRenderer) try {
			await window.electron.ipcRenderer.invoke("secure-save-keys", {
				groqKey,
				geminiKey
			});
		} catch (e) {}
		alert("All Neural Uplinks (API Keys) secured locally and in OS Vault. Restart AI modules to apply.");
	};
	const currentWordCount = personality.trim().split(/\s+/).filter((w) => w.length > 0).length;
	const unlockSecurityModule = async () => {
		if (!window.electron?.ipcRenderer) return;
		if (await window.electron.ipcRenderer.invoke("verify-vault-pin", authPin)) {
			setIsSecurityUnlocked(true);
			setAuthPin("");
		} else {
			setAuthError(true);
			setTimeout(() => setAuthError(false), 1e3);
		}
	};
	const updateMasterPin = async () => {
		if (newPin.length !== 4 || !window.electron?.ipcRenderer) return;
		await window.electron.ipcRenderer.invoke("setup-vault-pin", newPin);
		setNewPin("");
		alert("Master PIN Updated Successfully.");
	};
	const startFaceEnrollment = async () => {
		setIsScanningFace(true);
		setEnrollStatus("INITIALIZING CAMERA...");
		try {
			await Promise.all([
				nets.ssdMobilenetv1.loadFromUri("./models"),
				nets.faceLandmark68Net.loadFromUri("./models"),
				nets.faceRecognitionNet.loadFromUri("./models")
			]);
			const stream = await navigator.mediaDevices.getUserMedia({ video: true });
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
				setEnrollStatus("POSITION FACE IN FRAME");
				const scanInterval = setInterval(async () => {
					if (!videoRef.current || videoRef.current.readyState !== 4) return;
					const detection = await detectSingleFace(videoRef.current).withFaceLandmarks().withFaceDescriptor();
					if (detection) {
						clearInterval(scanInterval);
						setEnrollStatus("FACE ACQUIRED. ENCRYPTING...");
						const descriptorArray = Array.from(detection.descriptor);
						if (window.electron?.ipcRenderer) await window.electron.ipcRenderer.invoke("setup-vault-face", descriptorArray);
						stream.getTracks().forEach((t) => t.stop());
						setIsScanningFace(false);
						setFaceCount((prev) => prev + 1);
						alert("New Biometric Identity Saved.");
					}
				}, 1e3);
			}
		} catch (e) {
			setEnrollStatus("CAMERA ERROR");
			setTimeout(() => setIsScanningFace(false), 2e3);
		}
	};
	const { theme, toggleTheme, isDark } = useTheme();
	const cardClass = "bg-(--color-surface) border border-(--color-border) p-6 md:p-8 rounded-2xl flex flex-col gap-5 hover:border-white/20 transition-all shadow-lg dark:bg-[#0f0f13] dark:border-white/10";
	const inputContainerClass = "flex items-center bg-(--color-input-bg) border border-(--color-border) rounded-lg px-4 py-3 focus-within:border-emerald-300 dark:focus-within:border-white/30 focus-within:bg-white dark:focus-within:bg-black transition-all duration-300 w-full dark:bg-[#050505]";
	const titleClass = "text-sm font-semibold text-(--color-text) dark:text-white flex items-center gap-2";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 p-6 md:p-10 lg:p-16 flex flex-col items-center bg-(--color-background) dark:bg-[#030303] min-h-screen text-(--color-text) dark:text-[#E4E6EB] overflow-y-auto scrollbar-small",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "w-full max-w-4xl flex flex-col gap-8",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.03)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiArtificialIntelligence, {
							size: 36,
							className: "text-white"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold tracking-tight text-white",
						children: "Command Center"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-zinc-400 font-mono mt-1 tracking-widest flex items-center gap-2 uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiRecordCircleLine, {
							className: `${isSystemActive ? "text-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" : "text-zinc-600"}`,
							size: 14
						}), isSystemActive ? "System Online" : "System Offline"]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex bg-[#0a0a0c] p-1 rounded-xl border border-white/10 w-full md:w-fit shadow-lg overflow-x-auto scrollbar-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("updates"),
							className: `flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-widest rounded-lg transition-all duration-300 ${activeTab === "updates" ? "bg-white text-black shadow-md" : "text-zinc-500 hover:text-white hover:bg-white/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiTerminalWindowLine, { size: 16 }), " SYSTEM"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("general"),
							className: `flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-widest rounded-lg transition-all duration-300 ${activeTab === "general" ? "bg-white text-black shadow-md" : "text-zinc-500 hover:text-white hover:bg-white/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSettings4Line, { size: 16 }), " GENERAL"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("keys"),
							className: `flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-widest rounded-lg transition-all duration-300 ${activeTab === "keys" ? "bg-white text-black shadow-md" : "text-zinc-500 hover:text-white hover:bg-white/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiPlugLine, { size: 16 }), " API KEYS"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveTab("security"),
							className: `flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-widest rounded-lg transition-all duration-300 ${activeTab === "security" ? "bg-white text-black shadow-md" : "text-zinc-500 hover:text-white hover:bg-white/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiShieldKeyholeLine, { size: 16 }), " SECURITY"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-125 pb-12 mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
					mode: "wait",
					children: [
						activeTab === "updates" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10
							},
							transition: { duration: .2 },
							className: "grid grid-cols-1 md:grid-cols-2 gap-6 absolute w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `${cardClass} md:col-span-1 border-emerald-500/20`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center border-b border-white/10 pb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: titleClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiRocketLine, {
											className: "text-emerald-400",
											size: 18
										}), " OS Firmware"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded font-mono font-bold tracking-widest",
										children: ["v", appVersion]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col gap-4 items-center justify-center flex-1 py-4 text-center",
									children: updateStatus === "idle" || updateStatus === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiTerminalWindowLine, {
											size: 48,
											className: "text-zinc-700"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-zinc-400 font-mono",
											children: "Current build is stable."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: checkForUpdates,
											className: "mt-2 w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold tracking-widest text-[11px] flex items-center justify-center gap-2 transition-all cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiRefreshLine, { size: 16 }), " CHECK FOR UPDATES"]
										})
									] }) : updateStatus === "checking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiRefreshLine, {
										size: 48,
										className: "text-emerald-500 animate-spin"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-emerald-400 font-mono animate-pulse",
										children: "PINGING NEURAL NETWORK..."
									})] }) : updateStatus === "available" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiDownloadCloud2Line, {
											size: 48,
											className: "text-cyan-400"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-cyan-400 font-mono",
											children: ["NEW BUILD FOUND: v", updateVersion]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: downloadUpdate,
											className: "mt-2 w-full py-3 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-400 hover:text-black font-bold tracking-widest text-[11px] flex items-center justify-center gap-2 transition-all border border-cyan-500/50 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiDownloadCloud2Line, { size: 16 }), " INITIALIZE DOWNLOAD"]
										})
									] }) : updateStatus === "downloading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-full flex flex-col gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-[10px] font-mono text-zinc-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DOWNLOADING PATCH..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [downloadProgress, "%"] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-full h-2 bg-black rounded-full overflow-hidden border border-white/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] transition-all duration-300",
												style: { width: `${downloadProgress}%` }
											})
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiRecordCircleLine, {
											size: 48,
											className: "text-emerald-400 animate-pulse"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-emerald-400 font-mono",
											children: "PATCH DOWNLOADED"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: installUpdate,
											className: "mt-2 w-full py-3 rounded-lg bg-emerald-500 text-black font-bold tracking-widest text-[11px] flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiRocketLine, { size: 16 }), " EXECUTE RESTART"]
										})
									] })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `${cardClass} md:col-span-1`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-between items-center border-b border-white/10 pb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: titleClass,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiTerminalWindowLine, {
												className: "text-zinc-400",
												size: 18
											}),
											" ",
											"Patch Notes"
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1 bg-(--color-surfaceVariant) dark:bg-[#050505] border border-(--color-border) dark:border-white/10 rounded-xl p-4 overflow-y-auto max-h-60 scrollbar-small",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "text-[11px] font-mono text-zinc-400 whitespace-pre-wrap leading-relaxed",
										children: updateNotes
									})
								})]
							})]
						}, "updates"),
						activeTab === "general" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10
							},
							transition: { duration: .2 },
							className: "grid grid-cols-1 md:grid-cols-2 gap-6 absolute w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `${cardClass} md:col-span-2`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: titleClass,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiUserLine, {
												className: "text-zinc-400",
												size: 18
											}), " AI Personality Matrix"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `text-[10px] font-mono tracking-widest ${currentWordCount >= 150 ? "text-red-400" : "text-zinc-400"}`,
												children: [currentWordCount, " / 150 WORDS"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: savePersonality,
												className: "text-zinc-400 hover:text-white transition-colors bg-white/5 p-2 rounded-md hover:bg-white/10 border border-white/5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSave3Line, { size: 18 })
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: personality,
										onChange: handlePersonalityChange,
										placeholder: "Define who IRIS is. Example: 'You are a sassy, highly technical assistant...'",
										className: "bg-(--color-surfaceVariant) dark:bg-[#050505] border border-(--color-border) dark:border-white/10 rounded-lg p-4 text-sm text-(--color-text) dark:text-white h-32 resize-none focus:border-white/30 outline-none transition-all scrollbar-small"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cardClass,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-between items-end",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: titleClass,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiUserLine, {
												className: "text-zinc-400",
												size: 18
											}), " User Designation"]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: inputContainerClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: userName,
											onChange: (e) => setUserName(e.target.value),
											placeholder: "Enter operator name...",
											className: "bg-transparent border-none outline-none text-sm text-(--color-text) dark:text-white w-full placeholder:text-zinc-600 font-medium"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: saveUserName,
											className: "text-zinc-500 hover:text-white transition-colors ml-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSave3Line, { size: 20 })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `${cardClass} md:col-span-2`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: titleClass,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSettings4Line, {
												className: "text-zinc-400",
												size: 18
											}), "Visual Theme"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-zinc-500 mt-2 max-w-2xl",
											children: "Toggle between Light mode and Cyberpunk Dark mode. The selected mode is retained on restart."
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: toggleTheme,
											className: "inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-(--color-primary) text-white shadow-[0_20px_40px_rgba(0,200,150,0.15)] hover:bg-(--color-primary-dark) transition-colors",
											children: [isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSunLine, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiMoonLine, { size: 18 }), isDark ? "Switch to Light Mode" : "Switch to Dark Mode"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 dark:bg-[#0f0f13]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-(--color-text)",
												children: "Current Mode"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-zinc-500 mt-2",
												children: theme.toUpperCase()
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 dark:bg-[#0f0f13]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-(--color-text)",
												children: "Persistence"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-zinc-500 mt-2",
												children: "Saved in localStorage and re-applied automatically."
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `${cardClass} relative`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: titleClass,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiUserVoiceLine, {
													className: "text-zinc-400",
													size: 18
												}), " OS Voice Profile"]
											}), isSystemActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] text-red-400 font-mono tracking-widest flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded border border-red-500/20",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiLock2Line, {}), " LOCKED AS IRIS IS CONNECTED"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `flex gap-3 h-12 mt-1 ${isSystemActive ? "opacity-40 cursor-not-allowed" : ""}`,
											children: ["FEMALE", "MALE"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleVoiceChange(s),
												disabled: isSystemActive,
												className: `cursor-pointer flex-1 flex items-center justify-center text-[12px] font-bold rounded-lg transition-all tracking-widest border ${voice === s ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]" : "bg-(--color-surfaceVariant) border-(--color-border) dark:bg-[#050505] text-zinc-400 hover:text-(--color-text) hover:border-white/30"}`,
												children: s
											}, s))
										}),
										isSystemActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 z-10",
											title: "Disconnect AI to change voice"
										})
									]
								})
							]
						}, "general"),
						activeTab === "keys" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10
							},
							transition: { duration: .2 },
							className: "grid grid-cols-1 gap-6 absolute w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `${cardClass} gap-6`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: titleClass,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiKey2Line, {
													className: "text-zinc-400",
													size: 18
												}),
												" ",
												"External API Endpoints"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: saveApiKeys,
											className: "bg-white text-black px-6 py-2.5 rounded-lg text-xs font-bold tracking-widest hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSave3Line, { size: 16 }), " SAVE ALL KEYS"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 md:grid-cols-2 gap-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-[10px] text-zinc-400 font-mono tracking-widest uppercase flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiBrainLine, { size: 14 }), " Gemini Pro Core"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: inputContainerClass,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "password",
														value: geminiKey,
														onChange: (e) => setGeminiKey(e.target.value),
														placeholder: "AIzaSy_...",
														className: "bg-transparent border-none outline-none text-sm font-mono text-zinc-100 w-full placeholder:text-zinc-700"
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-[10px] text-zinc-400 font-mono tracking-widest uppercase flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiCpuLine, { size: 14 }), " Groq Fast Inferencing"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: inputContainerClass,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "password",
														value: groqKey,
														onChange: (e) => setGroqKey(e.target.value),
														placeholder: "gsk_...",
														className: "bg-transparent border-none outline-none text-sm font-mono text-zinc-100 w-full placeholder:text-zinc-700"
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2 md:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-[10px] text-zinc-400 font-mono tracking-widest uppercase flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiCloudLine, { size: 14 }), " Hugging Face Vision"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: inputContainerClass,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "password",
														value: hfKey,
														onChange: (e) => setHfKey(e.target.value),
														placeholder: "hf_...",
														className: "bg-transparent border-none outline-none text-sm font-mono text-zinc-100 w-full placeholder:text-zinc-700"
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2 md:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-[10px] text-zinc-400 font-mono tracking-widest uppercase flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiPlugLine, { size: 14 }), " Tailvy Builder Agent"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: inputContainerClass,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "password",
														value: tailvyKey,
														onChange: (e) => setTailvyKey(e.target.value),
														placeholder: "tlv_...",
														className: "bg-transparent border-none outline-none text-sm font-mono text-zinc-100 w-full placeholder:text-zinc-700"
													})
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-[#050505] border border-white/5 p-4 rounded-xl mt-2 flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiShieldKeyholeLine, {
											className: "text-zinc-500 shrink-0 mt-0.5",
											size: 16
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-zinc-400 font-mono leading-relaxed",
											children: "[SECURITY NOTICE]: All API keys are encrypted and stored strictly in your local OS. IRIS does not transmit these keys to any centralized server. You maintain full ownership and billing control over your provider endpoints."
										})]
									})
								]
							})
						}, "keys"),
						activeTab === "security" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10
							},
							transition: { duration: .2 },
							className: "w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 absolute",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !isSecurityUnlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: {
									opacity: 0,
									backdropFilter: "blur(0px)"
								},
								className: "absolute inset-0 z-20 backdrop-blur-2xl bg-black/70 border border-white/10 rounded-3xl flex flex-col items-center justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-[#111] p-5 rounded-full mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiLockPasswordLine, {
											size: 40,
											className: "text-white"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-zinc-300 font-mono tracking-widest uppercase mb-6 font-semibold",
										children: "Authenticate to access Vault Settings"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3 items-center h-12",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "password",
											maxLength: 4,
											pattern: "\\d*",
											value: authPin,
											onChange: (e) => setAuthPin(e.target.value.replace(/\D/g, "")),
											placeholder: "PIN",
											className: `h-full bg-[#050505] border w-32 rounded-lg text-center text-xl tracking-[0.5em] text-white outline-none transition-colors ${authError ? "border-red-500 text-red-500 bg-red-500/10" : "border-white/20 focus:border-white focus:bg-[#111]"}`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: unlockSecurityModule,
											className: "h-full px-8 bg-white text-black text-xs font-bold tracking-widest rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer",
											children: "UNLOCK"
										})]
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0a0a0c] p-6 rounded-3xl border border-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#111113] border border-white/10 p-7 rounded-2xl flex flex-col gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: titleClass,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiLockPasswordLine, {
												className: "text-zinc-400",
												size: 18
											}),
											" ",
											"Update Master PIN"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: inputContainerClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "password",
											maxLength: 4,
											pattern: "\\d*",
											value: newPin,
											onChange: (e) => setNewPin(e.target.value.replace(/\D/g, "")),
											placeholder: "Enter new 4-digit PIN...",
											className: "bg-transparent border-none outline-none text-sm font-mono text-zinc-100 w-full tracking-[0.3em]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: updateMasterPin,
											className: "text-zinc-500 hover:text-white transition-colors ml-2 cursor-pointer",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSave3Line, { size: 20 })
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#111113] border border-white/10 p-7 rounded-2xl flex flex-col gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center border-b border-white/10 pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: titleClass,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiScan2Line, {
													className: "text-zinc-400",
													size: 18
												}),
												" ",
												"Biometric Registry"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] text-white font-mono tracking-widest bg-white/10 px-3 py-1.5 rounded-md font-semibold border border-white/5",
											children: [faceCount, " ENROLLED"]
										})]
									}), isScanningFace ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 bg-[#050505] p-3 rounded-xl border border-white/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
											ref: videoRef,
											autoPlay: true,
											muted: true,
											playsInline: true,
											className: "w-16 h-16 rounded-lg object-cover -scale-x-100 border border-white/10"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-white font-mono tracking-widest animate-pulse font-bold",
												children: enrollStatus
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-zinc-400",
												children: "Keep head steady..."
											})]
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-4 h-full justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-zinc-400 leading-relaxed",
											children: "Enroll additional structural face descriptors. Data is mathematically encrypted and stored locally."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: startFaceEnrollment,
											className: "w-full py-3 rounded-lg bg-white text-black font-bold tracking-widest text-[12px] flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] mt-auto cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiAddLine, { size: 18 }), " ENROLL NEW IDENTITY"]
										})]
									})]
								})]
							})]
						}, "security")
					]
				})
			})]
		})
	});
};
//#endregion
export { SettingsView as default };
