import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/sheared/Header/Header';
import Footer from '../pages/sheared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto px-5 mx:px-0">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;