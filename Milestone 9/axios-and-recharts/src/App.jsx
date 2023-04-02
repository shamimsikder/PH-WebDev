import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import Axios from './components/Axios/Axios'

function App() {

  return (
    <div className="App">
      
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <Axios></Axios>

    </div>
  )
}

export default App
