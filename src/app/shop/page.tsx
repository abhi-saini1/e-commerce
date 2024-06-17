
import React from 'react'
import { FetchProducts } from '../actions/GetStripeProduct'
import Products from '@/components/Products';
import PageHeader from '@/components/PageHeader';
const page = async () => {
    const products = await FetchProducts();
  return (
    <>
      <section className='py-20'>
      <PageHeader title={"Shop Page"} curpage="Shop"/>
      <Products allProducts={products}/>
      </section>
    </>
  )
}

export default page