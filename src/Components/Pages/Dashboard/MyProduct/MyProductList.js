import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyProductList = () => {
    const { user, loggedUser } = useContext(AuthContext)

    const { data: prodcuts = [], refetch, isLoading } = useQuery({
        queryKey: ["prodcuts"],
        queryFn: async () => {
            const res = await fetch(`https://sell-point-server.vercel.app/product?email=${user?.email}`);
            const data = await res.json();
            //console.log(data)
            return data;
        }
    })

    const handleAdvertise = (product) => {
        if (window.confirm("Are you sure to advertise") === true) {
            fetch(`https://sell-point-server.vercel.app/advertise/${product?._id}`)
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    if (data.modifiedCount > 0) {
                        toast.success("Sucesfully Avertised.")
                        refetch()
                    }
                })
        }

    }

    const handledeletProduct = (id) => {
        if (window.confirm("Are you sure to delete?") === true) {
            fetch(`https://sell-point-server.vercel.app/deleteproduct/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem("s-token")}`
                },
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    toast.success("Successfully Deleted")
                    refetch()
                })
        }

    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h2 className='text-3xl mb-2'>All Listed Product</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th> <span className='hidden md:block'>Date</span></th>
                                <th> <span className='hidden md:block'>Status</span></th>
                                <th>Advertise</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                prodcuts?.map((product, i) =>
                                    <tr key={product._id}>
                                        <th>{i + 1}</th>
                                        <td>{product.name}</td>
                                        <td> <span className='hidden md:block'>{product.postTime}</span></td>
                                        {
                                            product.bookingType === "Book Now" &&
                                            <td> <span className='hidden md:block'>Processing</span></td>
                                        }
                                        {
                                            product.bookingType !== "Book Now" &&
                                            <td> <span className='hidden md:block'>Booked</span></td>
                                        }
                                        <td>

                                            {
                                                !product.advertise && product.bookingType === "Book Now" &&
                                                <button className='btn btn-xs btn-primary' onClick={() => handleAdvertise(product)}>Advertise</button>
                                            }
                                            {
                                                product.advertise &&
                                                <button className='btn btn-xs btn-primary' disabled>Advertised</button>
                                            }
                                            {
                                                product.bookingType !== "Book Now" &&
                                                <button className='btn btn-xs btn-primary' disabled>Already Booked</button>
                                            }

                                        </td>
                                        <td>
                                            <button onClick={() => handledeletProduct(product._id)} className="btn btn-xs btn-primary">Delete</button>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProductList;