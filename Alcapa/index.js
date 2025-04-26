const { app, BrowserWindow, ipcMain } = require('electron');
const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 630,
        // frame: false,
    })

    win.loadFile("index.html");
    win.setMenuBarVisibility(false); 
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();
})

