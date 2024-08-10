import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const [bars, setBars] = useState(false);
    const [profileFeatures, setProfileFeatures] = useState(false);

    // logOutHandler
    const logOutHandler = () => {
        logOut()
        .then(() => {
            console.log('Account sign out successfully.');
        })
        .catch(err => {
            console.error(err);
        })
    }

    return (
        <div className='container mx-auto px-5 md:px-0 py-6 flex justify-between items-center relative'>
            <Bars3CenterLeftIcon className='w-6 md:hidden' onClick={() => setBars(!bars)}></Bars3CenterLeftIcon>

            <Link to='/'><h1 className='logo font-semibold text-2xl text-[#ed6436]'>Tomato.</h1></Link>

            <ul className={`text-zinc-600 hidden md:flex justify-center items-center`}>
                <NavLink to='/'><li className='py-2 px-4 hover:text-[#ed6436]'>home</li></NavLink>
                <NavLink to='/menu'><li className='py-2 px-4 hover:text-[#ed6436]'>menu</li></NavLink>
                <NavLink to='/contact'><li className='py-2 px-4 hover:text-[#ed6436]'>contact</li></NavLink>
            </ul>

            <div className='flex justify-center items-center'>
                <Link className='py-2 px-4'><MagnifyingGlassIcon className='w-6 text-zinc-600 hover:text-[#ed6436]'></MagnifyingGlassIcon></Link>
                <Link className='py-2 px-4'><ShoppingCartIcon className='w-6 text-zinc-600 hover:text-[#ed6436]'></ShoppingCartIcon></Link>
                {
                    user ?
                    <span className='py-2 ps-4' onClick={() => setProfileFeatures(!profileFeatures)}><UserCircleIcon className='w-6 text-zinc-600 hover:text-[#ed6436]'></UserCircleIcon></span> :
                    <Link to="/signin"><p className='py-2 px-5 border border-[#ed6436] text-[#ed6436] font-medium rounded-full hover:text-[#da3a05] hover:border-[#da3a05] active:bg-[#f8eae5] text-sm'>Sign in</p></Link>
                }
            </div>

            <div className={`${profileFeatures ? 'top-[70px]' : user===null ? '-top-[700px]' : '-top-[700px]'} absolute z-50 border rounded-md w-[200px] right-0 bg-white`}>
                <ul>
                    <Link to='/dashboard/profile'><li className='text-sm font-medium text-zinc-700 py-2 ps-3 hover:bg-gray-100 w-full'>Your Profile</li></Link>
                    <Link to='/dashboard'><li className='text-sm font-medium text-zinc-700 py-2 ps-3 hover:bg-gray-100 w-full'>Dashboard</li></Link>
                    <li className='text-sm font-medium text-zinc-700 py-2 ps-3 hover:bg-gray-100 w-full' onClick={logOutHandler}>Sign out</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;