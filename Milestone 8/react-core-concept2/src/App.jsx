import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /*const product = [

    {name: "Laptop", price: 200000},
    {name: "Phone", price: 120000},
    {name: "Watch", price: 20000},
    {name: "Tab", price: 70000},

  ]*/

  return (
    <div className="App">

      {/*
        product.map(item =>  <Product name={item.name} price={item.price}></Product>)
    */}

    {/*<Counter></Counter>*/}

    <ExternalUsers></ExternalUsers>

    </div>
  )
}

function ExternalUsers(){

  const [users, setUsers] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  },[])

  return(

   <div>

    <h3>External Users</h3>

    {
      users.map(user => <User name={user.name} website={user.website}></User>)
    }

   </div>

  )

}

function User(props){

  return(

    <div className='users'>

      <h3>Name: {props.name}</h3>
      <p>Website: {props.website}</p>

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

/*function Product(props){

  return(

    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>

  )

}*/

export default App
