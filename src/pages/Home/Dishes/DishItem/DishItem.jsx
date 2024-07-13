import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
import './DishItem.css';

const DishItem = ({ dish }) => {
    const { name, category, ratings, description, image, price } = dish;

    // handleAddToCart
    const handleAddToCart = dish => {
        console.log(dish);
    }

    return (
        <section className='dishItem border rounded-md ease-in-out duration-300 hover:scale-[1.02]'>
            <div className='relative w-full h-[200px] rounded-t-md'>
                <img src={image} alt="Dish Image" className='w-full h-full rounded-t-md' />
                <span className='absolute bottom-5 right-5 p-2 rounded-full bg-white'><PlusIcon className='w-6' onClick={() => handleAddToCart(dish)}></PlusIcon></span>
            </div>

            <div className='p-3'>
                <div>
                    <h1 className='text-lg font-medium'>{name}</h1>
                </div>

                <p className='text-sm text-zinc-700 font-medium my-1'>{description}</p>
                <h3 className='text-lg font-medium text-[#ed6436]'>${price}</h3>
            </div>
        </section>
    );
};

export default DishItem;