import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {

    const friend = useLoaderData()

    return (
        <div>
            <h1>{friend.name}</h1>
            <p>Phone: {friend.phone}</p>
            <p>Address: {friend.address.street}, {friend.address.suite}, {friend.address.city}.</p>
        </div>
    );
};

export default FriendDetails;