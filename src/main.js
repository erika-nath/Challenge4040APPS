// Modules
const {app, BrowserWindow} = require('electron')

let mainWindow

app.on('ready', () =>{
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes:true
    }))
    const mainMenu=Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
    mainWindow.on('closed',()=>{
        app.quit();
    });
});