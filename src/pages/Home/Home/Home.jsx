import React from 'react';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import AllDishes from '../Dishes/AllDishes/AllDishes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Menu></Menu>
            <AllDishes></AllDishes>
        </div>
    );
};

export default Home;