import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user} = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'

    if(user){
        return children
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoutes;