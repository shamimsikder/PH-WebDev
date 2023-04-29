import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
        })

        return () => {
            return unsubscribe()
        }

    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
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