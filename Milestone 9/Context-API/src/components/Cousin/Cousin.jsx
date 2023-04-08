import React, { useContext } from 'react';
import Special from '../Special/Special';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = ({children}) => {

    const ring = useContext(RingContext)

    return (
        <div>
            <h2>{children}</h2>
            <p>Ring: {ring}</p>
        </div>
    );
};

export default Cousin;