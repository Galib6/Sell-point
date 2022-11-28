import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Modal from '../../Shared/Modal/Modal';
import ProductCard from './ProductCard.js/ProductCard';

const AllProducts = () => {
    const products = useLoaderData()
    const [product, setProduct] = useState(null)
    const [button, setbutton] = useState()

    console.log(products)
    return (
        <div className='lg:mx-16 '>
            <h4 className='text-3xl text-center'>Products</h4>
            <div className="divider"></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-6'>
                {


                    products.map(product =>
                        <ProductCard
                            key={product._id}
                            product={product}
                            setProduct={setProduct}
                            setbutton={setbutton}
                            button={button}
                        ></ProductCard>
                    )
                }
                {
                    product &&
                    <Modal
                        product={product}
                        setProduct={setProduct}
                    ></Modal>
                }
            </div>
            {/* Put this part before </body> tag */}
            < div className="divider" ></div>
            <div className='flex justify-center my-4'>
                <button className='btn btn-primary'><Link>Add a Product</Link></button>
            </div>
        </div >
    );
};

export default AllProducts;