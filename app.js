const {app, BrowserWindow} = require('electron')
const {PosPrinter} = require('@electron/remote').remote.require("electron-pos-printer");
const {PosPrinter} = require("electron-pos-printer");
    const url = require("url");
    const path = require("path");

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/buddy/browser/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
         const window = electron.BrowserWindow;

// Get List of Printers
let printWindow = window.getFocusedWindow();
let list =  printWindow.webContents.getPrintersAsync();
console.log('list of Printers', list);
      if (mainWindow === null) createWindow()
    })
