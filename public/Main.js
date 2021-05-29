const { app, BrowserWindow, screen } = require('electron')

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().size


  // Create the browser window.     
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 600,
    maxWidth: width,
    maxHeight: height
  })
  win.loadURL('http://localhost:3000/')
}

app.on('ready', createWindow)