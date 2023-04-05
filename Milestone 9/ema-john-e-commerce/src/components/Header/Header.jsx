import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            
            <img src="Logo.svg" alt="" />

            <div className='link'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/order">Orders</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">login</a>
            </div>

        </div>
    );
};

export default Header
