import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';
import useAdmin from '../../../../hooks/useAdmin';
import Loading from '../../../Shared/Loading/Loading';

const Allusers = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    console.log(isAdmin)

    const { data: sellers = [], refetch, isLoading } = useQuery({
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


    const handlevarify = (seller) => {
        console.log(seller)
        if (window.confirm("Are you sure to verify") === true) {
            fetch(`http://localhost:5000/varified?email=${seller?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success("Successfully varified")

                })


        }

    }


    return (
        <div>
            <h2 className='text-3xl mb-2'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full ">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete/Varify</th>
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
                                    <td>
                                        <button className='btn btn-xs btn-danger' onClick={() => handleDeleteSeller(seller._id)}>Delete</button>
                                        <button className='btn btn-xs btn-danger ml-2' onClick={() => handlevarify(seller)}>Varify</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default Allusers;