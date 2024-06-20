
import React, {Suspense} from 'react'
import { FetchProducts } from '../actions/GetStripeProduct'
import Products from '@/components/Products';
import PageHeader from '@/components/PageHeader';
const page = async () => {
    const products = await FetchProducts();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className='py-20'>
      <PageHeader title={"Shop Page"} curpage="Shop"/>
      <Products allProducts={products}/>
      </section>
      </Suspense>
    </>
  )
}

export default page