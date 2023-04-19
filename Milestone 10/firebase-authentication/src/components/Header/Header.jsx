import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {

        logOut()
            .then(() => {})
            .catch(error => console.error(error))

    }

    return (
        <div className='flex gap-10 py-5 justify-center items-center bg-indigo-500 text-white'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            {
                user ? 
                <>
                    <span>{user.email}</span> 
                    <button onClick={handleLogOut} className="btn btn-ghost">Sign Out</button>
                </>
                : <Link to="/login">Login</Link>

            }
        </div>
    );
};

export default Header;