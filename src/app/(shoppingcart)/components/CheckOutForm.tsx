'use client'
import React from 'react';
import { PaymentElement,useStripe,useElements } from '@stripe/react-stripe-js';
import { useCheckOut } from '@/store/useCheckOut';
import { useShoppingCart } from 'use-shopping-cart';
import toast from 'react-hot-toast';
import Button from '@/components/Ui/Button';
import FormatPrice from '@/types/FormatPrice';
import { useRouter } from 'next/navigation';

const CheckOutForm = ({ClientSecret}: {ClientSecret: string}) => {
  return (
    <div>CheckOutForm</div>
  )
}

export default CheckOutForm