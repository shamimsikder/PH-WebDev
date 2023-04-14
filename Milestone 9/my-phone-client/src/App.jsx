import React from 'react'
import './App.css'
import Phones from './components/Phones'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
