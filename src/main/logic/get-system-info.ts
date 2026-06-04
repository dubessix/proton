import { IpcMain } from 'electron'
import os from 'os'
import { exec } from 'child_process'
import fs from 'fs'

const runCommand = (cmd: string): Promise<string> => {
  return new Promise((resolve) => {
    exec(cmd, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout) => {
      if (error) {
      }
      resolve(stdout ? stdout.trim() : '')
    })
  })
}

let cpuLastSnapshot = os.cpus()

function getSystemCpuUsage() {
  const cpus = os.cpus()
  let idle = 0
  let total = 0
  for (let i = 0; i < cpus.length; i++) {
    const cpu = cpus[i]
    const prevCpu = cpuLastSnapshot[i]
    let currentTotal = 0
    for (const type in cpu.times) currentTotal += cpu.times[type]
    let prevTotal = 0
    for (const type in prevCpu.times) prevTotal += prevCpu.times[type]
    idle += cpu.times.idle - prevCpu.times.idle
    total += currentTotal - prevTotal
  }
  cpuLastSnapshot = cpus
  return total === 0 ? '0.0' : (((total - idle) / total) * 100).toFixed(1)
}

function getOsName(): string {
  const platform = os.platform()
  
  if (platform === 'win32') {
    const release = os.release()
    const major = parseInt(release.split('.')[0])
    const build = parseInt(release.split('.')[2] || '0')
    if (major === 10 && build >= 22000) return 'Windows 11'
    if (major === 10) return 'Windows 10'
    return `Windows ${major}`
  }
  
  if (platform === 'darwin') {
    return `macOS ${os.release()}`
  }
  
  if (platform === 'linux') {
    try {
      const release = fs.readFileSync('/etc/os-release', 'utf8')
      const match = release.match(/PRETTY_NAME="(.+)"/)
      return match ? match[1] : 'Linux'
    } catch {
      return 'Linux'
    }
  }
  
  return platform
}

async function getLinuxTemperature(): Promise<number> {
  try {
    const thermalZones = fs.readdirSync('/sys/class/thermal')
      .filter(z => z.startsWith('thermal_zone'))
    
    for (const zone of thermalZones) {
      try {
        const typePath = `/sys/class/thermal/${zone}/type`
        const tempPath = `/sys/class/thermal/${zone}/temp`
        const type = fs.readFileSync(typePath, 'utf8').trim().toLowerCase()
        
        if (type.includes('cpu') || type.includes('x86') || type.includes('coretemp')) {
          const temp = parseInt(fs.readFileSync(tempPath, 'utf8').trim())
          return Math.round(temp / 1000)
        }
      } catch {}
    }
    
    if (thermalZones.length > 0) {
      const temp = parseInt(
        fs.readFileSync(`/sys/class/thermal/${thermalZones[0]}/temp`, 'utf8').trim()
      )
      return Math.round(temp / 1000)
    }
  } catch {}
  
  try {
    const output = await runCommand('sensors -u 2>/dev/null | grep -m1 "temp1_input"')
    const match = output.match(/temp1_input:\s*([\d.]+)/)
    if (match) return Math.round(parseFloat(match[1]))
  } catch {}
  
  return 50
}

async function getMacTemperature(): Promise<number> {
  try {
    const output = await runCommand('osx-cpu-temp 2>/dev/null')
    const match = output.match(/([\d.]+)/)
    if (match) return Math.round(parseFloat(match[1]))
  } catch {}
  return 50
}

export default function registerSystemHandlers(ipcMain: IpcMain) {

  ipcMain.removeHandler('get-installed-apps')
  ipcMain.handle('get-installed-apps', async () => {
    try {
      if (os.platform() === 'win32') {
        const cmd = `powershell "Get-StartApps | Select-Object Name, AppID | ConvertTo-Json -Depth 1"`

        const jsonOutput = await runCommand(cmd)

        if (!jsonOutput) return []

        let rawData
        try {
          rawData = JSON.parse(jsonOutput)
        } catch (parseError) {
          return []
        }

        const appsArray = Array.isArray(rawData) ? rawData : [rawData]

        return appsArray
          .filter((a: any) => a && a.Name && a.AppID) 
          .map((a: any) => ({
            name: a.Name.trim(),
            id: a.AppID.trim()
          }))
          .sort((a, b) => a.name.localeCompare(b.name)) 
      }

      if (os.platform() === 'linux') {
        return await getLinuxInstalledApps()
      }

      if (os.platform() === 'darwin') {
        return await getMacInstalledApps()
      }

      return []
    } catch (e) {
      return []
    }
  })

  ipcMain.removeHandler('get-system-stats')
  ipcMain.handle('get-system-stats', async () => {
    const totalMem = os.totalmem()
    const freeMem = os.freemem()
    
    let temperature = 50
    if (os.platform() === 'linux') {
      temperature = await getLinuxTemperature()
    } else if (os.platform() === 'darwin') {
      temperature = await getMacTemperature()
    }
    
    return {
      cpu: getSystemCpuUsage(),
      memory: {
        total: (totalMem / 1024 ** 3).toFixed(1) + ' GB',
        free: (freeMem / 1024 ** 3).toFixed(1) + ' GB',
        usedPercentage: (((totalMem - freeMem) / totalMem) * 100).toFixed(1)
      },
      temperature,
      os: {
        type: getOsName(),
        uptime: (os.uptime() / 3600).toFixed(1) + 'h'
      }
    }
  })

  ipcMain.removeHandler('get-drives')
  ipcMain.handle('get-drives', async () => {
    try {
      if (os.platform() === 'win32') {
        const cmd = `powershell "Get-PSDrive -PSProvider FileSystem | Select-Object Name, @{N='FreeGB';E={[math]::round($_.Free/1GB, 2)}}, @{N='TotalGB';E={[math]::round(($_.Used + $_.Free)/1GB, 2)}} | ConvertTo-Json"`
        const output = await runCommand(cmd)
        return output ? JSON.parse(output) : []
      }

      if (os.platform() === 'linux' || os.platform() === 'darwin') {
        return await getUnixDrives()
      }

      return []
    } catch (e) {
      return []
    }
  })
}

