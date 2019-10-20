const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
<<<<<<< HEAD
const url = require('url');
const isDev = require('electron-is-dev');

=======
const isDev = require('electron-is-dev');

require('electron-reload')(__dirname);

>>>>>>> ce666b881d3686f1dbb4658577ad74ef1971963f
let mainWindow;

function createWindow() {

    mainWindow = new BrowserWindow({
<<<<<<< HEAD
        minWidth: 800,
=======
        minWidth: 1000,
>>>>>>> ce666b881d3686f1dbb4658577ad74ef1971963f
        minHeight: 600,
        center: true,
        title: 'Bench-Routes - Mark your routes',
        webPreferences: {
          nodeIntegration: true
        },
        hasShadow: true,
<<<<<<< HEAD
        autoHideMenuBar: true
    })
=======
        autoHideMenuBar: true,
        transparent: false
    });
>>>>>>> ce666b881d3686f1dbb4658577ad74ef1971963f

    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

    mainWindow.webContents.openDevTools();
<<<<<<< HEAD
    
=======

>>>>>>> ce666b881d3686f1dbb4658577ad74ef1971963f
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
<<<<<<< HEAD
});
=======
});
>>>>>>> ce666b881d3686f1dbb4658577ad74ef1971963f
