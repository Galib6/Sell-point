import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';

const MyProductList = () => {
    const { user, loggedUser } = useContext(AuthContext)

    const { data: prodcuts = [], refetch } = useQuery({
        queryKey: ["prodcuts"],
        queryFn: async () => {
            const res = await fetch(`https://sell-point-server.vercel.app/product?email=${user?.email}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    const handleAdvertise = (product) => {
        // console.log(id)
        const updatedProduct = {
            categoryId: product.categoryId,
            name: product.name,
            Location: product.Location,
            resalePrice: product.resalePrice,
            originalPrice: product.originalPrice,
            Owner: product.Owner,
            postTime: product.postTime,
            email: product.email,
            img: product.img,
            varified: "",
            bookingType: product.bookingType,
            advertise: product.advertise,
            ind: product._id
        }
        console.log(updatedProduct)

        fetch('https://sell-point-server.vercel.app/advertise', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                fetch(`https://sell-point-server.vercel.app/advertise/${product?._id}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            toast.success("Sucesfully Avertised.")
                            refetch()
                        }
                    })
            })
    }


    return (
        <div>
            <div>
                <h2 className='text-3xl mb-2'>All prodcuts</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Advertise</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                prodcuts?.map((product, i) =>
                                    <tr key={product._id}>
                                        <th>{i + 1}</th>
                                        <td>{product.name}</td>
                                        <td>{product.postTime}</td>
                                        {
                                            product.bookingType === "Book Now" &&
                                            <td>Processing</td>
                                        }
                                        {
                                            product.bookingType !== "Book Now" &&
                                            <td>Booked</td>
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