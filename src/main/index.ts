import 'dotenv/config'

import {
  app,
  shell,
  BrowserWindow,
  ipcMain,
  desktopCapturer,
  globalShortcut,
  screen,
  session,
  safeStorage,
  systemPreferences,
  dialog
} from 'electron'
import path, { join } from 'path'
import fs from 'fs'
import icon from '../../resources/icon.png?asset'

import registerIpcHandlers from './logic/iris-memory-save'
import registerSystemHandlers from './logic/get-system-info'
import registerFileSearch from './logic/file-search'
import registerFileOps from './logic/file-ops'
import registerFileWrite from './logic/file-write'
import registerFileRead from './logic/file-read'
import registerFileOpen from './logic/file-open'
import registerDirLoader from './logic/dir-load'
import registerFileScanner from './logic/file-launcher'
import registerAppLauncher from './logic/app-launcher'
import registerNotesHandlers from './logic/notes-manager'
import registerWebAgent from './logic/web-agent'
import registerGhostControl from './logic/ghost-control'
import registerterminalControl from './logic/terminal-control'
import registerGalleryHandlers from './logic/gallery-manager'
import registerGmailHandlers from './logic/gmail-manager'
import registerLocationHandlers from './logic/live-location'
import registerAdbHandlers from './logic/adb-manager'
import registerRealityHacker from './logic/reality-hacker'
import registerIrisCoder from './services/iris-coder'
import registerTelekinesis from './logic/telekinesis'
import registerPermanentMemory from './logic/permanent-memory'
import registerWormhole from './services/wormhole'
import registerOracle from './services/RAG-oracle'
import registerDeepResearch from './services/deep-research'
import registerWidgetMaker from './auto/widget-manager'
import registerWebsiteBuilder from './auto/website-builder'
import registerWorkflowManager from './workflow/workflow-manager'
import registerDropZoneControl from './handlers/SmartDropZone-Handler'
import registerScreenPeeler from './handlers/ScreenPeeler-handler'
import registerPhantomKeyboard from './handlers/PhantomControl-handler'
import registerSecurityVault from './security/Security'
import registerLockSystem from './security/lock-system'
import { irisTelegramBot } from './services/telegram-bot'
import { autoUpdater } from 'electron-updater'

let mainWindow: BrowserWindow | null = null
let isOverlayMode = false
let secureConfigPath = ''

// ✅ FIX 1: GPU/WebGL fixes for Linux BEFORE app ready
// Must be called before app.whenReady()
app.commandLine.appendSwitch('enable-webgl')
app.commandLine.appendSwitch('ignore-gpu-blacklist')
app.commandLine.appendSwitch('enable-gpu-rasterization')
app.commandLine.appendSwitch('disable-gpu-sandbox')
app.commandLine.appendSwitch('use-angle', 'swiftshader')
app.commandLine.appendSwitch('enable-webrtc-hide-local-ips-with-mdns', 'false')
app.commandLine.appendSwitch('disable-features', 'WebRtcHideLocalIpsWithMdns')
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required')


// These need to be done early but after electron module is ready
function initializeApp() {
  try {
    app.commandLine.appendSwitch('use-fake-ui-for-media-stream')

    if (process.defaultApp) {
      if (process.argv.length >= 2) {
        app.setAsDefaultProtocolClient('iris', process.execPath, [path.resolve(process.argv[1])])
      }
    } else {
      app.setAsDefaultProtocolClient('iris')
    }

    const gotTheLock = app.requestSingleInstanceLock()
    if (!gotTheLock) {
      app.quit()
      return
    }
  } catch (e) {
    // App not ready yet, will try again
  }
}

