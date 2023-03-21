import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const footballer = ['Vinicius jr','Ricardo Kaká','Federico Valverde']
  const cricketer = ['Shakib Al Hasan','Kane Williamson']

  return (
    <div className="App">

      {
        footballer.map(football => <Person name={football}></Person>)
      }
      
      {/*<Person name= {footballer[0]} job='Football'></Person>
      <Person name= {footballer[1]} job='Football'></Person>
      <Person name= {footballer[2]} job='Football'></Person>

      <Friend name= {cricketer[0]} job='Cricketer'></Friend>
      <Friend name= {cricketer[1]} job='Cricketer'></Friend>*/}
      
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
      
    </div>

  )

}

export default App
