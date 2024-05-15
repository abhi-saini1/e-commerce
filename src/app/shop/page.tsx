import React from 'react'
import { FetchProducts } from '../actions/GetStripeProduct'
import Products from '@/components/Products';
import SearchResult from '@/components/SearchResult';

const page = async () => {
    const products = await FetchProducts();
  return (
    <>
        <SearchResult/>
        <Products allProducts={products}/>
    </>
  )
}

export default page