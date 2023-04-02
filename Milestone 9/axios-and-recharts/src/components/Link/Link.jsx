import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-12 hover:bg-emerald-600 w-full md:p-2 rounded-md'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;