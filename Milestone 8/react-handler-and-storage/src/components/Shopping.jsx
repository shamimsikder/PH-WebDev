import React from 'react';
import Calculation from '../utilities/Calculation';

function Shopping() {
    
    const result = Calculation(12, 14)

    return (
        <div className='shopping'>
            <h1>Result: {result}</h1>
        </div>
    );
}

export default Shopping;