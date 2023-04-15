import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.init';


const Register = () => {

    const auth = getAuth(app)

    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user
            })
            .catch(error => {
                console.error(error)
            })

    }

    const handleEmailChange = (event) => {

        setEmail(event.target.value)

    }

    const handlePasswordBlur = (event) => {



    }

    return (
        <div className='container w-50 mx-auto'>
            
            <h1 className='mt-4'>This is register</h1>

            <form onSubmit={handleSubmit}>

                <input className='mt-4 mb-2 rounded w-50 ps-2' onChange={handleEmailChange} type="email" name='email' placeholder='Your Email' />
                <br />
                <input className='mb-2 rounded w-50 ps-2'onBlur={handlePasswordBlur} type="password" name='password' placeholder='Your Password' />
                <br />
                <input className='btn btn-primary'type="submit" value="Register" />
                

            </form>

        </div>
    );
};

export default Register;