import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {

    const [prices, setPrices] = useState([])

    useEffect(() => {

        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))

    }, [])

    return (
        <div className='mt-10'>
            
            <h1 className='font-semibold bg-emerald-500 p-5 text-white text-5xl text-center'>Awesome Affordable Price</h1>

            <div className='flex justify-center items-center gap-5'>
                {
                    prices.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
                }
            </div>
    
        </div>
    );
};

export default PriceList;