import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {

    const tshirt = useLoaderData()

    return (
        <div className='home-container'>
           
            <div className='tshirt-container'>
                {
                    tshirt.map(pd => <Tshirt key={pd._id} tshirt={pd}></Tshirt>)
                }
            </div>

            <div className='order-container'>
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Home;