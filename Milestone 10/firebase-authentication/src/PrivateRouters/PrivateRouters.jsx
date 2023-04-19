import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider';
import { Navigate } from 'react-router-dom';

const PrivateRouters = ({children}) => {

    const {user} = useContext(AuthContext)

    if(user){
        return children
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRouters;