import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Modal from '../../../Shared/Modal/Modal';
import ModalFAdvertise from '../../../Shared/ModalFAdvertise/ModalFAdvertise';
import ProductCard from '../../AllProducts/ProductCard.js/ProductCard';

const Advertised = () => {
    const [product, setProduct] = useState(null)
    const [button, setbutton] = useState()

    const { data: products = [], refetch } = useQuery({
        queryKey: ["prodcuts"],
        queryFn: async () => {
            const res = await fetch('https://sell-point-server-ffnado53p-galib6.vercel.app/advertised');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })


    console.log(products)
    if (products.length > 0) {
        return (
            <div>
                <div className=''>
                    <div>
                        <h2 className='text-4xl text-center font-bold mb-5'>Advertised Items</h2>
                        <h2 className='text-center lg:mx-60 mb-5'>Car advertising campaigns are some of the most inventive around. Yet, in 2020, like swathes of other industries, the automotive industry slammed on the brakes as engines stuttered, sales fell and production ground to a halt.</h2>
                    </div>
                    <div className="divider"></div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-6'>
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
                            <ModalFAdvertise
                                product={product}
                                setProduct={setProduct}
                                refetch={refetch}
                            >
                            </ModalFAdvertise>
                        }
                    </div>
                </div >
            </div >
        );
    }

    else {
        return <div></div>
    }

};

export default Advertised;