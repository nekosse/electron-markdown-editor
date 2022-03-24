import { browserWindow } from './mainWindow'

const nodemailer = require('nodemailer')

let pdfDescriptionItemList: any[] = []

export function setList(params: any[]) {
  pdfDescriptionItemList = params
}

export async function SendIt() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'pinot.leo@gmail.com',
      pass: '753159Asc!',
    },
  })

  const mailOptions = {
    from: 'pinot.leo@gmail.com',
    to: 'pinot.leo@gmail.com',
    subject: 'Coucou',
    text: 'Hello World!',
    attachments: pdfDescriptionItemList,
  }

  transporter.sendMail(mailOptions, function (err: any, info: any) {
    if (err) {
      console.log(err)
      browserWindow.webContents.send('mail:error')
    } else {
      console.log(info)
      browserWindow.webContents.send('mail:success')
    }
  })
}
