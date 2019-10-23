import { app, BrowserWindow } from "electron";

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    center: true,
    title: 'Bench-Routes - Mark your routes',
    webPreferences: {
      nodeIntegration: true
    },
    hasShadow: true,
    autoHideMenuBar: true
  })

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => mainWindow = null);

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});