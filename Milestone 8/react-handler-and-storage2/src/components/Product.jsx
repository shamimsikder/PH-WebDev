import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const {id, price, name} = props.product
    
    //const addToCartWithParam = () => addToCart(id)

    return (
        <div className='product'>

            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <p>ID: {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            {/*<button onClick={addToCartWithParam}>Add to Cart</button>*/}

        </div>
    );
};

export default Product;