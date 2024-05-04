'use client';
import React from 'react'
import FormatPrice from '@/types/FormatPrice';
import Button from '@/components/Ui/Button';
import { useShoppingCart } from 'use-shopping-cart';
import Image from 'next/image';
import { Checkout } from '@/store/Checkout';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Cart = () => {
  const { cartDetails, removeItem, totalPrice, decrementItem, incrementItem } = useShoppingCart();
  const CheckoutStore = Checkout();
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
        {items.length < 1 && CheckoutStore.onCheckout === 'cart' ? (
          <div className='h-screen flex items-center justify-center'>
            <span className='text-2xl uppercase mb-20'>
              Your cart is empty!
            </span>
          </div>
        ) : null}

        <div className='bg-gray-300'>
          <div className='text-2xl font-bold flex items-center justify-center py-4'>
            CheckOut
          </div>
          {CheckoutStore.onCheckout === 'cart' && (
            <ul>
              {items.map((item) => (
                <li key={item.id} className='flex py-6 px-64'>
                  <div key={item.id} className='h-36 w-36 flex items-center justify-center my-4'>
                    <Image src={item.image as string}
                      alt={`image of ${item.name}`}
                      className='w-[250px]'
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                    <h3 className='font-semibold text-md px-32 my-2'>Quanity</h3>

                    <div className='flex items-center justify-center gap-3'>
                      <div className='text-[22px]'>
                        <button onClick={() => incrementItem(item.id, {
                          count: 1,
                        })}>
                          <CiCirclePlus />
                        </button>
                      </div>
                      <div className='w-10 h-10 bg-white flex items-center justify-center'>
                        {item.quantity}
                      </div>
                      <div className='text-[22px]'>
                        <button onClick={() => decrementItem(item.id, {
                          count: 1
                        })}>
                          <CiCircleMinus />
                        </button>
                      </div>
                    </div>

                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart