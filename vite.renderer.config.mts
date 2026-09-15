import { geaPlugin } from '@geajs/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [geaPlugin(), tailwindcss()],
  build: {
    modulePreload: { polyfill: false },
  },
})
