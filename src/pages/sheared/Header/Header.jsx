import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [bars, setBars] = useState(false);

    return (
        <div className='container mx-auto px-5 md:px-0 py-6 flex justify-between items-center'>
            <Bars3CenterLeftIcon className='w-6 md:hidden' onClick={() => setBars(!bars)}></Bars3CenterLeftIcon>

            <h1 className='font-semibold text-2xl text-[#ed6436]'>Tomato.</h1>

            <ul className='text-zinc-600 hidden md:flex justify-center items-center'>
                <NavLink to='/'><li className='py-2 px-4 hover:text-[#ed6436]'>home</li></NavLink>
                <NavLink to='/menu'><li className='py-2 px-4 hover:text-[#ed6436]'>menu</li></NavLink>
                <NavLink to='/contact'><li className='py-2 px-4 hover:text-[#ed6436]'>contact</li></NavLink>
            </ul>

            <div className='flex justify-center items-center'>
                <Link className='py-2 px-4'><MagnifyingGlassIcon className='w-6 text-zinc-600 hover:text-[#ed6436]'></MagnifyingGlassIcon></Link>
                <Link className='py-2 px-4'><ShoppingCartIcon className='w-6 text-zinc-600 hover:text-[#ed6436]'></ShoppingCartIcon></Link>
                <Link><p className='py-2 px-5 border border-[#ed6436] text-[#ed6436] font-medium rounded-full hover:text-[#da3a05] hover:border-[#da3a05] active:bg-[#f8eae5] text-sm'>Sign in</p></Link>
            </div>
        </div>
    );
};

export default Header;