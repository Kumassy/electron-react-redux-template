import electron from 'electron';
const { app, BrowserWindow } = electron;
import configureStore from '../shared/store/configureStore';
const store = configureStore({}, 'main');
import {
  decrement
} from '../shared/actions/counter';

const isDevelopment = process.env.NODE_ENV !== 'production'


let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nativeWindowOpen: true
    }
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})


setInterval(() => {
  store.dispatch(decrement());
}, 5000)
