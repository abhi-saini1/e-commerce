'use client'
import {FetchProducts} from '@/app/actions/GetStripeProduct';
import { ProductType } from '@/types/ProductTypes'
import React, { useEffect, useState } from 'react'
import Products from './Products';

const SearchResult:React.FC = () => {
    const [products,setProducts] = useState<ProductType[]>([]);
    const [searchQuery,setSearchQuery] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null)

    useEffect(()=>{
        const fetchProducts = async()=>{
            setLoading(true);

            try{
                const fetchdata: ProductType[] = await FetchProducts();
                setProducts(fetchdata)
            }catch(error: any){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts()
    },[])

    const filteredProducts = products.filter((product)=>{
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    });
  return (
    <div className='py-20'>
        <input type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='search'
        className='mb-4 border p-3 border-gray-300 rounded'/>
        {loading && <p>loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <Products allProducts={filteredProducts}/>}
    </div>
  )
}

export default SearchResult