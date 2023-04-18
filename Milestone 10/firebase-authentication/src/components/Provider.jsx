import React, { createContext, useContext, useState, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)


const Provider = ({children}) => {

    const [user, setUser] useState(null)

    
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;