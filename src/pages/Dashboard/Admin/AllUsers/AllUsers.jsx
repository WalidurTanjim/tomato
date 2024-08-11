import React from 'react';
import useUser from '../../../../hooks/useUser';

const AllUsers = () => {
    const [ user, refetch ] = useUser();

    return (
        <div className='px-5'>
            <div className='flex items-center justify-between mb-5'>
                <h1 className='text-2xl font-medium'>Total Items: {user?.length}</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>features</th>
                        </tr>
                    </thead>
                    {/* thead */}

                    <tbody>
                        {
                            user.map((u, idx) => {
                                const { email, name } = u;

                                return(
                                    <tr key={u._id}>
                                        <td>{idx + 1}</td>
                                        <td className="font-bold">{name}</td>
                                        <td>{email}</td>
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

export default AllUsers;