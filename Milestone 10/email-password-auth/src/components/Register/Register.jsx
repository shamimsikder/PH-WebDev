import React, { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault()

    }

    const handleEmailChange = (event) => {

        setEmail(event.target.value)

    }

    const handlePasswordBlur = (event) => {



    }

    return (
        <div>
            
            <h1>This is register</h1>

            <form onSubmit={handleSubmit}>

                <input onChange={handleEmailChange} type="email" name='email' placeholder='Your Email' />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name='password' placeholder='Your Password' />
                <br />
                <input type="submit" value="Register" />
                

            </form>

        </div>
    );
};

export default Register;