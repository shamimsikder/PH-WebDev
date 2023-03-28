import React from 'react';
import './Cart.css'

const Cart = () => {

    return (
        <div className='cart'>
            <h2 className='order-summary'>Order Summary</h2>
            <p>Selected Items:</p>
            <p>Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
            <h2>Grand Total:</h2>
        </div>
    );
};

export default Cart;