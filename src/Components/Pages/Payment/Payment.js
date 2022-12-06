import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckOutform from './CheckOutform';

const stripePromise = loadStripe('pk_test_51M7c2bCrl3dQ57EJh6p0K0ILccXLLoZic6xAgaQnZ7ZrsQKLI2WbssYPxb0rR44ixMD9YIfKS224Axx1rhaR51Ug00qVpJJN6x');

const Payment = () => {
    const data = useLoaderData();
    const navigation = useNavigation();
    console.log(data)
    const { productname, price, time, slot } = data

    return (
        <div>
            <h3 className='text-3xl'>Payment for {data.productname}</h3>
            <div className="divider"></div>
            <p className='text-xl'>Please pay: <strong>${price}</strong> for the order on {time}</p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutform
                        booking={data}
                    ></CheckOutform>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;