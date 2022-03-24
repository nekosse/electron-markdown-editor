import React, { FC } from 'react'
import './App.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Overview'
import Tutelle from './pages/Tutelle'

import AppLayout from './layout/AppLayout'
import Blank from './pages/Blank'
import Tutelle2 from './pages/Tutelle2'

const App: FC = () => {
  return (
    <div>
      <p>coucou</p>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/tutelle" element={<Tutelle />}></Route>
            <Route path="/tutelle/2" element={<Tutelle2 />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
