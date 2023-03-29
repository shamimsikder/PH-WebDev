import React from 'react';

const SingleData = (props) => {
    
    const {name, image, published_in, features} = props.data
    
    return (
        <div>
            
            <img className='w-[95%] h-[95%]' src={image} alt="" />
            
        </div>
    );
};

export default SingleData;