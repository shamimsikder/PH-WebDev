import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    return (
        <div>
           
            <h3>Total Countries: {countries.length}</h3>

            <div className='container'>
                { countries.map(country => <Country data={country} key={country.cca3}></Country>)}
            </div>

        </div>
    );
};

export default Countries;