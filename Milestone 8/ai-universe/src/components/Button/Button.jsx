import React from 'react';

const Button = ({children}) => {
    return (
        <>
             <button className='bg-[#EB5757] px-3 py-2 rounded-md text-white mt-5'>{children}</button>
        </>
    );
};

export default Button;