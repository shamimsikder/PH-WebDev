import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])

  const handleAddUser = event => {

    event.preventDefault()

    const form = event.target
    const email = form.email.value
    const name = form.name.value 

    const user = {email, name}

  }

  return (
    <>
      
      <h1>Users Management</h1>
      <h1>Number of Users:  {users.length}</h1>

      <form onClick={handleAddUser}>

        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />

      </form>

      {
        users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
      }
      
    </>
  )
}

export default App
