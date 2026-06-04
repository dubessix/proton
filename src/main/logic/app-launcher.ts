import { IpcMain } from 'electron'
import { exec } from 'child_process'

// 🐧 Linux protected processes (NEVER kill these - will crash system!)
const PROTECTED_PROCESSES = [
  'systemd',
  'init',
  'kthreadd',
  'kworker',
  'ksoftirqd',
  'migration',
  'rcu_',
  'watchdog',
  'gnome-shell',
  'gnome-session',
  'Xorg',
  'Xwayland',
  'wayland',
  'pulseaudio',
  'pipewire',
  'pipewire-pulse',
  'dbus-daemon',
  'dbus-broker',
  'NetworkManager',
  'systemd-logind',
  'systemd-udevd',
  'systemd-journal',
  'snapd',
  'polkitd',
  'gdm',
  'gdm3',
  'lightdm',
  'sddm',
  'kernel',
  'modprobe',
  'plasmashell',
  'kwin',
  'mutter'
]

// 🐧 Linux app aliases (native Linux commands to launch each app)
const APP_ALIASES: Record<string, string> = {
  // ===== DEV TOOLS =====
  vscode: 'code',
  code: 'code',
  'vs code': 'code',
  'visual studio code': 'code',
  'visual studio': 'code',
  sublime: 'subl',
  'sublime text': 'subl',
  atom: 'atom',
  vim: 'gnome-terminal -- vim',
  nvim: 'gnome-terminal -- nvim',
  neovim: 'gnome-terminal -- nvim',
  nano: 'gnome-terminal -- nano',
  emacs: 'emacs',
  intellij: 'intellij-idea-community',
  pycharm: 'pycharm-community',
  webstorm: 'webstorm',
  android: 'android-studio',
  'android studio': 'android-studio',
  eclipse: 'eclipse',
  netbeans: 'netbeans',

  // ===== TERMINALS =====
  terminal: 'gnome-terminal',
  'gnome terminal': 'gnome-terminal',
  konsole: 'konsole',
  xterm: 'xterm',
  tilix: 'tilix',
  terminator: 'terminator',
  alacritty: 'alacritty',
  kitty: 'kitty',
  warp: 'warp-terminal',
  cmd: 'gnome-terminal',
  bash: 'gnome-terminal',
  shell: 'gnome-terminal',
  zsh: 'gnome-terminal -- zsh',
  fish: 'gnome-terminal -- fish',

  // ===== BROWSERS =====
  chrome: 'google-chrome',
  'google chrome': 'google-chrome',
  chromium: 'chromium-browser',
  edge: 'microsoft-edge',
  'microsoft edge': 'microsoft-edge',
  brave: 'brave-browser',
  'brave browser': 'brave-browser',
  firefox: 'firefox',
  'mozilla firefox': 'firefox',
  opera: 'opera',
  vivaldi: 'vivaldi',
  tor: 'torbrowser-launcher',
  'tor browser': 'torbrowser-launcher',

  // ===== COMMUNICATION (Web fallbacks if not installed) =====
  whatsapp: 'whatsdesk',
  'whatsapp desktop': 'whatsdesk',
  discord: 'discord',
  slack: 'slack',
  telegram: 'telegram-desktop',
  'telegram desktop': 'telegram-desktop',
  signal: 'signal-desktop',
  zoom: 'zoom',
  skype: 'skype',
  teams: 'teams',
  'microsoft teams': 'teams',
  element: 'element-desktop',
  matrix: 'element-desktop',
  thunderbird: 'thunderbird',
  evolution: 'evolution',
  mail: 'evolution',

  // ===== MEDIA =====
  spotify: 'spotify',
  vlc: 'vlc',
  'vlc media player': 'vlc',
  'media player': 'vlc',
  mpv: 'mpv',
  rhythmbox: 'rhythmbox',
  music: 'rhythmbox',
  audacity: 'audacity',
  obs: 'obs',
  'obs studio': 'obs',
  kdenlive: 'kdenlive',
  shotcut: 'shotcut',
  blender: 'blender',

  // ===== IMAGES =====
  gimp: 'gimp',
  inkscape: 'inkscape',
  krita: 'krita',
  photos: 'eog',
  'image viewer': 'eog',
  eog: 'eog',
  gthumb: 'gthumb',
  shotwell: 'shotwell',
  darktable: 'darktable',

  // ===== GAMES =====
  steam: 'steam',
  lutris: 'lutris',
  heroic: 'heroic',
  'epic games': 'heroic',
  minecraft: 'minecraft-launcher',
  'minecraft launcher': 'minecraft-launcher',
  tlauncher: 'tlauncher',
  retroarch: 'retroarch',
  dolphin: 'dolphin-emu',
  pcsx2: 'pcsx2',

  // ===== SYSTEM APPS =====
  notepad: 'gedit',
  gedit: 'gedit',
  'text editor': 'gedit',
  kate: 'kate',
  mousepad: 'mousepad',
  calculator: 'gnome-calculator',
  calc: 'gnome-calculator',
  settings: 'gnome-control-center',
  'system settings': 'gnome-control-center',
  preferences: 'gnome-control-center',
  explorer: 'nautilus',
  files: 'nautilus',
  nautilus: 'nautilus',
  'file manager': 'nautilus',
  'file explorer': 'nautilus',
  thunar: 'thunar',
  dolphin_files: 'dolphin',
  'task manager': 'gnome-system-monitor',
  'system monitor': 'gnome-system-monitor',
  htop: 'gnome-terminal -- htop',
  btop: 'gnome-terminal -- btop',
  camera: 'cheese',
  cheese: 'cheese',
  weather: 'gnome-weather',
  clock: 'gnome-clocks',
  maps: 'gnome-maps',
  contacts: 'gnome-contacts',
  calendar: 'gnome-calendar',

  // ===== OFFICE =====
  libreoffice: 'libreoffice',
  writer: 'libreoffice --writer',
  word: 'libreoffice --writer',
  calc_office: 'libreoffice --calc',
  excel: 'libreoffice --calc',
  impress: 'libreoffice --impress',
  powerpoint: 'libreoffice --impress',
  onlyoffice: 'desktopeditors',
  okular: 'okular',
  pdf: 'evince',
  evince: 'evince',

  // ===== UTILITIES =====
  postman: 'postman',
  insomnia: 'insomnia',
  filezilla: 'filezilla',
  transmission: 'transmission-gtk',
  torrent: 'transmission-gtk',
  qbittorrent: 'qbittorrent',
  wireshark: 'wireshark',
  virtualbox: 'virtualbox',
  vmware: 'vmware',
  docker: 'docker-desktop',
  mongo: 'mongodb-compass',
  mongodb: 'mongodb-compass',
  'mongodb compass': 'mongodb-compass',
  mysql: 'mysql-workbench',
  'mysql workbench': 'mysql-workbench',
  dbeaver: 'dbeaver',
  redis: 'redis-desktop-manager',

  // ===== DESIGN =====
  figma: 'figma-linux',
  xd: 'xd',
  'adobe xd': 'xd',

  // ===== READING =====
  calibre: 'calibre',
  ebook: 'calibre',
  foliate: 'foliate',

  // ===== SECURITY =====
  keepassxc: 'keepassxc',
  bitwarden: 'bitwarden',
  '1password': '1password',
  veracrypt: 'veracrypt',

  // ===== APP STORES =====
  store: 'gnome-software',
  'software center': 'gnome-software',
  'gnome software': 'gnome-software',
  snap: 'snap-store'
}

// 🌐 Web fallbacks (when app isn't installed natively)
const WEB_FALLBACKS: Record<string, string> = {
  whatsapp: 'https://web.whatsapp.com',
  'whatsapp web': 'https://web.whatsapp.com',
  telegram: 'https://web.telegram.org',
  'telegram web': 'https://web.telegram.org',
  discord: 'https://discord.com/app',
  slack: 'https://app.slack.com',
  messenger: 'https://www.messenger.com',
  facebook: 'https://www.facebook.com',
  instagram: 'https://www.instagram.com',
  twitter: 'https://twitter.com',
  x: 'https://x.com',
  youtube: 'https://www.youtube.com',
  gmail: 'https://mail.google.com',
  outlook: 'https://outlook.live.com',
  email: 'https://mail.google.com',
  netflix: 'https://www.netflix.com',
  prime: 'https://www.primevideo.com',
  'prime video': 'https://www.primevideo.com',
  hotstar: 'https://www.hotstar.com',
  disney: 'https://www.disneyplus.com',
  'disney plus': 'https://www.disneyplus.com',
  spotify: 'https://open.spotify.com',
  'spotify web': 'https://open.spotify.com',
  'apple music': 'https://music.apple.com',
  soundcloud: 'https://soundcloud.com',
  github: 'https://github.com',
  gitlab: 'https://gitlab.com',
  bitbucket: 'https://bitbucket.org',
  stackoverflow: 'https://stackoverflow.com',
  reddit: 'https://www.reddit.com',
  twitch: 'https://www.twitch.tv',
  linkedin: 'https://www.linkedin.com',
  zoom: 'https://zoom.us/join',
  meet: 'https://meet.google.com',
  'google meet': 'https://meet.google.com',
  teams: 'https://teams.microsoft.com',
  'google docs': 'https://docs.google.com',
  docs: 'https://docs.google.com',
  'google drive': 'https://drive.google.com',
  drive: 'https://drive.google.com',
  dropbox: 'https://www.dropbox.com',
  onedrive: 'https://onedrive.live.com',
  notion: 'https://www.notion.so',
  trello: 'https://trello.com',
  asana: 'https://app.asana.com',
  jira: 'https://www.atlassian.com/software/jira',
  figma: 'https://www.figma.com',
  canva: 'https://www.canva.com',
  chatgpt: 'https://chat.openai.com',
  gpt: 'https://chat.openai.com',
  claude: 'https://claude.ai',
  gemini: 'https://gemini.google.com',
  bard: 'https://gemini.google.com',
  copilot: 'https://copilot.microsoft.com',
  perplexity: 'https://www.perplexity.ai',
  amazon: 'https://www.amazon.com',
  flipkart: 'https://www.flipkart.com',
  ebay: 'https://www.ebay.com',
  paypal: 'https://www.paypal.com',
  'google maps': 'https://maps.google.com',
  maps: 'https://maps.google.com',
  translate: 'https://translate.google.com',
  'google translate': 'https://translate.google.com',
  weather: 'https://weather.com',
  wikipedia: 'https://www.wikipedia.org',
  wiki: 'https://www.wikipedia.org'
}

// 🐧 Linux process names (for killing apps with pkill)
const PROCESS_NAMES: Record<string, string> = {
  // Dev
  vscode: 'code',
  code: 'code',
  'visual studio code': 'code',
  sublime: 'sublime_text',
  atom: 'atom',
  intellij: 'idea',
  pycharm: 'pycharm',
  
  // Terminals
  terminal: 'gnome-terminal',
  konsole: 'konsole',
  tilix: 'tilix',
  
  // Browsers
  chrome: 'chrome',
  'google chrome': 'chrome',
  chromium: 'chromium',
  edge: 'msedge',
  brave: 'brave',
  firefox: 'firefox',
  opera: 'opera',
  vivaldi: 'vivaldi',

  // Communication
  whatsapp: 'whatsdesk',
  discord: 'Discord',
  slack: 'slack',
  telegram: 'telegram-desktop',
  signal: 'signal-desktop',
  zoom: 'zoom',
  skype: 'skype',
  teams: 'teams',

  // Media
  spotify: 'spotify',
  vlc: 'vlc',
  mpv: 'mpv',
  rhythmbox: 'rhythmbox',
  audacity: 'audacity',
  obs: 'obs',
  blender: 'blender',

  // Images
  gimp: 'gimp',
  inkscape: 'inkscape',
  krita: 'krita',
  photos: 'eog',

  // Games
  steam: 'steam',
  lutris: 'lutris',
  minecraft: 'minecraft-launcher',

  // System
  notepad: 'gedit',
  gedit: 'gedit',
  calculator: 'gnome-calculator',
  settings: 'gnome-control-center',
  files: 'nautilus',
  explorer: 'nautilus',
  nautilus: 'nautilus',
  'task manager': 'gnome-system-monitor',
  camera: 'cheese',

  // Office
  libreoffice: 'soffice',
  writer: 'soffice',
  okular: 'okular',
  evince: 'evince',
  pdf: 'evince',

  // Utils
  postman: 'postman',
  filezilla: 'filezilla',
  qbittorrent: 'qbittorrent',
  virtualbox: 'VirtualBox',
  
  // Design
  figma: 'figma-linux',
  
  // Reading
  calibre: 'calibre',
  
  // Security
  keepassxc: 'keepassxc',
  bitwarden: 'bitwarden'
}

// 🌐 Detect user's default browser (for web fallback)
function getDefaultBrowser(): string {
  // Common Linux browsers in priority order
  const browsers = [
    'google-chrome',
    'chromium-browser',
    'chromium',
    'firefox',
    'brave-browser',
    'microsoft-edge',
    'opera',
    'vivaldi'
  ]
  return browsers[0] // default; will be checked at launch
}

