import React, { useEffect, useState } from 'react';
import './Menu.css'
import { menu_list } from '../../../assets/frontend_assets/assets.js'
import useAuth from '../../../hooks/useAuth.jsx';

const Menu = () => {
    const [categoryItem, setCategoryItem] = useState([]);
    const { category, setCategory } = useAuth();

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            setCategoryItem(data);
        };
        fetchData();
    }, []);

    return (
        <section className='my-10'>
            <section className='w-full md:max-w-[60%]'>
                <h1 className='text-2xl font-medium'>Explore our menu</h1>
                <p className='text-sm text-zinc-700 font-medium mt-2'>Choose from a diverse menu featuring a delectable array of dishes. Our mission to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            </section>

            <section className="menuCategories min-w-[100%] flex items-center justify-between gap-[30px] text-center overflow-x-scroll mx-[20px] my-5">
                {
                    categoryItem.map((item, idx) => {
                        const { menu_name, menu_image } = item;
                        {/* console.log(item, menu_name, menu_image) */}

                        return (
                            <div onClick={() => setCategory(prev => prev === menu_name ? "All" : menu_name)} key={idx} className='category h-auto'>
                                <img src={menu_image} alt="Category Img" className={`${category === menu_name ? 'active' : ''} w-[7.5vw] min-w-[80px] h-[7.5vh] min-h-[80px] cursor-pointer rounded-[50%] ease-in-out duration-100`} />

                                <h2 className='font-medium text-sm text-zinc-900 cursor-pointer mt-3'>{menu_name}</h2>
                            </div>
                        )
                        {/* category end */}
                    })
                }
            </section>
            {/* menuCategories end */}

            <hr className='categoryHr' />
        </section>
    );
};

export default Menu;