import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {

    const tshirt = useLoaderData()
    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt => {

        const newCart = [...cart, tshirt]
        setCart(newCart)

    }

    return (
        <div className='home-container'>
           
            <div className='tshirt-container'>
                {
                    tshirt.map(pd => <Tshirt key={pd._id} tshirt={pd} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>

            <div className='order-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Home;