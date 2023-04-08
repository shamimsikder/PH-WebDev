import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt}) => {

    const {_id, name, price, picture} = tshirt

    return (
        <div className='tshirt-details'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Tshirt;