'use client';
import AddToCart from '@/app/(shoescart)/components/ui/AddToCart';
import FormatPrice from '@/types/FormatPrice';
import { ProductType } from '@/types/ProductTypes';
import Image from 'next/image';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FiHeart } from "react-icons/fi";

const ProductCard = ({product,}:{product:ProductType}) => {
  const [selectedSize,setSelectedSize] =useState('');
  const isSizedSelected = selectedSize !== ""
  const showToast = () =>{
    toast.error('Please choose a size first')
  }
  return (
    <div className='relative flex flex-col items-center '>
      <div className='relative group border duration-300 hover:scale-105 '>
        <Image src={product.image} alt={`image of ${product.name}`} className='cursor-pointer w-[250px] h-[300px]' height={300} width={300}/>
      
        <div className='absolute top-5 right-0 items-center justify-center gap-3'>
          <button className='mx-2  text-gray-900 p-2 rounded-md hover:text-red-500'>
          <FiHeart/>
          </button>
          
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-bold'>{product.name}</h2>
          <span>{FormatPrice(product.unit_amount)}</span>
        </div>
        <div className='flex  items-center justify-center gap-2'>
        <select value={selectedSize} onChange={(e)=> setSelectedSize(e.target.value)}
        className='my-2 p-2 border rounded-md'>
          <option value=''>Select Size</option>
          <option value='UK-6'>UK-6</option>
          <option value='UK-7'>Uk-7</option>
          <option value='UK-8'>UK-8</option>
          <option value='Uk-9'>UK-9</option>
          <option value='UK-10'>UK-10</option>
        </select>
        <AddToCart name={product.name}
        image={product.image}
        price={product.unit_amount}
        id={product.price_id!}
        sizeSelect={isSizedSelected}
        size={selectedSize}
        onClick={!isSizedSelected ? showToast : undefined}
        currency='INR'
        />
        </div>
      </div>
    </div>
  )
}

export default ProductCard