export default function registerAppLauncher(ipcMain: IpcMain) {
  // ============================================
  // OPEN APP HANDLER
  // ============================================
  ipcMain.removeHandler('open-app')
  ipcMain.handle('open-app', async (_event, appName: string) => {
    return new Promise((resolve) => {
      const lowerName = appName.toLowerCase().trim()
      
      // Step 1: Check if it's a known alias (native app)
      const command = APP_ALIASES[lowerName]

      if (command) {
        // Extract the binary name to check if installed
        const binaryName = command.split(' ')[0]
        
        checkIfInstalled(binaryName, (installed) => {
          if (installed) {
            // ✅ Native app installed → launch it
            executeCommand(command, appName, resolve)
          } else {
            // ❌ Native app NOT installed → try web fallback
            tryWebFallback(lowerName, appName, resolve)
          }
        })
      } else {
        // Step 2: Try .desktop file search
        launchViaDesktop(appName, resolve, lowerName)
      }
    })
  })

  // ============================================
  // CLOSE APP HANDLER
  // ============================================
  ipcMain.removeHandler('close-app')
  ipcMain.handle('close-app', async (_event, appName: string) => {
    return new Promise((resolve) => {
      const lowerName = appName.toLowerCase().trim()
      let processName = PROCESS_NAMES[lowerName]

      if (!processName) {
        processName = appName.toLowerCase()
      }

      // 🐧 Check against protected processes
      const isProtected = PROTECTED_PROCESSES.some(p =>
        processName.toLowerCase().includes(p.toLowerCase())
      )

      if (isProtected) {
        resolve({
          success: false,
          error: `Security Protocol: I cannot close '${appName}' (System Critical Process). Doing so would crash your system.`
        })
        return
      }

      // 🐧 Linux: pkill (kills by name, with full command match)
      const cmd = `pkill -f "${processName}"`

      exec(cmd, (error) => {
        if (error) {
          resolve({
            success: false,
            error: `Could not close ${appName}. Is it running?`
          })
        } else {
          resolve({ success: true, message: `Terminated ${appName}` })
        }
      })
    })
  })

  // ============================================
  // LIST INSTALLED APPS (BONUS)
  // ============================================
  ipcMain.removeHandler('list-installed-apps')
  ipcMain.handle('list-installed-apps', async () => {
    return new Promise((resolve) => {
      const cmd = `ls /usr/share/applications/ ~/.local/share/applications/ /var/lib/snapd/desktop/applications/ 2>/dev/null | grep .desktop | sort -u`
      
      exec(cmd, (error, stdout) => {
        if (error) {
          resolve({ success: false, apps: [] })
        } else {
          const apps = stdout
            .split('\n')
            .filter(Boolean)
            .map(f => f.replace('.desktop', ''))
          resolve({ success: true, apps })
        }
      })
    })
  })

  // ============================================
  // OPEN URL (BONUS - direct web open)
  // ============================================
  ipcMain.removeHandler('open-url')
  ipcMain.handle('open-url', async (_event, url: string) => {
    return new Promise((resolve) => {
      // Add https:// if missing
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `https://${url}`
      }
      
      exec(`xdg-open "${url}"`, (error) => {
        if (error) {
          resolve({ success: false, error: error.message })
        } else {
          resolve({ success: true, message: `Opened ${url}` })
        }
      })
    })
  })
}

// ============================================
// HELPER: Check if binary is installed
// ============================================
function checkIfInstalled(binary: string, callback: (installed: boolean) => void) {
  exec(`which ${binary}`, (error, stdout) => {
    callback(!error && !!stdout.trim())
  })
}

// ============================================
// HELPER: Execute launch command
// ============================================
function executeCommand(command: string, appName: string, resolve: any) {
  // 🐧 Detach from parent process so app keeps running after Electron closes
  exec(`${command} > /dev/null 2>&1 &`, (error) => {
    if (error) {
      // If native command fails, try .desktop file
      launchViaDesktop(appName, resolve, appName.toLowerCase().trim())
    } else {
      resolve({ success: true, message: `Opened ${appName}` })
    }
  })
}

// ============================================
// HELPER: Launch via .desktop file
// ============================================
function launchViaDesktop(appName: string, resolve: any, lowerName: string) {
  const searchPaths = [
    '/usr/share/applications/',
    `${process.env.HOME}/.local/share/applications/`,
    '/var/lib/snapd/desktop/applications/',
    '/var/lib/flatpak/exports/share/applications/'
  ]

  const searchCmd = `ls ${searchPaths.join(' ')} 2>/dev/null | grep -i "${appName}" | head -1`

  exec(searchCmd, (error, stdout) => {
    if (error || !stdout.trim()) {
      // No .desktop file found → try direct binary
      tryDirectBinary(appName, resolve, lowerName)
      return
    }

    const desktopFile = stdout.trim().replace('.desktop', '')

    // Try gtk-launch
    exec(`gtk-launch "${desktopFile}"`, (launchErr) => {
      if (launchErr) {
        tryDirectBinary(appName, resolve, lowerName)
      } else {
        resolve({
          success: true,
          message: `Opened ${appName} via System Search`
        })
      }
    })
  })
}

