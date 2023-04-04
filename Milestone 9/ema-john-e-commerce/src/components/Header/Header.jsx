import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            
            <img src="Logo.svg" alt="" />

            <div className='link'>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">login</a>
            </div>

        </div>
    );
};

export default Header
