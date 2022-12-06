import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';

const ReportedItems = () => {
    const { data: reporteds = [], refetch, isLoading } = useQuery({
        queryKey: ["reporteds"],
        queryFn: async () => {
            const res = await fetch('https://sell-point-server.vercel.app/reportedtoadmin');
            const data = await res.json();
            //console.log(data)
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl mb-2'>All Reported Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th> <span className='hidden md:block'>Product Name</span> </th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th> <span className='hidden md:block'>Location</span> </th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            reporteds?.map((reported, i) =>
                                <tr key={reported._id}>
                                    <th>{i + 1}</th>
                                    <td> <span className='hidden md:block'>{reported.name}</span></td>
                                    <td>{reported.Owner}</td>
                                    <td>{reported.email}</td>
                                    <td> <span className='hidden md:block'>{reported.Location}</span></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;