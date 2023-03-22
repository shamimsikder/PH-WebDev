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

      {/*<ExternalUsers></ExternalUsers>*/}

      <ExternalToDo></ExternalToDo>

    </div>
  )
}

function ExternalToDo(){

  const [todo, setTodo] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodo(data))

  }, [])

  return(

    <div>

      {todo.map(item => <ToDo title={item.title} complete={item.completed}></ToDo>)}

    </div>

  )

}

function ToDo(props){

  return(

    <div className='user'>
      <h3>Title: {props.title}</h3>
      <p>Complete: {props.complete  === true ? "True" : "False"}</p> 
    </div>

  )

}


/*function ExternalUsers ()completeonst [user, setUser] = useState([])

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

}*/

/*function User(props){

  return(

    <div className='user'>
      <h2>Name: {props.name}</h2>
      <h4>E-mail: {props.email}</h4>
    </div>

  )

}*/

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
