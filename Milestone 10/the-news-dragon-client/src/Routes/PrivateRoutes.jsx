import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'

    if(loading){
        return <Spinner animation="border" />
    }

    if(user){
        return children
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoutes;