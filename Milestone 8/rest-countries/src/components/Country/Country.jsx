import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='countries'>
            <h4>Country Name: {props.name}</h4>
            <h5>Population: {props.population}</h5>
        </div>
    );
};

export default Country;