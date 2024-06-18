import { Route, Routes } from 'react-router'

import React from 'react'
import MainComponent from './MainComponent'

export default function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainComponent />} />
      </Routes>
    </div>
  )
}
