import React, { FC, useState } from 'react'
import './PDFSelector.scss'
import { FaFileUpload } from 'react-icons/fa'
import { PDFDescriptionItem } from '../models/PdfDescriptionItem'

const PDFSelector = () => {
  const [fileList, setfileList] = useState<PDFDescriptionItem[]>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const electron = require('electron')
    const { ipcRenderer } = electron

    const files = event.target.files
    var pdfDescriptionItemList: PDFDescriptionItem[] = []
    console.log(files)
    if (files != null) {
      for (let i = 0; i < files.length; i++) {
        pdfDescriptionItemList.push({
          name: files[i].name,
          path: files[i].path,
          contentType: 'application/pdf',
        })
      }
    }
    ipcRenderer.send('SetPDFList', pdfDescriptionItemList)

    setfileList(pdfDescriptionItemList)
  }

  return (
    <div>
      <input
        type="file"
        name="file"
        id="file"
        className="inputfile"
        accept="application/pdf"
        onChange={handleChange}
        multiple
      />
      <label htmlFor="file">
        <div className="PDFSelector">
          <FaFileUpload size={100} />
          <span>Selectionnez vos PDF</span>
        </div>
        <div>
          {fileList?.map((item, index) => (
            <p> {item.name} </p>
          ))}
        </div>
      </label>
    </div>
  )
}

export default PDFSelector
