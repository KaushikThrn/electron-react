const electron = require('electron');

const {app, BrowserWindow, ipcMain} = electron;

let MainWindow;

app.on('ready',()=>{
    MainWindow =  new BrowserWindow({
        height: 800,
        width: 800,
        webPreferences: { backgroundThrottling: false}
    });
    MainWindow.loadURL(`http://localhost:3000/`)
});
