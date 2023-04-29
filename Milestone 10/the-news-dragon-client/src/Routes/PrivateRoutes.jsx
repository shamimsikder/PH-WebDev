import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoutes = ({children}) => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;