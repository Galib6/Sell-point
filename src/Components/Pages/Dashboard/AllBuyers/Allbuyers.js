import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import useAdmin from '../../../../hooks/useAdmin';

const Allbuyers = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    console.log(isAdmin)


    const { data: buyers = [], refetch } = useQuery({
        queryKey: ["buyers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/allbuyers");
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    const handleDeleteBuyer = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/buyer/${id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`buyer deleted successfully`)
                    refetch()
                }
            })
    }


    return (
        <div>
            <h2 className='text-3xl mb-2'>All buyers</h2>
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
                            buyers?.map((buyer, i) =>
                                <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.type}</td>
                                    <td><button className='btn btn-xs btn-danger' onClick={() => handleDeleteBuyer(buyer._id)}>Delete</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Allbuyers;