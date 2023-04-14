import React, { useState } from 'react';
import '../components/style.css'

import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.init';

const Login = () => {

    const [user, setUser] = useState(null)

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {

                const loggedInUser = result.user
                console.log(loggedInUser)

                setUser(loggedInUser)

            })

            .catch(error => {

                console.log('error', error.message)

            })

    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login</button>

            {user && <div>
                <h1>User: {user.displayName}</h1>
                <h3>Email: {user.email}</h3>
            </div>}

        </div>
    );
};

export default Login;