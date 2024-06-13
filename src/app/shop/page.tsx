
import React from 'react'
import { FetchProducts } from '../actions/GetStripeProduct'
import Products from '@/components/Products';
const page = async () => {
    const products = await FetchProducts();
  return (
    <>
       

        <Products allProducts={products}/>
    </>
  )
}

export default page