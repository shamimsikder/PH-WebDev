import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.init';


const Register = () => {

    const auth = getAuth(app)

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault()

        setSuccess('')
        setError('')

        const email = event.target.email.value
        const password = event.target.password.value

        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase letter.')
            return
        }
        
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('Please add at least two number.')
            return
        }

        else if(password.length < 6){
            setError('Please add at least six character in your password.')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user
                setError('')
                event.target.reset()
                setSuccess('User has created successfully')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
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

                <input className='mt-4 mb-2 rounded w-50 ps-2' onChange={handleEmailChange} type="email" name='email' placeholder='Your Email' required />
                <br />
                <input className='mb-2 rounded w-50 ps-2'onBlur={handlePasswordBlur} type="password" name='password' placeholder='Your Password' required/>
                <br />
                <input className='btn btn-primary'type="submit" value="Register" />
                

            </form>

            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>

        </div>
    );
};

export default Register;