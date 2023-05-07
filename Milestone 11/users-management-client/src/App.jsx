import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])

  return (
    <>
      
      <h1>Users Management</h1>
      <h1>Number of Users:  {users.length}</h1>

      {
        users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
      }
      
    </>
  )
}

export default App
