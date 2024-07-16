import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Signup.css";
import useAuth from '../../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from '../../sheared/SocialLogin/SocialLogin';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

// react-hot-toast alert
const notify = () => toast.success('Verification mail send!');

const Signup = () => {
    const [errMsg, setErrMsg] = useState('');
    const { createUser, userProfileUpdate, verifyEmail } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const passRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const navigate = useNavigate();
    const location = useLocation();
    const triggeredLocation = location.state?.from.pathname;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setErrMsg('');

        if (!passRegEx.test(data.createPassword)) {
            return;
        }

        if (data.repeatPassword !== data.createPassword) {
            return;
        }

        // console.log(data);
        createUser(data.email, data.repeatPassword)
            .then(result => {
                const user = result.user;
                userProfileUpdateHandler(user, data.fullName)
                verifyEmailHandler(user);
                console.log('Signed up user: ', user);
                navigate(triggeredLocation || '/');
            })
            .catch(err => {
                console.error(err);
                setErrMsg(err.message)
            })
    };

    // userProfileUpdateHandler
    const userProfileUpdateHandler = (user, name) => {
        userProfileUpdate(user, name)
            .then(() => {
                console.log('Profile updated');
            })
            .catch(err => {
                console.error(err)
                setErrMsg(err.message);
            })
    }

    // verifyEmailHandler
    const verifyEmailHandler = user => {
        verifyEmail(user)
            .then(() => {
                notify();
            })
            .catch(err => {
                console.error(err);
                setErrMsg(err.message);
            })
    }

    return (
        <section className='w-full md:w-[500px] mx-auto my-10'>
            <h1 className='text-2xl font-medium'>Signup Form</h1>

            <form className='mt-10' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                        Full Name
                    </label>
                    <div className="mt-1">
                        <input id="fullName" type="text" autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-orange-500 sm:text-sm sm:leading-6" {...register("fullName", { required: true })} placeholder='Full Name' />
                    </div>
                </div>
                {/* fullName field end */}

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
                    <label htmlFor="createPassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Create Password
                    </label>
                    <div className="mt-1">
                        <input id="createPassword" type={showPass ? 'text' : 'password'} autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("createPassword", { required: true }, { pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}/ })} placeholder='Create Password' />
                    </div>
                </div>
                {errors.createPassword && <span className='text-sm font-medium text-red-600'>Password should be uppercase, lowercase, digits, special chars and at least 6 chars</span>}
                {/* createPassword field end */}

                <div className='mb-3'>
                    <label htmlFor="repeatPassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Repeat Password
                    </label>
                    <div className="mt-1">
                        <input id="repeatPassword" type={showPass ? 'text' : 'password'} autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("repeatPassword", { required: true })} placeholder='Repeat Password' />
                    </div>
                </div>
                {errors.repeatPassword && <span className='text-sm font-medium text-red-600'>Both are not equal</span>}
                {/* repeatPassword field end */}

                <div className='mb-3'>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone Number
                    </label>
                    <div className="mt-1">
                        <input id="phoneNumber" type="number" autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("phoneNumber", { required: true })} placeholder='Phone Number' />
                    </div>
                </div>
                {/* phoneNumber field end */}

                <div className="mb-3 flex items-center">
                    <input type="checkbox" onClick={() => setShowPass(!showPass)} />
                    <p className='text-zinc-700 text-sm font-medium ms-2'>Show Password</p>
                </div>
                {/* show password div end */}

                {errMsg ? <p className='text-sm text-red-600 font-medium'>{errMsg}</p> : undefined}

                <input type="submit" className='w-full py-1.5 rounded-md text-center font-medium border text-sm text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-500 mt-3' value="Signup" />

                <p className='text-sm text-center font-medium mt-3 text-zinc-700'>Already Have An Account? <Link to="/signin" className='text-orange-500 hover:text-orange-600 active:text-orange-500'>Signin</Link></p>
            </form>


            <hr className='signupHr' />

            <SocialLogin title="Signup"></SocialLogin>
            <Toaster />
        </section>
    );
};

export default Signup;