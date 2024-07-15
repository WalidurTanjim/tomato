import React from 'react';
import Header from '../pages/sheared/Header/Header';
import { NavLink, Outlet } from 'react-router-dom';
import { HomeIcon, PlusIcon, ListBulletIcon, UserGroupIcon, CalendarIcon, BanknotesIcon, ShoppingCartIcon, SparklesIcon, BookmarkIcon } from '@heroicons/react/24/solid';
import './styles.css';

const DashboardLayout = () => {
    const isAdmin = true;

    return (
        <div>
            <Header></Header>

            <div className='container mx-auto flex flex-col md:flex-row'>
                <div className='w-full md:w-[220px] min-h-screen'>
                    <div>
                        {/* <h1 className='text-2xl text-orange-600 font-semibold mb-10'>Tomato.</h1> */}
                        {
                            isAdmin ?
                            <div id='userAdminPanel'>
                                    <ul className='dashboardUl'>
                                        <NavLink to='/dashboard/adminHome'>
                                            <li className='text-zinc-700 flex items-center py-2 border-b mb-1 ps-2'><HomeIcon className="me-2 size-4" /> Admin Home</li>
                                        </NavLink>

                                        <NavLink to='/dashboard/addItems'>
                                            <li className='text-zinc-700 flex items-center py-2 border-b mb-1 ps-2'><PlusIcon className="me-2 size-4" /> Add Items</li>
                                        </NavLink>

                                        <NavLink to='/dashboard/manageItems'>
                                            <li className='text-zinc-700 flex items-center py-2 border-b mb-1 ps-2'><ListBulletIcon className="me-2 size-4" /> Manage Items</li>
                                        </NavLink>

                                        <NavLink to='/dashboard/cart'>
                                            <li className='text-zinc-700 flex items-center py-2 border-b mb-1 ps-2'><BookmarkIcon className="me-2 size-4" /> Manage Bookings</li>
                                        </NavLink>

                                        <NavLink to='/dashboard/users'>
                                            <li className='text-zinc-700 flex items-center py-2 border-b mb-1 ps-2'><UserGroupIcon className="me-2 size-4" /> All Users</li>
                                        </NavLink>
                                    </ul>
                                </div> :
                                <div id='userAdminPanel'>
                                    <ul className='dashboardUl'>
                                        <NavLink to='/dashboard/userHome'>
                                            <li className='text-zinc-700 flex items-center py-2 border-b mb-1 ps-2'><HomeIcon className="me-2 size-4" /> User Home</li>
                                        </NavLink>

                                        <NavLink to='/dashboard/reservation'>
                                            <li className='text-zinc-700 flex items-center py-2 border-b mb-1 ps-2'><CalendarIcon className="me-2 size-4" /> Reservation</li>
                                        </NavLink>

                                        <NavLink to='/dashboard/paymentMethod'>
                                            <li className='text-zinc-700 flex items-center py-2 border-b mb-1 ps-2'><BanknotesIcon className="me-2 size-4" /> Payment Method</li>
                                        </NavLink>

                                        <NavLink to='/dashboard/cart'>
                                            <li className='text-zinc-700 flex items-center py-2 border-b mb-1 ps-2'><ShoppingCartIcon className="me-2 size-4" /> My Cart</li>
                                        </NavLink>

                                        <NavLink to='/dashboard/review'>
                                            <li className='text-zinc-700 flex items-center py-2 border-b mb-1 ps-2'><SparklesIcon className="me-2 size-4" /> Add Review</li>
                                        </NavLink>

                                        <NavLink to='/dashboard/bookings'>
                                            <li className='text-zinc-700 flex items-center py-2 mb-1 ps-2'><BookmarkIcon className="me-2 size-4" /> My Bookings</li>
                                        </NavLink>
                                    </ul>
                                </div>
                        }
                    </div>
                    {/* conditional items */}

                    <hr className='border-none h-[2px] bg-zinc-500 my-10' />

                    <div>
                        <ul>
                            <NavLink to="/">
                                <li className='text-zinc-700 hover:text-[#ed6436] active:text-orange-500 flex items-center py-2 border-b mb-1 ps-2'>home</li>
                            </NavLink>

                            <NavLink to="/menu">
                                <li className='text-zinc-700 hover:text-[#ed6436] active:text-orange-500 flex items-center py-2 border-b mb-1 ps-2'>menu</li>
                            </NavLink>

                            <NavLink to="/contact">
                                <li className='text-zinc-700 hover:text-[#ed6436] active:text-orange-500 flex items-center py-2 mb-1 ps-2'>contact</li>
                            </NavLink>
                        </ul>
                    </div>
                    {/* website routes */}
                </div>

                <div className='min-w-[650px] w-full md:ps-5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;