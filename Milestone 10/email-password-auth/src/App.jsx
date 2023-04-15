import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {

  return (
    <div className="App">
      
      <Header></Header>
      <Outlet></Outlet>

    </div>
  )
}

export default App
