import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imagehoskey = "f8abb6d450f3ebe88a068da1d4b26fa7";
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    // console.log(user)


    const handleAddaDoctor = data => {
        // console.log(data)
        const image = data.image[0];
        const formData = new FormData()
        formData.append("image", image)
        const url = `https://api.imgbb.com/1/upload?key=${imagehoskey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                if (imgdata.success) {
                    // console.log(imgdata.data.url)
                    const productData = {
                        categoryId: data.categoryId,
                        name: data.name,
                        Location: data.Location,
                        resalePrice: data.resalePrice,
                        originalPrice: data.originalPrice,
                        Owner: user.displayName,
                        postTime: Date().slice(0, 15),
                        img: imgdata.data.url,
                        email: data.email,
                        bookingType: "Book Now",
                        advertise: false

                    }
                    // console.log(productData.postTime)
                    fetch("https://sell-point-server-ffnado53p-galib6.vercel.app/addproduct", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem("s-token")}`
                        },
                        body: JSON.stringify(productData)
                    })
                        .then(res => res.json())
                        .then(res => {
                            console.log(res)
                            toast.success("Sucesfully product added")
                            // navigate("/dashboard/managedoctors")
                        })
                }
            })
    }




    return (
        <div >
            <h2 className='text-4xl text-center'>Add a Product</h2>
            <div className="divider divider-primary"></div>
            <div >
                <form onSubmit={handleSubmit(handleAddaDoctor)} className=' grid grid-cols-2 gap-2 lg:mx-20'>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Car Model</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Your Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full " defaultValue={user?.email} readOnly />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Your Location</span></label>
                        <input type="text" {...register("Location", {
                            required: true
                        })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input type="text" {...register("resalePrice", {
                            required: true
                        })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input type="text" {...register("originalPrice", {
                            required: true
                        })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Category</span></label>
                        <select
                            {...register("categoryId", {
                                required: "photo is Required"
                            })}
                            className="select select-bordered w-full " required>
                            <option selected disabled>Pick a Category</option>
                            <option value="01">SUV</option>
                            <option value="02" >Sports Car</option>
                            <option value="03" >Electric Car</option>
                        </select>
                    </div>
                    <div className="form-control w-full col-span-2">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "photo is Required"
                        })} className="input w-full " required />
                    </div>
                    <input className='btn btn-accent mt-4 ' value="Add A Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;