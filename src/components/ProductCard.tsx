'use client';
import { ProductType } from '@/types/ProductTypes';
import Image from 'next/image';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ProductCard = ({product,}:{product:ProductType}) => {
  const [selectedSize,setSelectedSize] =useState('');
  const isSizedSelected = selectedSize !== ""
  const showToast = () =>{
    toast.error('Please choose a size first')
  }
  return (
    <div className='relative flex flex-col'>
      <div className=''>
        <Image src={product.image} alt='' height={300} width={300}/>
      </div>
    </div>
  )
}

export default ProductCard