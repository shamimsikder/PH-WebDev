import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h1>Order Summary: {cart.length}</h1>
            {
                cart.map(ts => <p key={ts._id}>{ts.name} <button onClick={() => handleRemoveFromCart(ts._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;