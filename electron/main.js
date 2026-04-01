import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })

    if (process.env.NODE_ENV === "development") {
        window.loadURL("http://localhost:5173")
    } else {
        window.loadFile(path.join(__dirname, "../dist/index.html"))
    }
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== "darwin") app.quit();
})
