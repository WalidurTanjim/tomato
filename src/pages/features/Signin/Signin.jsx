import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Signin.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../../sheared/SocialLogin/SocialLogin';

const Signin = () => {
    const { loginUser } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const triggeredLocation = location.state?.from.pathname;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setErrMsg('');

        // loginUser
        loginUser(data.email, data.password)
        .then(() => {
            navigate(triggeredLocation || '/');
            console.log('Sign in successfully.');
        })
        .catch(err => {
            console.error(err);
            setErrMsg(err.message);
        })
    };

    return (
        <section className='w-full md:w-[500px] mx-auto my-10'>
            <h1 className='text-2xl font-medium'>Signin Form</h1>

            <form className='mt-10' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input id="email" type="email" autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("email", { required: true })} placeholder='Email Address' />
                    </div>
                </div>
                {/* email field end */}

                <div className='mb-3'>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="mt-1">
                        <input id="password" type={showPass ? 'text' : 'password'} autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("password", { required: true })} placeholder='Password' />
                    </div>
                </div>
                {/* password field end */}

                <div className="mb-3 flex items-center">
                    <input type="checkbox" onClick={() => setShowPass(!showPass)} />
                    <p className='text-zinc-700 text-sm font-medium ms-2'>Show Password</p>
                </div>
                {/* show password div end */}

                {errMsg ? <p className='text-sm text-red-600 font-medium'>{errMsg}</p> : undefined}

                <input type="submit" className='w-full py-1.5 rounded-md text-center font-medium border text-sm text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-500 mt-3' value="Signin" />

                <p className='text-sm text-center font-medium mt-3 text-zinc-700'>Don't Have An Account? <Link to="/signup" className='text-orange-500 hover:text-orange-600 active:text-orange-500'>Signup</Link></p>
            </form>

            <hr className='signinHr' />
            
            <SocialLogin title="Continue"></SocialLogin>
        </section>
    );
};

export default Signin;