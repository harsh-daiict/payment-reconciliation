const electron = require("electron");
const path = require("path");
const url = require("url");
const fs = require('fs');
const csv = require('./util/csv');

const app = electron.app;
const ipc = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;
const dialog = electron.dialog;

const SUCCESS       = "success";
const FAIL          = "fail";
let win;

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, '/../dist/payment-reconciliation/index.html'),
    protocol: 'file',
    slashes: true,
  }));
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow);

app.on('window-on-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win == null) {
    createWindow()
  }
});

ipc.on('upload-orders', function (event, args) {
  dialog.showOpenDialog({title: "Order File Selector"}, {filters: [{name: 'CSV', extensions: ['csv']}]}).then( result => {
    if(result.canceled) {
      console.log("File Not Selected");
      return;
    }
    var files = result.filePaths;
    console.log(files);
    const filecontent  = fs.readFileSync(files[0]).toString();
    csv.readAndSaveFlipkartOrders(filecontent, args);
  });
});

ipc.on('upload-payments', function (event, args) {
  dialog.showOpenDialog({title: "Payment File Selector"}, {filters: [{name: 'CSV', extensions: ['csv']}]}).then( result => {
    if(result.canceled) {
      console.log("File Not Selected");
      return;
    }
    var files = result.filePaths;
    console.log(files);
    const filecontent  = fs.readFileSync(files[0]).toString();
    csv.readAndSaveFlipkartPayments(filecontent, args);
  });
});

ipc.on('get-report', function (event, args) {
  csv.getReport(args);
})
