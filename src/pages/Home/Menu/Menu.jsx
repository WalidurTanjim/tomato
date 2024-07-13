import React from 'react';
import './Menu.css'
import { menu_list } from '../../../assets/frontend_assets/assets.js'
import useAuth from '../../../hooks/useAuth.jsx';

const Menu = () => {
    const { category, setCategory } = useAuth();

    return (
        <section className='my-10'>
            <section className='w-full md:max-w-[60%]'>
                <h1 className='text-2xl font-medium'>Explore our menu</h1>
                <p className='text-sm text-zinc-700 font-medium mt-2'>Choose from a diverse menu featuring a delectable array of dishes. Our mission to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            </section>

            <section className="menuCategories min-w-[100%] flex items-center justify-between gap-[30px] text-center overflow-x-scroll mx-[20px] my-5">
                {
                    menu_list.map((item, idx) => {
                        return (
                            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={idx} className='category'>
                                <img src={item.menu_image} alt="" className={`${category === item.menu_name ? 'active' : ''} w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] ease-in-out duration-100`} />
                                <h2 className='font-medium text-sm text-zinc-900 cursor-pointer mt-3'>{item.menu_name}</h2>
                            </div>
                        )
                        {/* category end */}
                    })
                }
            </section>
            {/* menuCategories end */}
        </section>
    );
};

export default Menu;