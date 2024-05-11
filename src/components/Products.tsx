'use client';
import React, { useState } from 'react'
import ProductCard from './ProductCard';
import { ProductType } from '@/types/ProductTypes';
const Products: React.FC<{allProducts: ProductType[];}> = ({allProducts}) => {
    const [sortBy,setSortBy] = useState('')


    // sorting products
    const sortProducts = () =>{
        if(sortBy === 'Price Low-High'){
            return allProducts.slice()
            .sort((a,b)=> a.unit_amount - b.unit_amount);
        }else if(sortBy === 'Price High-Low'){
            return allProducts
            .slice()
            .sort((a,b)=> b.unit_amount - a.unit_amount)
        }
        else{
            return allProducts
        }
    };
    const handleSortChange = (e:React.ChangeEvent<HTMLSelectElement>) =>{
        setSortBy(e.target.value);
    }
    const sortedProducts = sortProducts();
  return (
    <section className='relative py-20'>
        <div className='main-container'>
            <div className=''>
                <span className='font-semibold'>showing 1-12 of {allProducts.length} items</span>
            <div className=''>
                    <label>sort by:</label>
                    <select value={sortBy} onChange={handleSortChange} className='md:w-35 w-full mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-100 focus:ring-0'>
                        <option>Select</option>
                        <option value='Price Low-High'>Price Low-High</option>
                        <option value='Price High-Low'>Price High-Low</option>
                    </select>
                </div>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {sortProducts.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Products