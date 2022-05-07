const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const iconpath = path.join(__dirname, "./icon.png");

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 800, 
        height: 600,
        icon: iconpath
    });
     

    mainWindow.loadURL(
        isDev
        ? "https://pocketradio.tk"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }
});