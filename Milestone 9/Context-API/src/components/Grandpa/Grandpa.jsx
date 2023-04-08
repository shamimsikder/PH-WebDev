import React, { createContext } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export  const RingContext = createContext("Gold")

const Grandpa = () => {

    const ring = "dimond"

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>

            <RingContext.Provider value='Gold Ring'>

                <section className='flex'>
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Aunty ring={ring}></Aunty>
                </section>

            </RingContext.Provider>

        </div>
    );
};

export default Grandpa;