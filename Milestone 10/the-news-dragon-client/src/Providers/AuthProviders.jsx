import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const login = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })

        return () => {
            return unsubscribe()
        }

    }, [])

    const logOut = () => {

        setLoading(true)
        return signOut(auth)
    
    }

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;