function createWindow(): void {
  if (!secureConfigPath) {
    secureConfigPath = join(app.getPath('userData'), 'iris_secure_vault.json')
  }
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    show: true,
    fullscreen: false,
    autoHideMenuBar: false,
    frame: false,
    transparent: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      backgroundThrottling: false,
      webSecurity: false,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    if (mainWindow) mainWindow.show()
  })

  ipcMain.on('window-min', () => mainWindow?.minimize())
  ipcMain.on('window-close', () => mainWindow?.close())
  ipcMain.on('window-max', () => {
    if (mainWindow?.isMaximized()) mainWindow.unmaximize()
    else mainWindow?.maximize()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (!app.isPackaged && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

function toggleOverlayMode() {
  if (!mainWindow) return

  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  if (isOverlayMode) {
    mainWindow.setResizable(true)
    mainWindow.setAlwaysOnTop(false)
    mainWindow.setBounds({ width: 950, height: 670 })
    mainWindow.center()
    mainWindow.webContents.send('overlay-mode', false)
  } else {
    const w = 340
    const h = 70
    mainWindow.setBounds({
      width: w,
      height: h,
      x: Math.floor(width / 2 - w / 2),
      y: height - h - 50
    })
    mainWindow.setAlwaysOnTop(true, 'screen-saver')
    mainWindow.setResizable(false)
    mainWindow.webContents.send('overlay-mode', true)
  }
  isOverlayMode = !isOverlayMode
}

app.whenReady().then(async () => {
  const { electronApp, optimizer } = await import('@electron-toolkit/utils')
  
  // Initialize app early (register protocol, get lock, append command line switches)
  initializeApp()
  
  // Initialize secure config path
  if (!secureConfigPath) {
    secureConfigPath = join(app.getPath('userData'), 'iris_secure_vault.json')
  }
  
  electronApp.setAppUserModelId('com.electron')

  // autoUpdater.autoDownload = true
  // autoUpdater.autoInstallOnAppQuit = true
  // autoUpdater.checkForUpdatesAndNotify()

  autoUpdater.on('update-available', (info) => {
    dialog.showMessageBox({
      type: 'info',
      title: 'Update Found',
      message: `Neural Core Update Found: v${info.version}. Downloading in background...`
    })
  })

  autoUpdater.on('error', (err) => {
    dialog.showErrorBox(
      'Auto-Updater Error',
      err == null ? 'unknown error' : (err.stack || err).toString()
    )
  })

  autoUpdater.on('update-downloaded', () => {
    dialog
      .showMessageBox({
        type: 'info',
        title: 'Update Ready',
        message: 'New version downloaded! The system will now force reboot to apply the patch.',
        buttons: ['Execute Restart']
      })
      .then(() => {
        setImmediate(() => {
          app.removeAllListeners('window-all-closed')
          autoUpdater.quitAndInstall(false, true)
        })
      })
  })

  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    const allowedPermissions = [
      'media',
      'audioCapture',
      'videoCapture',
      'desktopVideoCapture',
      'microphone',
      'camera'
    ]
    if (allowedPermissions.includes(permission)) {
      callback(true)
    } else {
      callback(false)
    }
  })

  session.defaultSession.setPermissionCheckHandler((_webContents, permission) => {
    const allowedPermissions = [
      'media',
      'audioCapture',
      'videoCapture',
      'desktopVideoCapture',
      'microphone',
      'camera'
    ]
    return allowedPermissions.includes(permission)
  })

  if (process.platform === 'darwin') {
    if (systemPreferences.getMediaAccessStatus('microphone') !== 'granted') {
      systemPreferences.askForMediaAccess('microphone')
    }
    if (systemPreferences.getMediaAccessStatus('camera') !== 'granted') {
      systemPreferences.askForMediaAccess('camera')
    }
  }

   // ✅ FIX 3: Add missing get-app-version handler
  ipcMain.handle('get-app-version', () => {
    return app.getVersion()
  })

  ipcMain.handle('secure-save-keys', async (_, { groqKey, geminiKey }) => {
    try {
      let groqEncrypted, geminiEncrypted

      if (safeStorage.isEncryptionAvailable()) {
        groqEncrypted = safeStorage.encryptString(groqKey).toString('base64')
        geminiEncrypted = safeStorage.encryptString(geminiKey).toString('base64')
      } else {
        groqEncrypted = Buffer.from(groqKey).toString('base64')
        geminiEncrypted = Buffer.from(geminiKey).toString('base64')
      }

      const secureData = {
        groq: groqEncrypted,
        gemini: geminiEncrypted
      }

      fs.writeFileSync(secureConfigPath, JSON.stringify(secureData))
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  })

  ipcMain.handle('secure-get-keys', async () => {
    if (!fs.existsSync(secureConfigPath)) return null
    try {
      const data = JSON.parse(fs.readFileSync(secureConfigPath, 'utf8'))
      let groqKey, geminiKey

      if (safeStorage.isEncryptionAvailable()) {
        groqKey = safeStorage.decryptString(Buffer.from(data.groq, 'base64'))
        geminiKey = safeStorage.decryptString(Buffer.from(data.gemini, 'base64'))
      } else {
        groqKey = Buffer.from(data.groq, 'base64').toString('utf8')
        geminiKey = Buffer.from(data.gemini, 'base64').toString('utf8')
      }

      return { groqKey, geminiKey }
    } catch (err) {
      return null
    }
  })

  ipcMain.handle('check-keys-exist', () => {
    return fs.existsSync(secureConfigPath)
  })

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    const responseHeaders = { ...details.responseHeaders }
    delete responseHeaders['content-security-policy']
    delete responseHeaders['x-content-security-policy']
    delete responseHeaders['access-control-allow-origin']

    callback({
      responseHeaders,
      statusLine: details.statusLine
    })
  })

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  app.on('open-url', (event, url) => {
    event.preventDefault()
    if (mainWindow && url.startsWith('iris://')) {
      mainWindow.webContents.send('oauth-callback', url)
    }
  })
 // ✅ FIX 4: Wrap ALL handlers in try/catch so one failure
  // doesn't crash the whole app
  const handlers = [
    () => registerLockSystem(),
    () => registerSecurityVault(),
    () => registerPhantomKeyboard(),
    () => registerScreenPeeler(),
    () => registerDropZoneControl(ipcMain),
    () => registerWorkflowManager(),
    () => registerWebsiteBuilder(),
    () => registerWidgetMaker(),
    () => registerDeepResearch({ ipcMain }),
    () => registerOracle({ ipcMain }),
    () => registerWormhole({ ipcMain }),
    () => registerPermanentMemory({ ipcMain, app }),
    () => registerTelekinesis({ ipcMain }),
    () => registerIrisCoder({ ipcMain, app }),
    () => registerRealityHacker(ipcMain),
    () => registerAdbHandlers(ipcMain),
    () => registerLocationHandlers(ipcMain),
    () => registerGmailHandlers(ipcMain),
    () => registerGalleryHandlers(ipcMain),
    () => registerterminalControl(ipcMain),
    () => registerGhostControl(ipcMain),
    () => registerWebAgent(ipcMain),
    () => registerNotesHandlers(ipcMain),
    () => registerAppLauncher(ipcMain),
    () => registerDirLoader(ipcMain),
    () => registerFileOpen(ipcMain),
    () => registerFileSearch(ipcMain),
    () => registerFileRead(ipcMain),
    () => registerFileWrite(ipcMain),
    () => registerFileOps(ipcMain),
    () => registerFileScanner(ipcMain),
    () => registerSystemHandlers(ipcMain),
    () => registerIpcHandlers({ ipcMain, app }),
    
  ]
 
  for (const register of handlers) {
    try {
      register()
    } catch (err) {
      console.error(`❌ Handler failed: ${String(err)}`)
    }
  }
 
  ipcMain.handle('get-screen-source', async () => {
    const sources = await desktopCapturer.getSources({ types: ['screen'] })
    return sources[0]?.id
  })

  createWindow()

  // ✅ Auto-start Telegram bot (3s delay = wait for renderer to be ready)
  setTimeout(async () => {
    const result = await irisTelegramBot.start()
    if (result.success) {
      console.log('🚀 [IRIS] Telegram bot active.')
    } else {
      console.warn('⚠️ [IRIS] Telegram bot did not start:', result.error)
    }
  }, 3000)

  globalShortcut.register('CommandOrControl+Shift+I', () => toggleOverlayMode())
  ipcMain.on('toggle-overlay', () => toggleOverlayMode())

  app.on('second-instance', (event, commandLine) => {
    if (!event) {
    }
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
      const url = commandLine.find((arg) => arg.startsWith('iris://'))
      if (url) {
        mainWindow.webContents.send('oauth-callback', url)
      }
    }
  })

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('will-quit', async () => {
  globalShortcut.unregisterAll()
  await irisTelegramBot.stop()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})