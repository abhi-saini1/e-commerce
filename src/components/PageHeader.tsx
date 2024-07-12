import Link from 'next/link'
import React from 'react'

interface PageHeaderProps {
    title: string,
    curpage: string,
}
const PageHeader:React.FC<PageHeaderProps> = ({title,curpage}) => {
  return (
    <div className='h-[400px] py-40 w-full' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/bg-header.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='max-w-7xl mx-auto flex flex-col items-center justify-center'>
            <h2 className='xl:text-7xl lg:text-7xl md:text-5xl sm:text-5xl text-4xl text-white font-bold mb-2'>{title}</h2>
            <nav>
                <ol className='flex space-x-2 text-sm font-semibold text-white'>
                    <li className=''>
                        <Link className='hover:text-gray-900 font-semibold transition duration-300 ease-in-out' href='/'>Home</Link>
                    </li>
                    <li className='before:content-["/"] before:mx-2 text-gray-300'>
                        <Link href=''>{curpage}</Link>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
  )
}

export default PageHeader