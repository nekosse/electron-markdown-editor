import React, { useState } from 'react'
import { FC } from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import PDFSelector from '../components/PDFSelector'
import { PDFDescriptionItem } from '../models/PdfDescriptionItem'
import './Tutelle.scss'

const Tutelle: FC = () => {
  return (
    <div className="mainTutelle">
      <div className="tutelleElem">
        <h1 className="stepTitle">Etape 1 : Sélectionnez vos factures</h1>
        <PDFSelector />
        <div className="nextIcon">
          <Link to="/tutelle/2">
            <BsArrowRightCircleFill size={100} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Tutelle
