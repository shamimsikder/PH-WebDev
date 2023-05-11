import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const data = useLoaderData()

    const handleUpdate = (event) => {

        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }

        fetch(`http://localhost:5000/users/${data._id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {

            })

    }

    return (
        <div>
            
            <h1>Update Information of {data.name}</h1>

            <form onSubmit={handleUpdate}>

                <input type="text" name="name" defaultValue={data?.name} id="name" />
                <br />
                <input type="email" name="email" defaultValue={data?.email} id="email" />
                <br />
                <input type="submit" name="" value="Update" id="" />

            </form>

        </div>
    );
};

export default Update;