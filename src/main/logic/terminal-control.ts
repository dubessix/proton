import { IpcMain, BrowserWindow } from 'electron'
import { spawn } from 'child_process'
import path from 'path'
import os from 'os'

export default function registerSystemControl(ipcMain: IpcMain) {

  const sanitizePath = (inputPath: string) => {
    let clean = path.normalize(inputPath)
    if (clean.endsWith(path.sep)) clean = clean.slice(0, -1)
    return clean
  }

  ipcMain.handle('run-shell-command', async (_event, { command, cwd }) => {
    return new Promise((resolve) => {
      const safeCwd = cwd ? sanitizePath(cwd) : undefined

      const win = BrowserWindow.getAllWindows()[0]

      let shellPath: string
      let shellArgs: string[]

      if (os.platform() === 'win32') {
        shellPath = 'powershell.exe'
        shellArgs = ['-Command', command]
      } else if (os.platform() === 'darwin') {
        shellPath = '/bin/zsh'
        shellArgs = ['-c', command]
      } else {
        shellPath = '/bin/bash'
        shellArgs = ['-c', command]
      }

      const child = spawn(shellPath, shellArgs, {
        cwd: safeCwd,
        stdio: ['ignore', 'pipe', 'pipe'],
        env: {
          ...process.env,
          TERM: 'xterm-256color',
          FORCE_COLOR: '1'
        }
      })

      child.stdout.on('data', (data) => {
        const output = data.toString()
        if (win) win.webContents.send('terminal-data', output)
      })

      child.stderr.on('data', (data) => {
        const output = data.toString()
        if (win) win.webContents.send('terminal-data', `\x1b[31m${output}\x1b[0m`)
      })

      child.on('close', (code) => {
        const msg = `\r\n[Process exited with code ${code}]\r\n`
        if (win) win.webContents.send('terminal-data', msg)
        resolve({ success: code === 0, output: `Completed with code ${code}` })
      })

      child.on('error', (err) => {
        if (win) win.webContents.send('terminal-data', `Error: ${err.message}`)
        resolve({ success: false, output: err.message })
      })
    })
  })
}