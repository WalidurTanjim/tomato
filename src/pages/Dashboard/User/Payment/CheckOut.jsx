import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card == null){
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error){
            console.log('[error]', error);
        }else{
            console.log('[PaymentMethod]', paymentMethod);
        }
    }

    return (
        <form onSubmit={handleSubmit}className='mt-10'>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4'
                            },
                        },
                        invalid: {
                            color: '#9e2146'
                        }
                    }
                }}
            ></CardElement>
            <button type='submit' className='border rounded-md py-1 px-5 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-600 mt-3'>Pay</button>
        </form>
    );
};

export default CheckOut;