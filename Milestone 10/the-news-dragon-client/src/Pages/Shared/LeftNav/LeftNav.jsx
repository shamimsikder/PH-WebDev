import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        fetch('https://the-news-dragon-server-five-ivory.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))

    }, [])

    return (
        <div>
            <h3>All Category</h3>

            <div className='ps-4'>

                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }

            </div>

        </div>
    );
};

export default LeftNav;