import React from 'react';
import { useForm } from "react-hook-form"
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useLoaderData } from 'react-router-dom';

const img_api_key = import.meta.env.VITE_image_api_key;
const img_host_api = `https://api.imgbb.com/1/upload?key=${img_api_key}`;
const UpdateItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const loadedData = useLoaderData();
    console.log(loadedData);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(img_host_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        if(res.data.success){
            const dishItem = { 
                name: data.name,
                price: data.price,
                category: data.category,
                description: data.description,
                ratings: data.ratings,
                image: res.data.data.display_url
            };
            const dishRes = await axiosSecure.put(`/dishes/${loadedData._id}`, dishItem);
            console.log(dishRes.data)
            if(dishRes.data.modifiedCount > 0){
                toast.success(`${dishItem.name} updated successfully`);
            }
        }
    }

    return (
        <section className='px-5'>
            <h1 className='text-2xl text-center font-medium mb-5'>Update The Dish</h1>

            <form className='w-full mx-auto my-10' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-0 md:gap-5 grid-cols-1 md:grid-cols-2'>
                    <div className='mb-3'>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-1">
                            <input id="name" type="text" autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("name", { required: true })} placeholder='Dish Name' defaultValue={loadedData.name} />
                        </div>
                    </div>
                    {/* name field end */}

                    <div className='mb-3'>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                            price
                        </label>
                        <div className="mt-1">
                            <input id="price" type="number" autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("price", { required: true })} placeholder='Price' defaultValue={loadedData.price} />
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
                        <select id='category' className='w-full border rounded-md px-2 py-1 mt-1' {...register("category", { required: true })} defaultValue={loadedData ? loadedData?.category : 'Select category'}>
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
                            <input id="ratings" type="number" autoComplete="off" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6" {...register("ratings", { required: true })} placeholder='Ratings' defaultValue={loadedData.ratings} />
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
                        <textarea id="description" rows="5" autoComplete='off' placeholder='Write description here' className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none sm:text-sm sm:leading-6' {...register("description", { required: true })} defaultValue={loadedData.description}></textarea>
                    </div>
                </div>
                {/* description field end */}

                <div className="mb-3">
                    <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                        Upload Image
                    </label>
                    <div className="mt-1">
                        <input type="file" id="image" className='w-full px-2 py-1.5 rounded-md border' {...register("image", { required: true })} />
                    </div>
                </div>

                <input  type="submit" className='w-full py-1.5 rounded-md text-center font-medium border text-sm mt-3 text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-500' value="Add Item" />
            </form>
            <Toaster></Toaster>
        </section>
    );
};

export default UpdateItems;