import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    
    const users = useLoaderData()

    const handleDelete = (id) => {

        console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {

            if(data.deleteCount > 0){
                alert('Delete Successful')
            }

        })

    }
    
    return (
        <div>
            <h1>{users.length}</h1>
            <div>
                {users.map(user => <p key={user._id}>{user.name} : {user.email} <button onClick={() => handleDelete(user._id)}>X</button> <Link to={`/update/${user._id}`}><button>Update</button></Link></p>)}
            </div>
        </div>
    );
};

export default Users;