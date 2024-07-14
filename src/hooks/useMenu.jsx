import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchData = async() => {
            const res = await axiosPublic.get('/dishes');
           setMenu(res.data);
        };
        fetchData();
    }, [])

    return [ menu ];
};

export default useMenu;