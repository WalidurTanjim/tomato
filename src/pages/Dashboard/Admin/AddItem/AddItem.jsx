import React from 'react';
import { useForm } from "react-hook-form"
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AddItem = () => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axiosSecure.post('/dishes', data)
        .then(res => {
            console.log(res.data);
        })

        console.log(data);
    }

    return (
        <section className='px-5'>
            <h1 className='text-2xl text-center font-medium mb-5'>Add New Dish</h1>

            <form className='w-full mx-auto my-10' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-0 md:gap-5 grid-cols-1 md:grid-cols-2'>
                    <div className='mb-3'>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-1">
                            <input id="name" type="text" autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("name", { required: true })} placeholder='Dish Name' />
                        </div>
                    </div>
                    {/* name field end */}

                    <div className='mb-3'>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                            price
                        </label>
                        <div className="mt-1">
                            <input id="price" type="number" autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("number", { required: true })} placeholder='Price' />
                        </div>
                    </div>
                    {/* price field end */}
                </div>
                {/* first grid */}

                <div className='grid gap-0 md:gap-5 grid-cols-1 md:grid-cols-2'>
                    <div className='mb-3'>
                        <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                            Category
                        </label>
                        <select id='category' className='w-full border rounded-md px-2 py-1 mt-1' {...register("category", { required: true })} defaultValue="Select category">
                            <option disabled>Select category</option>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    {/* category field end */}

                    <div className='mb-3'>
                        <label htmlFor="ratings" className="block text-sm font-medium leading-6 text-gray-900">
                            Ratings
                        </label>
                        <div className="mt-1">
                            <input id="ratings" type="number" autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("ratings", { required: true })} placeholder='Ratings' />
                        </div>
                    </div>
                    {/* ratings field end */}
                </div>
                {/* second grid */}

                <div className='mb-3'>
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                        Description
                    </label>
                    <div className="mt-1">
                        <textarea id="description" rows="5" autoComplete='off' placeholder='Write description here' className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6' {...register("description", { required: true })}></textarea>
                    </div>
                </div>
                {/* description field end */}

                <input  type="submit" className='w-full py-1.5 rounded-md text-center font-medium border text-sm mt-3 text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-500' value="Add Item" />
            </form>
        </section>
    );
};

export default AddItem;