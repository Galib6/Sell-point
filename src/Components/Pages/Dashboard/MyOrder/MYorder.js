import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import Mysingorder from './mysingorder';

const MYorder = () => {
    const { user } = useContext(AuthContext)
    // const [myordera, setMyorders] = useState([])
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

    if (!isLoading && myorders.length < 1) {
        return <h1 className='min-h-screen text-3xl'>No order yet !!!</h1>

    }


    return (
        <div>
            <h2 className='text-3xl mb-2'>All Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full table-auto">

                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th> Product Name</th>
                            <th><span className='hidden md:block'>Meeting Location</span></th>
                            <th><span className='hidden md:block'>Booking Date</span></th>
                            <th>Payment Status</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            myorders?.map((myorder, i) =>
                                <Mysingorder
                                    key={myorder._Id}
                                    myorder={myorder}
                                    i={i}
                                ></Mysingorder>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MYorder;