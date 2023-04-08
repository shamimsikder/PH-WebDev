import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
           <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Kabil</Cousin>
           </section>
        </div>
    );
};

export default Uncle;