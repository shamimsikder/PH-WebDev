import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const {name, price, seller, ratings, img} = props.products
    const addToCart = props.addToCart
    
    return (
        <div className='product'>
            
            <img src={img} alt="" />

            <div className='product-info'>

                <h3 className='product-name'>{name}</h3>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>

            </div>

            <button onClick={() => addToCart(props.products)} className='btn-cart'>Add to Cart</button>

        </div>
    );
};


export default Product;