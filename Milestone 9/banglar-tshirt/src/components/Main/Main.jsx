import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import './Main.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Outlet/>
            <ToastContainer />
        </div>
    );
};

export default Main;