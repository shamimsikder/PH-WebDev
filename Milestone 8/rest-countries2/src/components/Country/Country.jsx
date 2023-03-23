import React from 'react';
import './Country.css'

const Country = (props) => {
    
    const {name,area,capital,population, flags} = props.country
    
    return (
        <div className='country'>
            
            <img src={flags.png} alt="" />
            <h3>Country Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>

        </div>
    );
};

export default Country;