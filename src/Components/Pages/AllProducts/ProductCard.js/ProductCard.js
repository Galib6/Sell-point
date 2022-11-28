import React from 'react';
import Modal from '../../../Shared/Modal/Modal';
import { GoReport } from "react-icons/go";
import toast from 'react-hot-toast';

const ProductCard = ({ product, setProduct }) => {

    const handleReportproduct = (product) => {

        const productData = {
            categoryId: product.categoryId,
            ind: product._id,
            name: product.name,
            Location: product.Location,
            resalePrice: product.resalePrice,
            originalPrice: product.originalPrice,
            Owner: product.Owner,
            email: product.email,
        }
        fetch("http://localhost:5000/reportedtoadmin", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                toast.success("Sucesfully Reported to Admin")
                // navigate("/dashboard/managedoctors")
            })

    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-full" key={product._id}>
                <figure><img src={product.img} alt="" /></figure>
                <div className="card-body ">
                    <div className='grid grid-cols-6'>
                        <h2 className="card-title col-span-5">Car Model: <span className='font-bold'>{product.name}</span></h2>
                        <button className='btn btn-outline btn-accent border-none btn-sm' title='Report this product to admin' onClick={() => handleReportproduct(product)}><GoReport /></button>
                    </div>
                    <h4 className='text-xl font-bold'>Asking Price: ${product.resalePrice}k</h4>
                    <div>
                        <p>Original Price: ${product.originalPrice}k</p>
                        <p>Posted on: {product.postTime}</p>
                        <p>Location: {product.Location}</p>
                    </div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Owner: {product.Owner}</div>

                        {
                            product.bookingType === "Book Now" &&
                            <label
                                desabled={product.bookingType === "booked"}
                                htmlFor="productModal" className="btn btn-primary btn-sm"
                                onClick={() => setProduct(product)}
                            >{product.bookingType}</label>
                        }
                        {
                            product.bookingType !== "Book Now" &&
                            <button className='btn btn-outline btn-sm' disabled>{product.bookingType}</button>
                        }
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ProductCard;