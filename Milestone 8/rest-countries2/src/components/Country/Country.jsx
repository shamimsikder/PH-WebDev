import React from 'react';

const Country = (props) => {
    
    const {name,area,language,population} = props.country
    
    return (
        <div>
            
            <h3>Country Name: {name.common}</h3>

        </div>
    );
};

export default Country;