import axios from 'axios';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';
import { useState } from 'react';

const Axios = () => {
    
    const [phones, setPhones] = useState([])
    
    useEffect(() => {

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {

                const loadData = data.data.data
                const phoneData = loadData.map(phone => {

                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1])
                    const phoneInfo = {

                        name: phone.phone_name,
                        price: price

                    }

                    return phoneInfo

                })

                setPhones(phoneData)

            })

    }, [])

    return (
        <div className='flex justify-center items-center mt-10'>
            
            <BarChart width={1400} height={400} data={phones}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={"price"}/>
            </BarChart>

        </div>
    );
};

export default Axios;