import React, { useEffect, useState } from 'react'
import { FC } from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import PDFSelector from '../components/PDFSelector'
import './Tutelle.scss'

const Tutelle2: FC = () => {
  const [mailList, setmailList] = useState<String[]>()

  const electron = require('electron')
  const { ipcRenderer } = electron

  useEffect(() => {
    ipcRenderer.send('mail:list')
  }, [])

  ipcRenderer.on('mail:list', (event, args) => {
    setmailList(args)
  })

  const sendMail = () => {
    ipcRenderer.send('SendIt')
  }

  return (
    <div className="mainTutelle">
      <div className="tutelleElem">
        <h1 className="stepTitle">Etape 2 : Choisisez les mails</h1>
        <button onClick={sendMail}>Notify!</button>

        <div>
          {mailList?.map((item, index) => (
            <p> {item} </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tutelle2
