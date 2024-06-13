'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
const Category = () => {
  return (
    <section className='main-container py-20'>
      <div className="flex justify-center items-center">
        <h1 className="text-[32px] uppercase font-extrabold mb-5 ">Top Category</h1>
      </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-5 lg:gap-2'>
            <motion.div className='relative flex items-center justify-center cursor-pointer hover:scale-110 duration-300'
            initial={{opacity:0, scale:0.8}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.5,delay:0.1}}>
              <Image src='/cat_1.jpg' className=' h-[400px] w-[350px] object-cover border rounded ' width={500} height={500} alt='cat-1'/>
                <div className='absolute'>
                    <h2 className='text-3xl text-center text-white font-bold'>Latest Shoes</h2>
                    <h4 className='text-1xl text-center text-white font-bold mt-2'>From &#8377; 1500.00</h4>
                </div>
            </motion.div>
            <motion.div className='relative flex items-center justify-center cursor-pointer hover:scale-110 duration-300'
            initial={{opacity:0, scale:0.8}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.5,delay:0.3}}>
              <Image src='/cat_2.jpg' className='h-[400px] w-[350px] object-cover border rounded' width={500} height={500} alt='cat-1'/>
              <div className='absolute'>
                    <h2 className='text-3xl text-center text-white font-bold'>Gym Shoes</h2>
                    <h4 className='text-1xl text-center text-white font-bold mt-2'>From &#8377; 1800.00</h4>
                </div>
            </motion.div>
            <motion.div className='relative flex items-center justify-center cursor-pointer hover:scale-110 duration-300'
            initial={{opacity:0, scale:0.8}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.5,delay:0.5}}>
              <Image src='/cat_3.jpg' className='hover:scale-110 duration-300  h-[400px] w-[350px] object-cover border rounded' width={500} height={500} alt='cat-1'/>
              <div className='absolute'>
                    <h2 className='text-3xl text-center text-white font-bold'>Lifestyle Shoes</h2>
                    <h4 className='text-1xl text-center text-white font-bold mt-2'>From &#8377; 2200.00</h4>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Category