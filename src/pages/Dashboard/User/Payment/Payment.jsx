import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(import.meta.env.VITE_pg_pk);


const Payment = () => {
    return (
        <section className='px-5 my-5'>
            <h1 className='text-center text-2xl md:text-3xl font-medium'>Payment</h1>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </section>
    );
};

export default Payment;