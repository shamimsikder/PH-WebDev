import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='container w-50 mx-auto'>
            
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/registerrbs">RegisterRBS</Link>
            <Link to="/registerbs">RegisterBS</Link>

        </nav>
    );
};

export default Header;