import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return (
            <div className='flex items-center justify-center py-20'>
                <h1 className='text-center text-2xl text-slate-700 font-medium'>Loading...</h1>
            </div>
        )
    }

    if(user){
        return children;
    }

    return <Navigate to='/signin' state={{ from: location }} replace={true}></Navigate>;
};

export default PrivateRoute;