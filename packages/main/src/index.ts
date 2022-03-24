import { app, ipcMain } from 'electron'
import { closeDB, initDB, sendMailList } from './dataBaseManager'
import './security-restrictions'
import { SendIt, setList } from './sendMail'
import { restoreOrCreateWindow } from '/@/mainWindow'

/**
 * Prevent multiple instances
 */
const isSingleInstance = app.requestSingleInstanceLock()
if (!isSingleInstance) {
  closeDB()
  app.quit()
  process.exit(0)
}
app.on('second-instance', restoreOrCreateWindow)

/**
 * Disable Hardware Acceleration for more power-save
 */
app.disableHardwareAcceleration()

/**
 * Shout down background process if all windows was closed
 */

initDB()

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    closeDB()
    app.quit()
  }
})

/**
 * @see https://www.electronjs.org/docs/v14-x-y/api/app#event-activate-macos Event: 'activate'
 */
app.on('activate', restoreOrCreateWindow)

/**
 * Create app window when background process will be ready
 */
app
  .whenReady()
  .then(restoreOrCreateWindow)
  .catch(e => console.error('Failed create window:', e))

/**
 * Install Vue.js or some other devtools in development mode only
 */
if (import.meta.env.DEV) {
  app
    .whenReady()
    .then(() => import('electron-devtools-installer'))
    .then(({ default: installExtension, VUEJS3_DEVTOOLS }) =>
      installExtension(VUEJS3_DEVTOOLS, {
        loadExtensionOptions: {
          allowFileAccess: true,
        },
      })
    )
    .catch(e => console.error('Failed install extension:', e))
}

/**
 * Check new app version in production mode only
 */
if (import.meta.env.PROD) {
  app
    .whenReady()
    .then(() => import('electron-updater'))
    .then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
    .catch(e => console.error('Failed check updates:', e))
}

ipcMain.on('SendIt', () => {
  console.log('ipcMain: Executing SendIt')
  SendIt()
})

ipcMain.on('SetPDFList', (event, args) => {
  console.log(event, args)
  setList(args)
})

ipcMain.on('mail:list', () => {
  sendMailList()
})
