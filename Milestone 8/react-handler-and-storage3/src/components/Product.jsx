import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const {id, price, name} = props.products
    
    return (
        <div className='product'>
            <p>Name: {name}</p>            
            <p>Price: {price}</p>            
            <p>ID: {id}</p>      
            <button>Add to Cart</button>      
            <button>Remove from Cart</button>      
        </div>
    );
};

export default Product