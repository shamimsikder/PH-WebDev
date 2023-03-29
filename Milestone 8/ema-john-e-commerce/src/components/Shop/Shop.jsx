import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getShoppingCart} from '../../utilities/fakedb'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    useEffect(() => {

        const storedCart = getShoppingCart()

        for(const id in storedCart){

            const addedProduct = products.find(product => product.id === id)

            const quantity = storedCart[id]
            addedProduct.quantity = quantity

        }

    }, [products])

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
        
    }

    return (
        <div className='shop-container'>

            <div className='product-container'>
                {products.map(product => <Product key={product.id} products={product} addToCart={addToCart}></Product>)}
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;