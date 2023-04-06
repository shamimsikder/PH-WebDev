import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {

    const {id, img, price, name, quantity} = product

    return (
        <div className='review-item'>
            
            <img src={img} alt="" />

            <div>
                <p>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>

        </div>
    );
};

export default ReviewItem;