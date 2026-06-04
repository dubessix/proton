import { IpcMain, screen } from 'electron'
import { windowManager } from 'node-window-manager'
import { exec } from 'child_process'
import os from 'os'

const runCommand = (cmd: string): Promise<string> => {
  return new Promise((resolve) => {
    exec(cmd, (err, stdout) => {
      resolve(err ? '' : stdout.trim())
    })
  })
}

export default function registerTelekinesis({ ipcMain }: { ipcMain: IpcMain }) {
  ipcMain.handle('teleport-windows', async (_event, commands) => {
    try {
      if (os.platform() === 'linux') {
        return await handleLinuxTeleport(commands)
      }

      windowManager.requestAccessibility()

      const primaryDisplay = screen.getPrimaryDisplay()
      const { width, height, x: screenX, y: screenY } = primaryDisplay.workArea

      const openWindows = windowManager.getWindows()

      for (const cmd of commands) {
        const validWindows = openWindows.filter(
          (w) =>
            w.isWindow() &&
            w.isVisible() &&
            w.getTitle() !== '' &&
            (w.getTitle().toLowerCase().includes(cmd.appName.toLowerCase()) ||
              w.path.toLowerCase().includes(cmd.appName.toLowerCase()))
        )

        const targetWindow = validWindows[0]

        if (targetWindow) {
          targetWindow.restore() 
          targetWindow.bringToTop()

          const halfW = Math.floor(width / 2)
          const halfH = Math.floor(height / 2)

          let newBounds = { x: screenX, y: screenY, width, height }

          switch (cmd.position) {
            case 'left':
              newBounds = { x: screenX, y: screenY, width: halfW, height }
              break
            case 'right':
              newBounds = { x: screenX + halfW, y: screenY, width: halfW, height }
              break
            case 'top-left':
              newBounds = { x: screenX, y: screenY, width: halfW, height: halfH }
              break
            case 'bottom-left':
              newBounds = { x: screenX, y: screenY + halfH, width: halfW, height: halfH }
              break
            case 'top-right':
              newBounds = { x: screenX + halfW, y: screenY, width: halfW, height: halfH }
              break
            case 'bottom-right':
              newBounds = { x: screenX + halfW, y: screenY + halfH, width: halfW, height: halfH }
              break
            case 'maximize':
              targetWindow.maximize()
              continue 
          }

          targetWindow.setBounds(newBounds)
        }
      }
      return { success: true }
    } catch (err) {
      return { success: false, error: String(err) }
    }
  })
}

async function handleLinuxTeleport(commands: any[]) {
  try {
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height, x: screenX, y: screenY } = primaryDisplay.workArea

    const wmctrlCheck = await runCommand('which wmctrl')
    if (!wmctrlCheck) {
      return {
        success: false,
        error: 'wmctrl is not installed. Run: sudo apt install wmctrl'
      }
    }

    const windowList = await runCommand('wmctrl -lx 2>/dev/null')
    if (!windowList) {
      return { success: false, error: 'No windows found or wmctrl failed' }
    }

    const openWindows = parseWmctrlOutput(windowList)

    for (const cmd of commands) {
      const appNameLower = cmd.appName.toLowerCase()

      const targetWindow = openWindows.find(
        (w) =>
          w.title.toLowerCase().includes(appNameLower) ||
          w.wmClass.toLowerCase().includes(appNameLower)
      )

      if (targetWindow) {
        await runCommand(`wmctrl -ir ${targetWindow.id} -b remove,hidden`)
        await runCommand(`wmctrl -ia ${targetWindow.id}`)

        await runCommand(
          `wmctrl -ir ${targetWindow.id} -b remove,maximized_vert,maximized_horz`
        )

        const halfW = Math.floor(width / 2)
        const halfH = Math.floor(height / 2)

        let newBounds = { x: screenX, y: screenY, width, height }

        switch (cmd.position) {
          case 'left':
            newBounds = { x: screenX, y: screenY, width: halfW, height }
            break
          case 'right':
            newBounds = { x: screenX + halfW, y: screenY, width: halfW, height }
            break
          case 'top-left':
            newBounds = { x: screenX, y: screenY, width: halfW, height: halfH }
            break
          case 'bottom-left':
            newBounds = { x: screenX, y: screenY + halfH, width: halfW, height: halfH }
            break
          case 'top-right':
            newBounds = { x: screenX + halfW, y: screenY, width: halfW, height: halfH }
            break
          case 'bottom-right':
            newBounds = {
              x: screenX + halfW,
              y: screenY + halfH,
              width: halfW,
              height: halfH
            }
            break
          case 'maximize':
            await runCommand(
              `wmctrl -ir ${targetWindow.id} -b add,maximized_vert,maximized_horz`
            )
            continue
        }

        await runCommand(
          `wmctrl -ir ${targetWindow.id} -e 0,${newBounds.x},${newBounds.y},${newBounds.width},${newBounds.height}`
        )
      }
    }

    return { success: true }
  } catch (err) {
    return { success: false, error: String(err) }
  }
}

function parseWmctrlOutput(output: string): Array<{
  id: string
  desktop: string
  wmClass: string
  host: string
  title: string
}> {
  return output
    .split('\n')
    .map((line) => {
      const parts = line.trim().split(/\s+/)
      if (parts.length < 5) return null

      return {
        id: parts[0],
        desktop: parts[1],
        wmClass: parts[2],
        host: parts[3],
        title: parts.slice(4).join(' ')
      }
    })
    .filter((w): w is NonNullable<typeof w> => w !== null && w.title !== '')
}