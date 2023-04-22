import React from 'react';
import './Signup.css'

const Signup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            
            <form >

                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your E-mail' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your Password' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Confirm Your Password' required/>
                </div>

                <input className='btn-submit' type="submit" value="Login" />

            </form>
        
        </div>
    );
};

export default Signup;