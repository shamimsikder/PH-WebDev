import React from 'react';
import './Country.css'

const Country = (props) => {

    const {name,area,population,flags} = props.data

    return (
        <div className='countries'>
            <img src={flags.png} alt="" />
            <h4>Country Name: {name.common}</h4>
            <h5>Area: {area}</h5>
            <h5>Population: {population}</h5>
        </div>
    );
};

export default Country;