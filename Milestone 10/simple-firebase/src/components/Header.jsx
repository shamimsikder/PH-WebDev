import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const Header = () => {
    return (
        <nav>
            
            
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            
        </nav>
    );
};

export default Header;