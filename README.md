# LumiWiz

LumiWiz is a compact macOS desktop application for controlling WiZ smart lights. The UI runs on GeaJS inside a secure Electron renderer.

## Requirements

- Node.js 24 LTS (see `.nvmrc`)
- npm 10 or newer
- macOS for the current packaging target

## Development

```bash
nvm install
nvm use
npm install
npm run dev
```

## Verification and packaging

```bash
npm run typecheck
npm run package
npm run make
```

`package` creates the unpacked macOS application, while `make` also creates a distributable ZIP in `out/`.

## Project structure

```text
src/
├── main/       Electron's trusted main process
├── preload/    Narrow, typed bridge exposed to the UI
├── renderer/   GeaJS application, components, stores, and styles
└── shared/     Types shared across Electron boundaries
```

Electron configuration lives in `forge.config.ts`. Vite has separate build configurations for the main process, preload script, and renderer so each runtime stays isolated and can evolve independently.
