let electron = require("electron");
let _electron_toolkit_preload = require("@electron-toolkit/preload");
//#region src/preload/index.ts
var api = {};
if (process.contextIsolated) try {
	electron.contextBridge.exposeInMainWorld("electron", {
		..._electron_toolkit_preload.electronAPI,
		ipcRenderer: {
			..._electron_toolkit_preload.electronAPI.ipcRenderer,
			invoke: (channel, ...args) => electron.ipcRenderer.invoke(channel, ...args)
		}
	});
	electron.contextBridge.exposeInMainWorld("api", api);
} catch (error) {}
else {
	window.electron = {
		..._electron_toolkit_preload.electronAPI,
		ipcRenderer: {
			..._electron_toolkit_preload.electronAPI.ipcRenderer,
			invoke: electron.ipcRenderer.invoke.bind(electron.ipcRenderer)
		}
	};
	window.api = api;
}
//#endregion
