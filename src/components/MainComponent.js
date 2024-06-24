import { BrowserRouter } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import React from 'react'
import RouterComponent from './RouterComponent'

export default function MainComponent() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      {/* <h1>This is main component</h1> */}
      <RouterComponent />
    </BrowserRouter>
  )
}