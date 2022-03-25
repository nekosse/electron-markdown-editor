import { browserWindow } from './mainWindow'

//const sqlite3 = require('sqlite3').verbose()

/*const db = new sqlite3.Database(
  'tutelle.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err: { message: any }) => {
    if (err) {
      console.error(err.message)
    }
    console.log('Connected to the tutelle database.')
  }
)*/

export function initDB() {
  /*db.serialize(function () {
    try {
      db.run('CREATE TABLE IF NOT EXISTS  mails (adresse TEXT)')

      db.each(
        'SELECT COUNT(*) as count FROM mails',
        function (err: any, row: { count: number }) {
          console.log('COUNT: ' + row.count)
          if (row.count === 0) {
            const stmt = db.prepare('INSERT INTO mails VALUES (?)')
            stmt.run('pinot.leo@gmail.com')
            stmt.run('pinot.nicolas@gmail.com')

            stmt.finalize()
          }

          db.each(
            'SELECT rowid AS id, adresse FROM mails',
            function (err: any, row: { id: string; adresse: string }) {
              console.log(row.id + ': ' + row.adresse)
            }
          )
        }
      )
    } catch (error) {
      console.error(error)
    }
  })*/
}

export function closeDB() {
  //db.close()
}

export async function sendMailList() {
  const data = await request()
  console.log(data)
  browserWindow.webContents.send('mail:list', data)
}

function request() {
  return new Promise(function (resolve) {
    const mailList: string[] = []
    resolve(mailList)

    /*db.each(
      'SELECT rowid AS id, adresse FROM mails',
      function (err: any, row: { id: string; adresse: string }) {
        if (err) reject(err)
        else {
          console.log(row.id + ': ' + row.adresse)
          mailList.push(row.adresse)
        }
      },
      function (err: any) {
        if (err) {
          reject(err)
        } else resolve(mailList)
      }
    )*/
  })
}
