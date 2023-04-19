import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider';

const Register = () => {

    const {user, createUser} = useContext(AuthContext)

    const handleRegistration = event => {

        event.preventDefault()

        const form = event.target 
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            
            <h1 className='text-5xl font-semibold'>Register Here</h1>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10">

                <form onSubmit={handleRegistration} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
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
                        <Link to="/login" className="label-text-alt link link-hover">Already Have Account?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Register;