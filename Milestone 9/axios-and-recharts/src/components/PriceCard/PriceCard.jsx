import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const PriceCard = ({price}) => {
    return (
        <div className='mt-5 border-[1px] border-emerald-500 p-10 pb-0 rounded-md'>
            
            <p className='text-center'><span  className='font-bold text-4xl'>{price.price}</span><small>/mon</small></p>
            <p className='font-semibold text-2xl text-emerald-500 text-center'>{price.name}</p>
            <p className='font-semibold mt-4 mb-2'>Features:</p>

            {price.features.map(feature => <p className='flex gap-2 items-center'><span><CheckCircleIcon className="h-4 w-4 text-emerald-500" /></span> {feature}</p>)}

            <div className='text-center'>
                <button className='bg-emerald-500 rounded-md px-3 py-1 text-white mt-5 mb-5'>Buy Now</button>
            </div>

        </div>
    );
};

export default PriceCard;