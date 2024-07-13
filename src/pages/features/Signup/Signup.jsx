import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                        <input id="createPassword" type={showPass ? 'text' : 'password'} autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("createPassword", { required: true })} placeholder='Create Password' />
                    </div>
                </div>
                {/* createPassword field end */}

                <div className='mb-3'>
                    <label htmlFor="repeatPassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Repeat Password
                    </label>
                    <div className="mt-1">
                        <input id="repeatPassword" type={showPass ? 'text' : 'password'} autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("repeatPassword", { required: true })} placeholder='Repeat Password' />
                    </div>
                </div>
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

                <input type="submit" className='w-full py-1.5 rounded-md text-center font-medium border text-sm mt-3' value="Signup" />

                <p className='text-sm text-center font-medium mt-3 text-zinc-700'>Already Have An Account? <Link to="/signin" className='text-orange-500 hover:text-orange-600 active:text-orange-500'>Signin</Link></p>
            </form>

            <hr className='signupHr' />

            <button className='w-full py-2 rounded-md text-center font-medium text-sm text-white bg-red-500 hover:bg-red-600 active:bg-red-500 outline-none mb-3'>Signin with Google</button>
            <button className='w-full py-2 rounded-md text-center font-medium text-sm text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-500 outline-none mb-3'>Signin with Facebook</button>
        </section>
    );
};

export default Signup;