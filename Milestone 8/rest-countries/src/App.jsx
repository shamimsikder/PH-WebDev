import { useEffect, useState } from 'react'
import './App.css'

function App() {

  return (

    <div className="App">
      
      <Countries></Countries>

    </div>
  )
}

function Countries(){

  const [countries, setCountries] = useState([])

  useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))

  }, [])

  return(

    <div>
      <h2>Total Countries: {countries.length}</h2>
    </div>

  )

}

export default App
