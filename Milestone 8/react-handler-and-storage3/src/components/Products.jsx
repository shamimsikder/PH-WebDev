import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div>
            
            {products.map(product => <Product key={product.id} products={product}></Product>)}

        </div>
    );
};

export default Products;