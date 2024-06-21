'use client';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { ProductType } from '../types/ProductTypes';
import Button from './Ui/Button';

interface Props {
    allProducts: ProductType[];
}

const Products: React.FC<Props> = ({ allProducts }) => {
    const [sortBy, setSortBy] = useState('');
    const [displayedProducts, setDisplayedProducts] = useState<ProductType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        // Initialize displayed products
        setDisplayedProducts(allProducts.slice(0, itemsPerPage));
    }, [allProducts]);

    // sorting products
    const sortProducts = (products: ProductType[]) => {
        if (sortBy === 'Price Low-High') {
            return products.slice().sort((a, b) => a.unit_amount - b.unit_amount);
        } else if (sortBy === 'Price High-Low') {
            return products.slice().sort((a, b) => b.unit_amount - a.unit_amount);
        } else {
            return products;
        }
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    }

    const handleLoadMore = () => {
        const nextPage = currentPage + 1;
        const start = nextPage * itemsPerPage - itemsPerPage;
        const end = start + itemsPerPage;
        setDisplayedProducts(prev => [...prev, ...allProducts.slice(start, end)]);
        setCurrentPage(nextPage);
    }

    const sortedProducts = sortProducts(displayedProducts);

    return (
        <>
            <section className='py-20 '>
                <div className='main-container'>
                    <div className='flex justify-between items-center mb-5'>
                        <span className='font-semibold'>showing 1-{displayedProducts.length} of {allProducts.length} items</span>
                        <div className='md:flex items-center justify-center'>
                            <label className='font-semibold me-2'>Sort By </label>
                            <select value={sortBy} onChange={handleSortChange} className='w-32 lg:w-44 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-100 focus:ring-0'>
                                <option>Select</option>
                                <option value='Price Low-High'>Price Low-High</option>
                                <option value='Price High-Low'>Price High-Low</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                        {sortedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    {displayedProducts.length < allProducts.length && (
                        <div className='flex justify-center mt-10'>
                            <Button onClick={handleLoadMore}>
                                Load More
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Products;