async function getLinuxInstalledApps(): Promise<Array<{ name: string; id: string }>> {
  try {
    const paths = [
      '/usr/share/applications',
      '/usr/local/share/applications',
      `${os.homedir()}/.local/share/applications`,
      '/var/lib/snapd/desktop/applications',
      '/var/lib/flatpak/exports/share/applications'
    ]

    const apps: Array<{ name: string; id: string }> = []
    const seen = new Set<string>()

    for (const dir of paths) {
      if (!fs.existsSync(dir)) continue

      try {
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.desktop'))
        
        for (const file of files) {
          try {
            const content = fs.readFileSync(`${dir}/${file}`, 'utf8')
            
            if (content.includes('NoDisplay=true') || content.includes('Hidden=true')) {
              continue
            }
            
            const nameMatch = content.match(/^Name=(.+)$/m)
            const name = nameMatch ? nameMatch[1].trim() : file.replace('.desktop', '')
            const id = file.replace('.desktop', '')
            
            if (!seen.has(id)) {
              seen.add(id)
              apps.push({ name, id })
            }
          } catch {}
        }
      } catch {}
    }

    return apps.sort((a, b) => a.name.localeCompare(b.name))
  } catch {
    return []
  }
}

async function getMacInstalledApps(): Promise<Array<{ name: string; id: string }>> {
  try {
    const output = await runCommand('ls /Applications 2>/dev/null')
    if (!output) return []

    return output
      .split('\n')
      .filter(f => f.endsWith('.app'))
      .map(f => ({
        name: f.replace('.app', ''),
        id: `/Applications/${f}`
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  } catch {
    return []
  }
}

async function getUnixDrives(): Promise<Array<{ Name: string; FreeGB: number; TotalGB: number }>> {
  try {
    const output = await runCommand('df -B1 --output=source,size,avail,target 2>/dev/null | tail -n +2')
    
    if (!output) {
      const fallback = await runCommand('df -k 2>/dev/null | tail -n +2')
      return parseDfKilobytes(fallback)
    }

    const drives: Array<{ Name: string; FreeGB: number; TotalGB: number }> = []
    const seen = new Set<string>()

    for (const line of output.split('\n')) {
      const parts = line.trim().split(/\s+/)
      if (parts.length < 4) continue

      const source = parts[0]
      const totalBytes = parseInt(parts[1])
      const freeBytes = parseInt(parts[2])
      const mountPoint = parts[3]

      if (
        source.startsWith('tmpfs') ||
        source.startsWith('udev') ||
        source.startsWith('devtmpfs') ||
        source.startsWith('overlay') ||
        source.startsWith('squashfs') ||
        mountPoint.startsWith('/snap') ||
        mountPoint.startsWith('/sys') ||
        mountPoint.startsWith('/proc') ||
        mountPoint.startsWith('/dev') ||
        mountPoint.startsWith('/run') ||
        isNaN(totalBytes) ||
        totalBytes === 0
      ) {
        continue
      }

      const name = mountPoint === '/' ? '/' : mountPoint.split('/').pop() || mountPoint
      
      if (seen.has(name)) continue
      seen.add(name)

      drives.push({
        Name: name,
        FreeGB: parseFloat((freeBytes / 1024 ** 3).toFixed(2)),
        TotalGB: parseFloat((totalBytes / 1024 ** 3).toFixed(2))
      })
    }

    return drives
  } catch {
    return []
  }
}

function parseDfKilobytes(output: string): Array<{ Name: string; FreeGB: number; TotalGB: number }> {
  const drives: Array<{ Name: string; FreeGB: number; TotalGB: number }> = []
  const seen = new Set<string>()

  for (const line of output.split('\n')) {
    const parts = line.trim().split(/\s+/)
    if (parts.length < 6) continue

    const source = parts[0]
    const totalKB = parseInt(parts[1])
    const freeKB = parseInt(parts[3])
    const mountPoint = parts[5]

    if (
      source.startsWith('tmpfs') ||
      source.startsWith('udev') ||
      source.startsWith('devtmpfs') ||
      mountPoint.startsWith('/snap') ||
      mountPoint.startsWith('/sys') ||
      mountPoint.startsWith('/proc') ||
      mountPoint.startsWith('/dev') ||
      mountPoint.startsWith('/run') ||
      isNaN(totalKB) ||
      totalKB === 0
    ) {
      continue
    }

    const name = mountPoint === '/' ? '/' : mountPoint.split('/').pop() || mountPoint

    if (seen.has(name)) continue
    seen.add(name)

    drives.push({
      Name: name,
      FreeGB: parseFloat((freeKB / 1024 ** 2).toFixed(2)),
      TotalGB: parseFloat((totalKB / 1024 ** 2).toFixed(2))
    })
  }

  return drives
}