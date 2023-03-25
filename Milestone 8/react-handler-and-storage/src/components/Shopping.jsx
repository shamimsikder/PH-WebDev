import React from 'react';
import { multiplication, Calculation} from '../utilities/Calculation';

function Shopping() {
    
   // const result = Calculation(12, 14)

    const result = multiplication(3, 3)
    const add = Calculation(13, 12)

    return (
        <div className='shopping'>
            <h1>Result: {result}</h1>
            <h1>Result2: {add}</h1>
        </div>
    );
}

export default Shopping;