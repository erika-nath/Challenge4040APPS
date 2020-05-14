require('electron-reload')(__dirname);

// Modules
const {app, BrowserWindow, Menu, MenuItem} = require('electron')


//post require

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

let mainMenu = Menu.buildFromTemplate( require('./mainMenu'))

// Create a new BrowserWindow when `app` is ready
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800, height: 600,
    webPreferences: { nodeIntegration: true },
    //change window size
    webPreferences: { nodeIntegration: true }
  })
  mainWindow.loadFile('src/index.html')
 if(process.env.NODE_ENV === "development"){
    mainWindow.webContents.openDevTools() 
 }
 
 

  Menu.setApplicationMenu(mainMenu)

  // Listen for window being closed
  mainWindow.on('closed',  () => {
    mainWindow = null
  })
}

// Electron `app` is ready
app.on('ready', createWindow)

// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
