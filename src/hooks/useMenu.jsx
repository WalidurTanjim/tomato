import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get('http://localhost:5000/dishes');
           setMenu(res.data);
        };
        fetchData();
    }, [])

    return [ menu ];
};

export default useMenu;