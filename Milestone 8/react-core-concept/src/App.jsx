import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Person></Person>
      <Person></Person>
      
    </div>
  )
}

function Person(){

  return (

    <h1>WelCome to React</h1>

  )

}

export default App
