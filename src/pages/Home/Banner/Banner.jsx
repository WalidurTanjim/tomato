import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner w-[100%] h-[450px]'>
            <div className='w-full h-full flex items-center'>
                <div className='w-full md:w-[50%] px-5 md:ps-10 text-white'>
                    <h1 className='text-3xl font-medium'>Order your <br />favorite food here</h1>
                    <p className='my-4 text-sm'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
                    <button className='text-zinc-700 text-sm font-medium bg-white py-2 px-5 border border-zinc-400 rounded-full hover:text-orange-600 hover:border-orange-600 hover:shadow-lg ease-in-out duration-300'>View Menu</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;