// ============================================
// HELPER: Try as direct binary
// ============================================
function tryDirectBinary(appName: string, resolve: any, lowerName: string) {
  const cleanName = appName.toLowerCase().replace(/\s+/g, '-')
  
  exec(`which ${cleanName}`, (error, stdout) => {
    if (error || !stdout.trim()) {
      // Not a binary → try snap, then flatpak, then web fallback
      trySnap(appName, resolve, lowerName)
      return
    }

    exec(`${cleanName} > /dev/null 2>&1 &`, (launchErr) => {
      if (launchErr) {
        trySnap(appName, resolve, lowerName)
      } else {
        resolve({ success: true, message: `Opened ${appName}` })
      }
    })
  })
}

// ============================================
// HELPER: Try snap package
// ============================================
function trySnap(appName: string, resolve: any, lowerName: string) {
  const cleanName = appName.toLowerCase().replace(/\s+/g, '-')
  
  exec(`snap run ${cleanName} > /dev/null 2>&1 &`, (snapErr) => {
    if (!snapErr) {
      resolve({ success: true, message: `Opened ${appName} (snap)` })
    } else {
      tryFlatpak(appName, resolve, lowerName)
    }
  })
}

// ============================================
// HELPER: Try flatpak package
// ============================================
function tryFlatpak(appName: string, resolve: any, lowerName: string) {
  // Flatpak apps usually have reverse-DNS names, so search first
  exec(`flatpak list --app --columns=application | grep -i "${appName}" | head -1`, (err, stdout) => {
    const flatpakId = stdout.trim()
    
    if (!err && flatpakId) {
      exec(`flatpak run ${flatpakId} > /dev/null 2>&1 &`, (runErr) => {
        if (!runErr) {
          resolve({ success: true, message: `Opened ${appName} (flatpak)` })
        } else {
          tryWebFallback(lowerName, appName, resolve)
        }
      })
    } else {
      tryWebFallback(lowerName, appName, resolve)
    }
  })
}

// ============================================
// 🌐 HELPER: Try web fallback (LAST RESORT)
// ============================================
function tryWebFallback(lowerName: string, appName: string, resolve: any) {
  // Check if app has a known web version
  const webUrl = WEB_FALLBACKS[lowerName]
  
  if (webUrl) {
    // Found web version → open in browser
    exec(`xdg-open "${webUrl}"`, (error) => {
      if (error) {
        // xdg-open failed, try browsers manually
        openInBrowser(webUrl, appName, resolve)
      } else {
        resolve({
          success: true,
          message: `${appName} not installed natively → Opened web version in browser 🌐`,
          fallback: 'web',
          url: webUrl
        })
      }
    })
  } else {
    // No web fallback → try Google search as ultimate fallback
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(appName)}`
    
    exec(`xdg-open "${searchUrl}"`, (error) => {
      if (error) {
        resolve({
          success: false,
          error: `Could not find '${appName}' on this system. Not installed and no web version available. Try installing it via: sudo apt install ${appName.toLowerCase().replace(/\s+/g, '-')}`
        })
      } else {
        resolve({
          success: true,
          message: `'${appName}' not found → Opened Google search 🔍`,
          fallback: 'search'
        })
      }
    })
  }
}

// ============================================
// 🌐 HELPER: Try multiple browsers manually
// ============================================
function openInBrowser(url: string, appName: string, resolve: any) {
  const browsers = [
    'google-chrome',
    'chromium-browser',
    'chromium',
    'firefox',
    'brave-browser',
    'microsoft-edge',
    'opera',
    'vivaldi'
  ]

  function tryNext(index: number) {
    if (index >= browsers.length) {
      resolve({
        success: false,
        error: `Could not open ${appName} - no browser installed. Install Firefox/Chrome first.`
      })
      return
    }

    const browser = browsers[index]
    
    exec(`which ${browser}`, (err, stdout) => {
      if (!err && stdout.trim()) {
        // Browser exists, launch it
        exec(`${browser} "${url}" > /dev/null 2>&1 &`, (launchErr) => {
          if (!launchErr) {
            resolve({
              success: true,
              message: `Opened ${appName} web version in ${browser} 🌐`,
              fallback: 'web',
              browser
            })
          } else {
            tryNext(index + 1)
          }
        })
      } else {
        tryNext(index + 1)
      }
    })
  }

  tryNext(0)
}