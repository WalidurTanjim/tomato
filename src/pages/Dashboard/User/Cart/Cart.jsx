import React from 'react';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    // deleteHandler
    const deleteHandler = dish => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/carts/${dish._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    toast.success(`${dish.name} deleted successfully.`);
                }
            }
        });
    }

    return (
        <div>
            <h1 className='px-5 text-2xl font-medium mb-5'>Total dish: {cart?.length}</h1>

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
                                {/* console.log(dish); */ }

                                return (
                                    <tr key={dish._id}>
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
                                            <span className='p-1 mx-1 rounded-full border border-red-500 bg-red-100 hover:bg-red-200 active:bg-red-100 text-red-500 hover:text-red-600 active:text-red-500' onClick={() => deleteHandler(dish)}><TrashIcon className="size-5" /></span>
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
            <Toaster />
        </div>
    );
};

export default Cart;