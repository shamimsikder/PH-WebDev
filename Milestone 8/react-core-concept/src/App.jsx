import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const footballer = [
    {name:'Vinicius jr', job:'Footballer'},
    {name:'Ricardo Kaká', job:'Footballer'},
    {name:'Federico Valverde', job:'Footballer'}
    
  ]
  const cricketer = [
    {name:'Shakib Al Hasan', job:'Footballer'},
    {name:'Kane Williamson', job:'Footballer'},
  ]

  return (
    <div className="App">

      {
        footballer.map(football => <Person name={football.name} job={football.job}></Person>)
      }

      {
        cricketer.map(cricket => <Friend name={cricket.name} job={cricket.job}></Friend>)
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
      <p>Profession: {props.job}</p>
    </div>

  )

}

export default App
