import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MYorder = () => {
    const { user } = useContext(AuthContext)
    const { data: myorders = [], refetch, isLoading } = useQuery({
        queryKey: ["myorders"],
        queryFn: async () => {


            const res = await fetch(`https://sell-point-server.vercel.app/myorders?email=${user?.email}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-3xl mb-2'>All buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Product Name</th>
                            <th>Meeting Location</th>
                            <th>Booking Date</th>
                            <th>Pay</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            myorders?.map((myorder, i) =>
                                <tr key={myorder._id}>
                                    <th>{i + 1}</th>
                                    <td>{myorder.username}</td>
                                    <td>{myorder.location}</td>
                                    <td>{myorder.time}</td>
                                    <td>
                                        {
                                            myorder?.paid ? <h2 className='bg-lime-400'>Paid</h2> : <Link to={`/dashboard/payment/${myorder._id}`}><button className='btn btn-sm btn-accent'>Pay</button></Link>
                                        }
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MYorder;