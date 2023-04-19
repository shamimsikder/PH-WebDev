import React, { useContext } from 'react';
import Provider, { AuthContext } from './Provider';

const Home = () => {

    const user = useContext(AuthContext)

    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <h1>This is Home {user && <span>{user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;