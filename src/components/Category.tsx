import Image from 'next/image'
import React from 'react'

const Category = () => {
  return (
    <section className='main-container py-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-5 lg:gap-2'>
            <div className='relative flex items-center justify-center cursor-pointer hover:scale-110 duration-300'>
              <Image src='/cat_1.jpg' className=' h-[400px] w-[350px] object-cover border rounded ' width={500} height={500} alt='cat-1'/>
                <div className='absolute'>
                    <h2 className='text-3xl text-center text-white font-bold'>Latest Shoes</h2>
                    <h4 className='text-1xl text-center text-white font-bold mt-2'>From &#8377; 1500.00</h4>
                </div>
            </div>
            <div className='relative flex items-center justify-center cursor-pointer hover:scale-110 duration-300'>
              <Image src='/cat_2.jpg' className='h-[400px] w-[350px] object-cover border rounded' width={500} height={500} alt='cat-1'/>
              <div className='absolute'>
                    <h2 className='text-3xl text-center text-white font-bold'>Gym Shoes</h2>
                    <h4 className='text-1xl text-center text-white font-bold mt-2'>From &#8377; 1800.00</h4>
                </div>
            </div>
            <div className='relative flex items-center justify-center cursor-pointer hover:scale-110 duration-300'>
              <Image src='/cat_3.jpg' className='hover:scale-110 duration-300  h-[400px] w-[350px] object-cover border rounded' width={500} height={500} alt='cat-1'/>
              <div className='absolute'>
                    <h2 className='text-3xl text-center text-white font-bold'>Lifestyle Shoes</h2>
                    <h4 className='text-1xl text-center text-white font-bold mt-2'>From &#8377; 2200.00</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category