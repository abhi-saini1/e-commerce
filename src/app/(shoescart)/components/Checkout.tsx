"use client";
import React, { useCallback, useEffect, useState } from "react";
import { loadStripe,StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { UseCheckoutStore } from "@/store/UseCheckOutStore";
import CheckoutForm from "./CheckoutForm";
import { CartEntry as ICartEntry } from "use-shopping-cart/core";
import toast from "react-hot-toast";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  );
  
  interface CheckoutProps {
    items: ICartEntry[];
    totalPrice: number | undefined;
  }
  
  const Checkout: React.FC<CheckoutProps> = ({ items, totalPrice }) => {
    const checkoutStore = UseCheckoutStore();
    const [clientSecret, setClientSecret] = useState('');
  
    const CreateOrder = useCallback (async () => {
      try {
        const response = await fetch('/api/create-shoes-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items,
            payment_intent_id: checkoutStore.paymentIntent,
            totalAmount: totalPrice,
          }),
        });
  
        if (response.status === 403) {
          toast.error('Please sign in');
          checkoutStore.setCheckout('cart');
          return;
        }
  
        if (!response.ok) {
          throw new Error('Network issues');
        }
  
        const data = await response.json();
  
        if (data && data.paymentIntent) {
          setClientSecret(data.paymentIntent.client_secret);
          checkoutStore.setPaymentIntent(data.paymentIntent.id);
        } else {
          console.log('Unexpected data structure', data);
        }
      } catch (error) {
        console.error(error);
        toast.error('Error creating order');
      }
    },[]);
  
    useEffect(() => {
      CreateOrder();
    }, [CreateOrder]);
  
    const options: StripeElementsOptions = {
      clientSecret,
      appearance: {
        theme: 'stripe',
        labels: 'floating',
      },
    };
  
    return (
      clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )
    );
  };
  
 export default Checkout;

