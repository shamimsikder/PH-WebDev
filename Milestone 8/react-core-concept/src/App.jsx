import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <div className="App">
      
      <Person></Person>
      <Person></Person>
      <Person></Person>

      <Friend></Friend>
      <Friend></Friend>
      
    </div>
  )
}

function Friend(){

  return(

    <div className='friend'>
      <h1>Shakib Al Hasan</h1>
      <p>Job: Cricketer</p>
    </div>

  )

}

function Person(){

  return(

    <div className='person'>
      <h1>Vinicius jr</h1>
      <p>Profession: Football</p>
    </div>

  )

}

export default App
