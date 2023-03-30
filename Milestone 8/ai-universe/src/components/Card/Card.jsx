import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingleData from '../SingleData/SingleData';

const Card = () => {

    const [data, setData] = useState([])
    const [seeMore, setSeeMore] = useState(false)

    const handleSeeMore = () => {

        setSeeMore(true)

    }

    useEffect(() => {

        const loadData = async() => {

            const res = await fetch( `https://openapi.programming-hero.com/api/ai/tools`)

            const value = await res.json()

            setData(value.data.tools)

        }

        loadData()

    }, [])

    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mt-10'>
            {data.slice(0, seeMore ? 12 : 6).map(d => <SingleData key={d.id} data={d}></SingleData>)}
            </div>
            
            <div className='text-center mb-10'>
                {!seeMore &&(
                    <span onClick={handleSeeMore}>
                        <Button>See More</Button>
                    </span>
                )}
            </div>

        </div>

    );
};

export default Card;