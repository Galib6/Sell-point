import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItems = () => {
    const { data: reporteds = [], refetch } = useQuery({
        queryKey: ["reporteds"],
        queryFn: async () => {
            const res = await fetch('https://sell-point-server.vercel.app/reportedtoadmin');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl mb-2'>All Reported Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Location</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            reporteds?.map((reported, i) =>
                                <tr key={reported._id}>
                                    <th>{i + 1}</th>
                                    <td>{reported.name}</td>
                                    <td>{reported.Owner}</td>
                                    <td>{reported.email}</td>
                                    <td>{reported.Location}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;