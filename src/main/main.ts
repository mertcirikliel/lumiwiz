import { app, BrowserWindow } from 'electron'
import path from 'node:path'

const WINDOW_OPTIONS = {
  width: 520,
  height: 720,
  minWidth: 420,
  minHeight: 560,
} as const

async function createMainWindow(): Promise<BrowserWindow> {
  const mainWindow = new BrowserWindow({
    ...WINDOW_OPTIONS,
    title: 'LumiWiz',
    backgroundColor: '#0b1220',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  })

  mainWindow.once('ready-to-show', () => mainWindow.show())
  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }))

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    await mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
  } else {
    await mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    )
  }

  return mainWindow
}

function handleStartupError(error: unknown): void {
  console.error('LumiWiz failed to start:', error)
  app.quit()
}

app
  .whenReady()
  .then(async () => {
    await createMainWindow()

    app.on('activate', async () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        await createMainWindow().catch(handleStartupError)
      }
    })
  })
  .catch(handleStartupError)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
