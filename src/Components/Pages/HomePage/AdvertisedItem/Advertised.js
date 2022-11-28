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
            const res = await fetch('http://localhost:5000/advertised');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })


    console.log(products)
    return (
        <div>
            <div className=''>
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
};

export default Advertised;