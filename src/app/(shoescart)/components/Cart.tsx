'use client';
import React from 'react'
import FormatPrice from '@/src/types/FormatPrice';
import Button from '@/src/components/Ui/Button';
import { useShoppingCart } from 'use-shopping-cart';
import Image from 'next/image';
import { UseCheckoutStore } from '@/src/store/UseCheckOutStore';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Checkout from './Checkout';


const Cart = () => {
  const { cartDetails,  totalPrice, decrementItem, incrementItem } = useShoppingCart();
  const CheckoutStore = UseCheckoutStore();
  const items = Object.values(cartDetails ?? {})
  console.log(items);
  return (
    <div className='py-20'>
      <div className="main-container">
        {CheckoutStore.onCheckout === 'checkout' && (
          <button className="text-sm font-bold mb-5" onClick={() => CheckoutStore.setCheckout('cart')}>
            &#8592; Back to cart
          </button>
        )}
        {items.length < 1 && CheckoutStore.onCheckout === 'cart' ?(
          <div className='h-screen flex items-center justify-center'>
            <span className='text-2xl uppercase mb-20'>
              Your cart is empty!
            </span>
          </div>
        ) : null}

        <div className='bg-gray-300 rounded-md'>
          {/* <div className='text-2xl font-bold flex items-center justify-center py-4'>
            CheckOut
          </div> */}
          {CheckoutStore.onCheckout === 'cart' && (
            <ul>
              {items.map((item) => (
                <li key={item.id} className='lg:flex md:flex sm:flex items-center justify-center py-6 lg:px-64 px-5'>
                  <div key={item.id} className='flex items-center justify-center my-4'>
                    <Image src={item.image as string}
                      alt={`image of ${item.name}`}
                      className='w-[200px] lg:w-[300px] md:w-[250px]'
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className='flex flex-col  lg:ml-32 sm:ml-10 items-center  justify-center'>
                    <h3 className='font-semibold text-md  my-2'>Quanity</h3>

                    <div className='flex items-center justify-center gap-3'>
                      <div className='text-[22px]'>
                        <button onClick={() => decrementItem(item.id, {
                          count: 1,
                        })}>
                          <CiCircleMinus />
                        </button>
                      </div>
                      <div className='w-10 h-10 bg-white flex items-center justify-center'>
                        {item.quantity}
                      </div>
                      <div className='text-[22px]'>
                        <button onClick={() => incrementItem(item.id, {
                          count: 1
                        })}>
                          <CiCirclePlus />
                        </button>
                      </div>
                    </div>

                  </div>

                  <div className='flex flex-col  items-center justify-center'>
                    <h3 className='font-semibold text-md px-32 my-2'>Details</h3>
                      
                      <div className=''>
                        {item.name}

                        <div className='text-center font-semibold'>
                          {FormatPrice(item.price)}
                        </div>
                      </div>

                  </div>
                </li>
              ))}

              {items.length > 0 && (
                <div className='flex items-center justify-end gap-10 p-3'>

                <div className='flex gap-1'>
                  <p className='text-[16px] font-bold'>Total:</p>
                  <p className='tex-[18px] font-semibold'>{totalPrice !== undefined ? FormatPrice(totalPrice) : null}</p>
                </div>
                  <div className=''>
                    <Button onClick={(e)=> {e.preventDefault(); CheckoutStore.setCheckout('checkout')}} >
                      Procced To Checkout
                    </Button>
                  </div>
                </div>
              )} 
            </ul>
          )}
          {CheckoutStore.onCheckout === 'checkout' && (
            <Checkout items={items} totalPrice={totalPrice}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart