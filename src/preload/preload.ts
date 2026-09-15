import { contextBridge } from 'electron'
import type { LumiWizDesktopApi } from '../shared/desktop-api'

const desktopApi: LumiWizDesktopApi = Object.freeze({
  platform: process.platform,
})

contextBridge.exposeInMainWorld('lumiwiz', desktopApi)
