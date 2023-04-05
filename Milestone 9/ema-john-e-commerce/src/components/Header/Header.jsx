import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            
            <img src="Logo.svg" alt="" />

            <div className='link'>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/manage-inventory">Manage Inventory</Link>
                <Link to="/login">login</Link>
            </div>

        </div>
    );
};

export default Header
