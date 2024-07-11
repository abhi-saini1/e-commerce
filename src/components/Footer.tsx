'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6'
import { AccountLinks, mainLinks } from '../Links/Link'
import Link from 'next/link'

const Footer = () => {
  // State for scroll-to-top button visibility
  const [isVisible, setIsVisible] = useState(false);

  const listenScroll = () => {
    const heightToHidden = 200;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return () => window.removeEventListener('scroll', listenScroll); // Cleanup listener on component unmount
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <footer className='w-full py-5 bg-[#021414]'>
        <div className="main-container px-4 md:px-8 lg:px-16">
          <div className="flex flex-col xl:flex-row py-5 pb-5 border-b border-gray-300 items-center justify-center gap-8 lg:gap-24">
            <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
              <Image src='/whitelogo.png' className='w-[120px] h-[100px]' width={120} height={100} alt='logo' />
              <p className='text-[14px] text-white mt-1'>
                Part of the Nike Family
              </p>
              <div className="flex gap-5 text-white mt-5 text-2xl">
                <Link href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                  <FaSquareXTwitter />
                </Link>
                <Link href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                  <FaFacebookSquare />
                </Link>
                <Link href='https://www.instagram.com/abhi_saini1210/' target='_blank' rel='noopener noreferrer'>
                  <FaSquareInstagram />
                </Link>
                <Link href='https://www.linkedin.com/in/abhishek-saini-292039310' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
              <div className='flex flex-col items-center lg:items-start'>
                <h3 className='text-white text-[20px] font-semibold'>Pages</h3>
                <ul className="mt-2">
                  {mainLinks.map((link, i) => (
                    <li key={i} className='text-[14px] text-white mt-4'>
                      <Link href={link.route}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-col items-center lg:items-start'>
                <h3 className='text-white text-[20px] font-semibold'>Account</h3>
                <ul className="mt-2">
                  {AccountLinks.map((link, i) => (
                    <li key={i} className='text-[14px] text-white mt-4'>
                      <Link href={link.route}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-col items-center  lg:items-start xl:items-start'>
                <h3 className='text-white text-[20px] font-semibold'>Learn</h3>
                <p className='text-gray-400 xl:text-start lg:text-start text-center mt-2 text-[14px]'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati odio minima laboriosam architecto.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-center text-sm text-white flex flex-col md:flex-row justify-center items-center gap-5">
            <span>All Rights Reserved Abhishek</span>
            <Image src="/payment.png" width={300} height={100} alt="accepted payments" />
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {isVisible && (
        <div className='flex items-center justify-center w-[50px] h-[50px] fixed right-4 bottom-4 z-50 cursor-pointer bg-[#FC8729] text-center border rounded-full text-white' onClick={ScrollToTop}>
          <FaArrowUp className='text-xl' />
        </div>
      )}
    </>
  )
}

export default Footer
