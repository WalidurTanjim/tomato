import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Signin.css';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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

                <input type="submit" className='w-full py-1.5 rounded-md text-center font-medium border text-sm mt-3' value="Signin" />

                <p className='text-sm text-center font-medium mt-3 text-zinc-700'>Don't Have An Account? <Link to="/signup" className='text-orange-500 hover:text-orange-600 active:text-orange-500'>Signup</Link></p>
            </form>

            <hr className='signinHr' />

            <button className='w-full py-2 rounded-md text-center font-medium text-sm text-white bg-red-500 hover:bg-red-600 active:bg-red-500 outline-none mb-3'>Signin with Google</button>
            <button className='w-full py-2 rounded-md text-center font-medium text-sm text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-500 outline-none mb-3'>Signin with Facebook</button>
        </section>
    );
};

export default Signin;