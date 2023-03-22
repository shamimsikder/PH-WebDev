import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /*const person = [

    {name: 'Ricardo Kaka', job: 'Footballer'},
    {name: 'Tamim Iqbal', job: 'Cricketer'},
    {name: 'Rafael Nadal', job: 'Tennis Player'}

  ]*/

  return (

    <div className="App">
      
      {/*
        person.map(p => <People name={p.name} job={p.job}></People>)
      */}

      {/*<Counter></Counter>*/}

      <ExternalUsers></ExternalUsers>

    </div>
  )
}

function ExternalUsers (){

  const [user, setUser] = useState([])

  useEffect (() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))

  }, [])

  return(

    <div>
      {user.map(u => <User name={u.name} email={u.email}></User>)}
    </div>

  )

}

function User(props){

  return(

    <div className='user'>
      <h2>Name: {props.name}</h2>
      <h4>E-mail: {props.email}</h4>
    </div>

  )

}

/*function Counter(){

  const [count, setCount] = useState(0)
  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
    </div>
  )

}*/

/*function People(props){

  return(

    <div className='people'>
      <h2>Name: {props.name}</h2>
      <p>Job: {props.job}</p>
    </div>

  )

}*/

export default App
