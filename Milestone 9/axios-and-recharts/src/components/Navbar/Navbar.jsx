import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routers = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Services', path: '/services' },
    ];
      

    return (
        <div className='bg-emerald-500 text-white md:p-5'>

            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{open === true ? 
                <XMarkIcon className="h-6 w-6 text-white" />
                :<Bars3Icon className="h-6 w-6 text-white" />}
                </span>
                
            </div>
            
            <ul className={`md:flex absolute md:static duration-500 bg-emerald-500 pl-8 pb-4 md:pl-0 md:pb-0 rounded-sm ${open ? 'top-6' : '-top-36'}`}>
                {
                    routers.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
    
        </div>
    
    );
};

export default Navbar;