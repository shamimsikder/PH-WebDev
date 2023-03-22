import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const person = [

    {name: 'Ricardo Kaka', job: 'Footballer'},
    {name: 'Tamim Iqbal', job: 'Cricketer'},
    {name: 'Rafael Nadal', job: 'Tennis Player'}

  ]

  return (

    <div className="App">
      
      {
        person.map(p => <People name={p.name} job={p.job}></People>)
      }

    </div>
  )
}

function People(props){

  return(

    <div className='people'>
      <h2>Name: {props.name}</h2>
      <p>Job: {props.job}</p>
    </div>

  )

}

export default App
