import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <div className="App">
      
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>

    </div>
  )
}

export default App
