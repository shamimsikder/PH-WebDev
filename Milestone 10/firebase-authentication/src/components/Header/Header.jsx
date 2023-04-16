import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex gap-10 py-5 justify-center items-center bg-indigo-500 text-white'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
};

export default Header;