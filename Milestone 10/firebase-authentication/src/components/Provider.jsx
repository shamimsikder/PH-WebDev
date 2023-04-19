import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const Provider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {

        return signOut(auth)

    }

    // Observe auth state change
    useEffect (() => {

       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }

    }, [])

    const authInfo = {
        
        user,
        createUser,
        signIn,
        logOut,
        loading

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;