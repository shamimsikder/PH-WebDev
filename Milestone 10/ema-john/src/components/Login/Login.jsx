import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [show, setShow] = useState(false)

    const from = location.state?.from?.pathname || '/'

    const handleLogIn = event => {

        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                form.reset()
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error.message)
            })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            
            <form onSubmit={handleLogIn}>

                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your E-mail' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name='password' placeholder='Your Password' required/>

                    <p onClick={() => setShow(!show)}><small>
                        
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }

                    </small></p>
                
                </div>

                <input className='btn-submit' type="submit" value="Login" />

            </form>

            <p><small>New to Ema-John? <Link to='/signup'>Create New Account</Link> </small></p>
        
        </div>
    );
};

export default Login;