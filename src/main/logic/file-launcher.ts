import { IpcMain } from 'electron'
import { exec } from 'child_process'
import os from 'os'

const runCommand = (cmd: string): Promise<string> => {
  return new Promise((resolve) => {
    exec(cmd, (err, stdout) => {
      resolve(err ? '' : stdout.trim())
    })
  })
}

export default function registerFileScanner(ipcMain: IpcMain) {
  ipcMain.removeHandler('get-running-apps')

  ipcMain.handle('get-running-apps', async () => {
    try {
      // ===== WINDOWS =====
      if (os.platform() === 'win32') {
        const cmd = `powershell "Get-Process | Where-Object {$_.MainWindowTitle -ne ''} | Select-Object -ExpandProperty ProcessName"`
        const output = await runCommand(cmd)
        const apps = output
          .split(/\r?\n/)
          .map((a) => a.trim())
          .filter((a) => a)
        return [...new Set(apps)]
      }

      // ===== macOS =====
      if (os.platform() === 'darwin') {
        const cmd = `osascript -e 'tell application "System Events" to get name of (processes where background only is false)'`
        const output = await runCommand(cmd)
        return output.split(', ').map((s) => s.trim())
      }

      // ===== 🐧 LINUX =====
      if (os.platform() === 'linux') {
        return await getLinuxRunningApps()
      }

      return []
    } catch (e) {
      return []
    }
  })
}

// 🐧 Linux: Get running apps with visible windows
async function getLinuxRunningApps(): Promise<string[]> {
  // Strategy: Try multiple methods, return first that works
  
  // Method 1: wmctrl (best - lists windowed apps only)
  const wmctrlApps = await tryWmctrl()
  if (wmctrlApps.length > 0) return wmctrlApps

  // Method 2: xdotool (X11 fallback)
  const xdotoolApps = await tryXdotool()
  if (xdotoolApps.length > 0) return xdotoolApps

  // Method 3: ps + filter (last resort - all processes)
  return await tryPsFilter()
}

// 🐧 Method 1: wmctrl (cleanest output)
async function tryWmctrl(): Promise<string[]> {
  // wmctrl -lx outputs: window_id  desktop  WM_CLASS  hostname  title
  const output = await runCommand(`wmctrl -lx 2>/dev/null`)
  
  if (!output) return []
  
  const apps = output
    .split('\n')
    .map(line => {
      // Extract WM_CLASS (3rd column)
      const parts = line.trim().split(/\s+/)
      if (parts.length < 3) return ''
      
      // WM_CLASS format: "instance.Class" → take Class part
      const wmClass = parts[2]
      const className = wmClass.includes('.') 
        ? wmClass.split('.').pop() || wmClass
        : wmClass
      
      // Clean up: lowercase, remove special chars
      return className
        .replace(/-/g, ' ')
        .trim()
    })
    .filter(Boolean)
  
  return [...new Set(apps)] // remove duplicates
}

// 🐧 Method 2: xdotool fallback
async function tryXdotool(): Promise<string[]> {
  // Get all window IDs with visible windows
  const idsOutput = await runCommand(`xdotool search --onlyvisible --name "" 2>/dev/null`)
  
  if (!idsOutput) return []
  
  const windowIds = idsOutput.split('\n').filter(Boolean)
  const apps = new Set<string>()
  
  // For each window, get its class
  for (const id of windowIds.slice(0, 50)) { // limit to 50 to avoid hang
    const className = await runCommand(`xdotool getwindowclassname ${id} 2>/dev/null`)
    if (className) apps.add(className.trim())
  }
  
  return Array.from(apps)
}

// 🐧 Method 3: ps fallback (filter common GUI apps)
async function tryPsFilter(): Promise<string[]> {
  // Get processes with TTY (interactive) or matching common GUI patterns
  const output = await runCommand(
    `ps -eo comm --no-headers | sort -u`
  )
  
  if (!output) return []
  
  // Filter to likely GUI apps (exclude system processes)
  const systemPrefixes = [
    'systemd', 'kworker', 'ksoftirqd', 'migration', 'rcu_',
    'kthread', 'watchdog', 'dbus', 'gvfsd', 'pulseaudio',
    'pipewire', 'NetworkManager', 'wpa_supplicant', 'polkitd',
    'gnome-keyring', 'at-spi', 'goa-', 'evolution-', 'tracker',
    'gjs', 'gsd-', 'ibus-', 'fwupd', 'colord', 'rtkit',
    'snapd', 'snap-', 'cups', 'avahi', 'cron', 'rsyslog'
  ]
  
  const apps = output
    .split('\n')
    .map(s => s.trim())
    .filter(name => {
      if (!name) return false
      // Exclude system processes
      return !systemPrefixes.some(prefix => name.startsWith(prefix))
    })
  
  return [...new Set(apps)]
}