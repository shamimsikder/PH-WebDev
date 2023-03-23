import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='countries'>
            <h4>Country Name: {props.data.name.common}</h4>
            <h5>Area: {props.data.area}</h5>
            <h5>Population: {props.data.population}</h5>
        </div>
    );
};

export default Country;