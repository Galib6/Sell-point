import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allusers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/allsellers");
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    const handleDeleteSeller = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/seller/${id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Seller deleted successfully`)
                    refetch()
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl mb-2'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers?.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.type}</td>
                                    <td><button className='btn btn-xs btn-danger' onClick={() => handleDeleteSeller(seller._id)}>Delete</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;