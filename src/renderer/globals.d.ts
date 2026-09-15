import type { LumiWizDesktopApi } from '../shared/desktop-api'

declare global {
  interface Window {
    readonly lumiwiz: LumiWizDesktopApi
  }
}

export {}
