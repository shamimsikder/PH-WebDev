import React from 'react';
import './Friend.css'

const Friend = ({friend}) => {

    const {name, phone, id, email} = friend

    return (
        <div className='friend'>
            
            <h1>{name}</h1>
            <p>Phone: {phone}</p>
            <p>E-mail: {email}</p>

        </div>
    );
};

export default Friend;