import React from 'react';
import { useState } from "react";
import "./SocialLoginButton.css"

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    GithubAuthProvider,
  } from "firebase/auth";
import app from '../../firebase/firebase.config';

const SocialLoginButton = () => {

    const [user, setUser] = useState({})
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleLogin = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(error => {
                console.error(error.message)
            })

    }

    const handleGithubLogin = () => {

    }

    return (
        <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogin}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
          onClick={handleGithubLogin}
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
    );
};

export default SocialLoginButton;