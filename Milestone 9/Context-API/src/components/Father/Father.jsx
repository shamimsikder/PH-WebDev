import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import Myself from '../Myself/Myself';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <div className='flex'>
                <Brother></Brother>
                <Sister></Sister>
                <Myself ring={ring}></Myself>
            </div>
        </div>
    );
};

export default Father;