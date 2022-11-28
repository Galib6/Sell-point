import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutform = ({ booking }) => {
    const [cardError, setCarderror] = useState("")
    const [success, setSuccess] = useState("")
    const [processing, setProcessing] = useState(false)
    const [transectionId, setTransectonId] = useState("")

    const stripe = useStripe();
    const elements = useElements();
    const { price, email, patient, _id } = booking;
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCarderror(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCarderror("")
        }
        setSuccess("")
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCarderror(confirmError.message);

            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log("card-info", card)
            // store data
            const payment = {
                price,
                transectionId: paymentIntent.id,
                email,
                productId: _id
            }
            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    // authorization: `bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess("Congratulation! Your payment completed")
                        setTransectonId(paymentIntent.id)
                    }
                })

        }
        // console.log("paymentIntent", paymentIntent)
        setProcessing(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-error mt-2' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success &&
                <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transectionId: <span className='font-bold'> {transectionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckOutform;