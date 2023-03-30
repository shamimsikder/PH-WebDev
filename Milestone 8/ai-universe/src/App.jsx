import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Button>Sort by Date</Button>
      <Card></Card>
    </div>
  )
}

export default App
