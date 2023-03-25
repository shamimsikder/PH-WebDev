import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const {id, price, name} = props.product
    
    return (
        <div className='product'>

            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <p>ID: {id}</p>

        </div>
    );
};

export default Product;