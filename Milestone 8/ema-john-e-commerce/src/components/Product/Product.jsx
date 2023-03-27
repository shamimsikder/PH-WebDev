import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const {name, price, seller, ratings, img} = props.products
    
    return (
        <div className='card'>
            
            <img src={img} alt="" />

            <div>

                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>

            </div>

        </div>
    );
};


export default Product;