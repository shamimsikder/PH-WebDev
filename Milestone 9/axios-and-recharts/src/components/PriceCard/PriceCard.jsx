import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div className='mt-5 border-[1px] border-emerald-500 p-5 rounded-md'>
            
            <p className='font-bold text-4xl'>{price.price}</p>
            <p className='font-semibold text-2xl text-emerald-500 text-center'>{price.name}</p>

        </div>
    );
};

export default PriceCard;