import React, { useState } from 'react';
import '../components/style.css'

import {getAuth, GithubAuthProvider, GoogleAuthProvider,signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.init';

const Login = () => {

    const [user, setUser] = useState(null)

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

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

    const handleGithubSignIn = () => {

        signInWithPopup(auth, githubProvider)
            .then(result => {

                const loggedInUser = result.user

                setUser(loggedInUser)

            })

            .catch(error => {

                console.log('error', error.message)

            })

    }

    const handleSignOut = () => {

        signOut(auth)
            .then(result => {
                setUser(null)
            })
            .catch(error => {
                console.log('error', error.message)
            })

    }

    return (
        <div>
            
            { user ? 

                <button onClick={handleSignOut}>Sign Out</button>:
                <div>
                    <button onClick={handleGoogleSignIn}>Google LogIn</button>
                    <button onClick={handleGithubSignIn}>Github LogIn</button>
                </div>

            }

            {user && <div>
                <h1>User: {user.displayName}</h1>
                <h3>Email: {user.email}</h3>
            </div>}

        </div>
    );
};

export default Login;