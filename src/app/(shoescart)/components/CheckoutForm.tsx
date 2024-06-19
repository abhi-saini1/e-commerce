'use client';
import React, { useEffect, useState } from 'react'
import { PaymentElement,useStripe,useElements } from '@stripe/react-stripe-js';
import { UseCheckoutStore } from '@/store/UseCheckOutStore';
import { useShoppingCart } from 'use-shopping-cart';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Button from '@/components/Ui/Button';
import FormatPrice from '@/types/FormatPrice';

const CheckoutForm = ({clientSecret} : {clientSecret: string}) => {
  const elements = useElements()
  const stripe = useStripe();
  const checkStore = UseCheckoutStore();
  const router = useRouter();
  const [isLoading,setIsLoading] = useState(false);
  const [orderId,setOrderId] = useState(null);
  const {clearCart,totalPrice} = useShoppingCart();

  useEffect(()=>{
    if(!stripe){
      return;
    }
    if(!clientSecret){
      return;
    }
  },[stripe,clientSecret])

  useEffect(()=>{
    async function fetchLatestOrderId(){
      try{
        const response = await fetch('/api/orderid')
        const data = await response.json();
        setOrderId(data.orderId)
      }catch(error){
        console.error(error)
      }
    }
    fetchLatestOrderId();
  },[])

  const handleSubmit = async (e:React.FormEvent) =>{
    e.preventDefault();
    if(!stripe || !elements){
      return;
    }
    setIsLoading(true)

    stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    })
    .then((result)=>{
      if(!result.error){
        checkStore.setCheckout('cart')

        fetch('/api/update-shoes-order-status',{
          method: 'POST',
          headers:{'Content-Type' : 'application/json'},
          body: JSON.stringify({
            orderId: orderId,
            status:  'payment successfull',
          }),
        });
      }
      setIsLoading(false);
      router.push('/');
      checkStore.setPaymentIntent('');
      toast.success('Payment Succesfully')
    });
  };
  return (
    <section className='py-20'>
      <div className='main-container'>
          <form className='text-gray-600'  onSubmit={handleSubmit}>
            <PaymentElement options={{layout:'tabs'}}/>
           <div className='flex flex-col items-end justify-center '>
           <h1 className='py-1 text-sm font-bold'>
              {totalPrice !== undefined
              ? FormatPrice(totalPrice): null}
            </h1>
            <Button disabled={isLoading || !stripe || !elements} onClick={()=> clearCart()} type='submit'>
              <span>{isLoading ? (
                <span>Processing...</span>
              ): (
                <span>Pay Now</span>
              )}</span>
            </Button>
           </div>
          </form>
      </div>
    </section>
  )
}

export default CheckoutForm