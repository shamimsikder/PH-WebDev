import React, { useState } from 'react';
import './Signup.css'
import { Link } from "react-router-dom";


const Signup = () => {

    const [error, setError] = useState('')

    const handleSignUp = event => {

        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value 

        if(password !== confirm){
            setError('Your Password Did Not Match!')
            return
        }

        else if(password.length < 6){
            setError('Password Must be 6 Character or Longer')
            return
        }

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            
            <form onSubmit={handleSignUp}>

                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your E-mail' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your Password' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Confirm Your Password' required/>
                </div>

                <input className='btn-submit' type="submit" value="Login" />

            </form>

            <p><small>Already Have an account? <Link to='/login'>Login</Link> </small></p>

            <p className='text-error'>{error}</p>

        </div>
    );
};

export default Signup;