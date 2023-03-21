import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <div className="App">
      
      <Person name='Vinicius jr' job='Football'></Person>
      <Person name='Ricardo Kaká' job='Football'></Person>
      <Person name='Federico Valverde' job='Football'></Person>

      <Friend name='Shakib Al Hasan' job='Cricketer'></Friend>
      <Friend name='Kane Williamson' job='Cricketer'></Friend>
      
    </div>
  )
}

function Friend(props){

  return(

    <div className='friend'>
      <h1>{props.name}</h1>
      <p>Job: {props.job}</p>
    </div>

  )

}

function Person(props){

  return(

    <div className='person'>
      <h1>{props.name}</h1>
      <p>Profession: {props.job}</p>
    </div>

  )

}

export default App
