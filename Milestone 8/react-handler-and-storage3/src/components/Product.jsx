import React from 'react';
import { addToDB, removeFromDB } from '../utilities/fakedb';
import './Product.css'

const Product = (props) => {
    
    const {id, price, name} = props.products
    
    const addToCart = (id) => {
        addToDB(id)
    }

    const RemoveFromCart = (id) => {
        removeFromDB(id)
    }

    return (
        <div className='product'>
            <p>Name: {name}</p>            
            <p>Price: {price}</p>            
            <p>ID: {id}</p>      
            <button onClick={() => addToCart(id)}>Add to Cart</button>      
            <button onClick={() => RemoveFromCart(id)}>Remove from Cart</button>      
        </div>
    );
};

export default Product