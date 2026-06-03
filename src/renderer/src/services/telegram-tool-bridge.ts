/**
 * Telegram → Renderer Tool Bridge
 * Executes IRIS tools requested by the main-process Telegram bot.
 */

import { handleNavigation, handleOpenMap } from '@renderer/tools/Earth-View'
import { getRunningApps } from './get-apps'
import { getHistory, saveMessage } from './iris-ai-brain'
import { getSystemStatus } from './system-info'
import { handleImageGeneration } from '@renderer/tools/Image-generator'
import { fetchWeather } from '@renderer/tools/weather-api'
import { fetchStockData } from '@renderer/tools/stock-api'
import { consultOracle } from '@renderer/tools/rag-oracle-tool'
import { runDeepResearch } from '@renderer/tools/deepSearch-rag'
import { runIndexDirectory, runSmartSearch } from '@renderer/tools/semantic-search-api'
import {
  createFolder, manageFile, openFile, readDirectory, readFile, writeFile
} from '@renderer/functions/file-manager-api'
import { openApp, performWebSearch } from '@renderer/functions/apps-manager-api'
import { readSystemNotes, saveNote } from '@renderer/functions/notes-manager-api'
import { sendWhatsAppMessage } from '@renderer/functions/whatsapp-manager-api'
import { takeScreenshot } from '@renderer/functions/keybaord-manager'
import { runTerminal } from '@renderer/functions/coding-manager-api'
import { readEmails, sendEmail } from '@renderer/functions/gmail-manager-api'
import { playSpotifyMusic } from '@renderer/functions/Sporify-manager'

export async function executeToolFromTelegram(
  name: string,
  args: Record<string, any>
): Promise<string> {
  try {
    switch (name) {
      // ── Special internal tools ─────────────────────────────────────
      case '__get_iris_context__': {
        const sys = await getSystemStatus()
        const apps = await getRunningApps()
        return `\n- OS: ${sys?.os?.type || 'Unknown'}\n- CPU: ${sys?.cpu || 0}%\n- Open apps: ${apps.slice(0, 5).join(', ')}`
      }
      case '__get_system_status__': {
        const sys = await getSystemStatus()
        return `*System*\n• CPU: ${sys?.cpu || 0}%\n• RAM: ${sys?.memory?.usedPercentage || 0}%\n• OS: ${sys?.os?.type || 'Unknown'}`
      }

      // ── Regular tools ──────────────────────────────────────────────
      case 'index_Folder': return await runIndexDirectory(args.folder_path)
      case 'smart_file_search': return await runSmartSearch(args.query)
      case 'read_file': return await readFile(args.file_path)
      case 'write_file': return await writeFile(args.file_name, args.content)
      case 'manage_file': return await manageFile(args.operation, args.source_path, args.dest_path)
      case 'open_file': return await openFile(args.file_path)
      case 'read_directory': return await readDirectory(args.directory_path)
      case 'create_folder': return await createFolder(args.folder_path)
      case 'open_app': return await openApp(args.app_name)
      case 'google_search': return await performWebSearch(args.query)
      case 'run_terminal': return await runTerminal(args.command, args.path)
      case 'save_note': return await saveNote(args.title, args.content)
      case 'read_notes': return await readSystemNotes()
      case 'send_whatsapp': return await sendWhatsAppMessage(args.contact_name, args.message)
      case 'play_music': return await playSpotifyMusic(args.song_name)
      case 'take_screenshot': return await takeScreenshot()
      case 'get_weather': return await fetchWeather(args.location)
      case 'get_stock_price': return await fetchStockData(args.ticker)
      case 'generate_image': return await handleImageGeneration(args.prompt)
      case 'read_emails': return await readEmails(args.max_results || 5)
      case 'send_email': return await sendEmail(args.to, args.subject, args.body)
      case 'query_oracle': return await consultOracle(args.question)
      case 'deep_research': return await runDeepResearch(args.query)
      case 'open_map': return await handleOpenMap(args.location)
      case 'get_navigation': return await handleNavigation(args.origin, args.destination)

      default:
        return `Tool "${name}" not found.`
    }
  } catch (err: any) {
    return `Tool error: ${err?.message || String(err)}`
  }
}