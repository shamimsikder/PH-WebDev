import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {

    const {name, phone, id, email} = friend

    return (
        <div className='friend'>
            
            <h1>{name}</h1>
            <p>Phone: {phone}</p>
            <p>E-mail: {email}</p>
            <p><Link to={"/posts"}>Posts</Link></p>
            <p><Link to={`/friend/${id}`}>Show Details</Link></p>

        </div>
    );
};

export default Friend;