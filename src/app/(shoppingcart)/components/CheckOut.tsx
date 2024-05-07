'use client';
import {loadStripe,StripeElementsOptions} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import { CartEntry as ICartEntry } from 'use-shopping-cart/core';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCheckOut } from '@/store/useCheckOut';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);


const CheckOut = ({
    items,
    totalPrice,
}: {
    totalPrice: number | undefined;
    items: ICartEntry[];
}) => {

    const router = useRouter();
    const checkoutStore = useCheckOut();
    const [clientSecret, setClientSecret] = useState('');

    useEffect(()=>{
        const createOrder = async () =>{
            try{
                const response = await fetch('/api/create-order',{
                    method: 'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        items: items,
                        payment_intent_id : checkoutStore.paymentIntent,
                        totalAmount: totalPrice,
                    }),
                });
                if(response.status === 403){
                    toast.error('Please Sign In');
                    router.push('/sign-in')
                    checkoutStore.setCheckout('cart')
                   return;
                }
                if(!response.ok){
                    throw new Error('network Issues');
                }

                const data = await response.json();            
                if(data && data.paymentIntent){
                    setClientSecret(data.paymentIntent.client_secret)
                    checkoutStore.setPaymentIntent(
                        data.paymentIntent.id
                    )
                }else{
                    console.log('unexpected data struture',data);
                }
            }catch(error){
                console.error(error)
            }
            
        }
        createOrder();
    },[]);

    const options: StripeElementsOptions ={
        clientSecret,
        appearance:{
            theme: 'stripe',
            labels: 'floating'
        }
    }
    return (
        clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckOutForm clientSecret={clientSecret}/>
            </Elements>
        )
    );
}




export default CheckOut;