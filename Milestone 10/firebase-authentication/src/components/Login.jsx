import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogIn = event => {

        event.preventDefault()

        const form = event.target
        const email = form.email.value 
        const password = form.password.value

    }

    return (
        <div className='flex flex-col justify-center items-center mt-20'>
           
            <h1 className='text-5xl font-semibold'>Please Login!</h1>

           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10">

                <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                <Link to='/register'>
                    <button className='btn btn-link'>New To Site?</button>
                </Link>

            </div>
        
        </div>
    );
};

export default Login;