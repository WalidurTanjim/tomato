import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = ({ title }) => {
    const [errMsg, setErrMsg] = useState('');
    const { createUserWithSocialAccount, userProfileUpdate, verifyEmail } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    // handleGoogleSignUp
    const handleGoogleSignUp = () => {
        setErrMsg('');

        createUserWithSocialAccount()
        .then(result => {
            const user = result.user;
            const userInfo = {
                email: user.email,
                name: user.displayName
            };
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Account created successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
            })
        })
        .catch(err => {
            console.error(err);
            setErrMsg(err.message);
        })
    }

    return (
        <div>
            <button className='w-full py-2 rounded-md text-center font-medium text-sm text-white bg-red-500 hover:bg-red-600 active:bg-red-500 outline-none mb-3' onClick={handleGoogleSignUp}>{title} with Google</button>
            <button className='w-full py-2 rounded-md text-center font-medium text-sm text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-500 outline-none mb-3'>{title} with Facebook</button>
            {errMsg ? <p className='text-sm text-red-600 font-medium'>{errMsg}</p> : undefined}
        </div>
    );
};

export default SocialLogin;