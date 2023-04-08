import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            {ring}
            <section className='flex'>
                <Cousin>Mokbul</Cousin>
                <Cousin>Abul</Cousin>
            </section>
        </div>
    );
};

export default Aunty;