import React, { useEffect, useState } from 'react';
import Product from './Product';

function Products() {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {

        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));

    },[])

    return (
        <div>
          
            {products.map(product => <Product key={product.id} product={product}></Product>)}

        </div>
    );
}

export default Products