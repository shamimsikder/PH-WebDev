import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const cart = props.cart

    let total = 0
    let totalShipping = 0
    let quantity = 0
  
    for(const product of cart){

        //product.quantity = product.quantity || 1

        total = total + product.price
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity

    }

    const tax = total*7/100
    const grandTotal = total+totalShipping+tax

    return (
        <div className='cart'>
            <h2 className='order-summary'>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;