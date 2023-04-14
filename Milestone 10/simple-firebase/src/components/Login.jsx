import React from 'react';
import '../components/style.css'

import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.init';

const Login = () => {

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {

                const user = result.user
                console.log(user)

            })

            .catch(error => {

                console.log('error', error.message)

            })

    }

    return (
        <nav>
            <button onClick={handleGoogleSignIn}>Login</button>
        </nav>
    );
};

export default Login;