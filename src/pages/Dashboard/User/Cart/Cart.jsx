import React from 'react';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const Cart = () => {
    const axiosPublic = useAxiosPublic();

    // load dish using tanStackQuery
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async() => {
            const res = await axiosPublic.get('/carts');
            return res.data;
        }
    })

    return (
        <div>
            <h1 className='text-2xl font-medium mb-5'>Total dish: {cart?.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* thead */}

                    <tbody>
                        {
                            cart?.map(dish => {
                                const { image, name, category, price } = dish;
                                console.log(dish);

                                return (
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{name}</div>
                                                    <div className="text-sm opacity-50">{category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>5
                                            {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                        </td>
                                        <td className='font-medium text-orange-600'>${price}</td>
                                        <th className='flex items-center'>
                                            <Link className='p-1 mx-1 rounded-full border border-green-500 bg-green-100 hover:bg-green-200 active:bg-green-100 text-green-500 hover:text-green-600 active:text-green-500'><PencilSquareIcon className="size-5" /></Link>
                                            <span className='p-1 mx-1 rounded-full border border-red-500 bg-red-100 hover:bg-red-200 active:bg-red-100 text-red-500 hover:text-red-600 active:text-red-500'><TrashIcon className="size-5" /></span>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    {/* tbody */}
                </table>
                {/* table */}
            </div>
        </div>
    );
};

export default Cart;