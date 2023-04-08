import React from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import Myself from '../Myself/Myself';

const Grandpa = () => {

    const ring = "dimond"

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>

            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </section>

        </div>
    );
};

export default Grandpa;