import React from 'react';
import './Menu.css'
import { menu_list } from '../../../assets/frontend_assets/assets.js'

const Menu = () => {

    return (
        <div className='my-10'>
            <div className='w-full md:max-w-[60%]'>
                <h1 className='text-2xl font-medium'>Explore our menu</h1>
                <p className='text-sm text-zinc-700 font-medium mt-2'>Choose from a diverse menu featuring a delectable array of dishes. Our mission to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            </div>

            <div className="menuCategories min-w-[100%] flex items-center justify-between gap-[30px] text-center overflow-x-scroll mx-[20px] my-5">
                {
                    menu_list.map((item, idx) => {
                        return (
                            <div key={idx} className='category'>
                                <img src={item.menu_image} alt="" className='w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] ' />
                                <h2 className='font-medium text-sm text-zinc-900 cursor-pointer mt-3'>{item.menu_name}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Menu;