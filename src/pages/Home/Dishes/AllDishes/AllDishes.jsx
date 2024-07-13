import React from 'react';
import useMenu from '../../../../hooks/useMenu';
import DishItem from '../DishItem/DishItem';
import useAuth from '../../../../hooks/useAuth';

const AllDishes = () => {
    const [ menu ] = useMenu();
    const { category } = useAuth();
    const filteredMenu = menu.filter(dish => dish.category === category);
    // console.log(menu) 

    return (
        <section>
            <h1 className='text-2xl font-medium'>Top dishes near you</h1>

            <section className='allDishes min-w-[100%] my-5 grid gap-5 grid-cols-1 md:grid-cols-3'>
                {
                    category === "All" ? 
                    menu.map(dish => <DishItem key={dish._id} dish={dish}></DishItem>) :
                    filteredMenu.map(dish => <DishItem key={dish._id} dish={dish}></DishItem>)
                }
            </section>
        </section>
    );
};

export default AllDishes;