import React from 'react'
import { Outlet } from 'react-router-dom'
import Bar from '../components/Bar'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AppLayout = () => {
  const error = () =>
    toast.error("Erreur le mail n'est pas arrivé à destination", {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  const success = () =>
    toast.success('Le mail a bien été envoyé', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const electron = require('electron')
  const { ipcRenderer } = electron

  ipcRenderer.on('mail:error', () => {
    console.log('coucou')
    error()
  })

  ipcRenderer.on('mail:success', () => {
    console.log('coucou')

    success()
  })

  return (
    <div
      style={{
        padding: '50px 0px 0px 370px ',
      }}
    >
      <Bar />
      <Outlet />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default AppLayout
