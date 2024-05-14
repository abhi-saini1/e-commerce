'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin, FaSquareInstagram,  FaSquareXTwitter } from 'react-icons/fa6'
import { mainLinks } from '../Links/Link'
import Link from 'next/link'

const Footer = () => {
  // scroll to top
  const [isvisible,setIsVisible] = useState(false);
  const listenScroll = () =>{
    const heightToHidden = 200;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }
  useEffect(()=>{
    window.addEventListener('scroll',listenScroll);
  })
  const ScrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
      
    })
  }
  return (
    <>
    <footer className='w-full py-5 bg-gray-900  mt-10'>
        <div className="main-container">
        <div className="py-5 mb-5 border-b border-gray-300 border-opacity-20 flex justify-between items-center max-md:flex-col max-md:gap-8">
          <div className="flex flex-1 gap-1 items-center text-xl font-medium">
          <Image src='/whitelogo.png' className='w-[100px]' width={300} height={300} alt='logo' />
          </div>

          <ul className="flex items-center justify-center gap-16 flex-1 text-white max-md:flex-col max-md:gap-5">
            {mainLinks.map((link, i) => (
              <Link key={i} href={link.route}>
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>

          <div className="flex gap-5 text-white flex-1 justify-end text-2xl">
            <FaSquareXTwitter />
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaLinkedin/>
          </div>
        </div>

        <div className="w-full text-center text-sm text-white flex flex-col gap-5 md:flex-row justify-center items-center">
          <span>All Rights Reserved Abhishek</span>

          <Image
            src={"/payment.png"}
            width={300}
            height={100}
            alt="accepted payments"
          />
        </div>
      </div>
    </footer>

    {/* scroll to top */}
              {isvisible && (
                <div className='flex items-center justify-center w-[50px] h-[50px] fixed right-0 bottom-0 z-50 cursor-pointer bg-[#FC8729] text-center border rounded-full text-white ' onClick={ScrollToTop}>
                  <FaArrowUp className='text-1xl'/>
                </div>
              )}
    </>
  )
}

export default Footer