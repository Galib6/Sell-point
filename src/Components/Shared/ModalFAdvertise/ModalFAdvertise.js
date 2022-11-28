import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const ModalFAdvertise = ({ product, setProduct, refetch }) => {

    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)
    console.log(product)
    const navigate = useNavigate()

    const handleBookNow = data => {
        console.log(data);
        const date = {
            time: Date().slice(0, 15),
            price: product.resalePrice * 10
        }
        const updatedData = Object.assign(data, date)
        console.log(updatedData)

        fetch(`https://sell-point-server.vercel.app/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                // setCreatedUserEmail(email);
                console.log(data)
                console.log(product._id)
                fetch(`https://sell-point-server.vercel.app/bookings/${product?.ind}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            setProduct(null)
                            toast.success("Successfully booked.")
                            fetch(`https://sell-point-server.vercel.app/changestatus/${product?.ind}`)
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    if (data.modifiedCount > 0) {
                                        toast.success("Sucesfully status changed.")
                                        fetch(`https://sell-point-server.vercel.app/advertised/${product._id}`, {
                                            method: 'DELETE',
                                            // headers: {
                                            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                                            // }
                                        })
                                            .then(res => res.json())
                                            .then(data => {
                                                if (data.deletedCount > 0) {
                                                    toast.success(`Removed from advertised successfully`)

                                                }
                                            })
                                    }
                                })



                        }
                    })
            })


    }
    return (
        <div>
            <input type="checkbox" id="productModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="productModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="checkbox" id="productModal" className="modal-toggle" />
                    <div className=''>
                        <h2 className='text-2xl font-bold text-center'>Book Now</h2>
                        <form onSubmit={handleSubmit(handleBookNow)}>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">User Name</span></label>
                                <input type="text"
                                    {...register("username", {

                                    })}
                                    className="input input-bordered w-full " defaultValue={user?.displayName} readOnly />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Email Address</span></label>
                                <input type="text"
                                    {...register("emailadress", {

                                    })}
                                    className="input input-bordered w-full " defaultValue={user?.email} readOnly />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Product Name</span></label>
                                <input type="text"
                                    {...register("productname", {

                                    })}
                                    className="input input-bordered w-full " defaultValue={product?.name} readOnly />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Product Price</span></label>
                                <input type="text"
                                    {...register("productprice", {
                                        required: "Product price is required"
                                    })}
                                    className="input input-bordered w-full " defaultValue={product?.resalePrice} />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Your Phone Number</span></label>
                                <input type="text"
                                    {...register("phone", {

                                    })}
                                    className="input input-bordered w-full " required />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Location where you want meet buyer</span></label>
                                <input type="text"
                                    {...register("location", {

                                    })}
                                    className="input input-bordered w-full " required />
                            </div>
                            <input className='btn btn-accent w-full mt-3' value="Book now" type="submit" method="get" />
                            {/* ____________________modal end_________________ */}
                        </form>
                    </div>
                </div>
            </div>
            {/* _____________________________________ */}
        </div>

    );
};

export default ModalFAdvertise;