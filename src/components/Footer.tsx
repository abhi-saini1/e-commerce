'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin, FaSquareInstagram,  FaSquareXTwitter } from 'react-icons/fa6'
import { AccountLinks, mainLinks } from '../Links/Link'
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
     <footer className='w-full h-full py-5 bg-[#021414]'>
        <div className="main-container px-5">
          <div className="py-5 mb-5 border-b border-gray-300 border-opacity-20 flex flex-col lg:flex-row items-start lg:items-center justify-start gap-8 lg:gap-24 md:flex-row">
            <div className="flex flex-col w-[200px] lg:w-[200px]">
              <Image src='/whitelogo.png' className='w-[120px] h-[100px]' width={300} height={300} alt='logo' />
              <p className='text-[14px] text-white text-start mt-4'>
                Part of the Nike Family<br /> Lorem, ipsum dolor sit amet <br />consectetur adipisicing elit.
              </p>
              <div className="flex gap-5 text-white mt-5 text-2xl">
                <FaSquareXTwitter />
                <FaFacebookSquare />
                <Link href='https://www.instagram.com/abhi_saini1210/' target='_blank' rel='noopener noreferrer'>
                <FaSquareInstagram />
                </Link>
                <Link href='https://www.linkedin.com/in/abhishek-saini-292039310'
                target='_blank' rel='noopener noreferrer'>
                <FaLinkedin /></Link>
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
              <div className='flex flex-col items-center lg:items-start'>
                <h3 className='text-white text-[20px] font-semibold'>Learn</h3>
                <p className='text-white mt-2'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati odio minima laboriosam architecto, molestiae placeat esse maiores fuga amet iusto eius, ab vero magnam cum corrupti, nostrum asperiores odit eaque!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-center text-sm text-white flex flex-col gap-5 md:flex-row justify-center items-center">
            <span>All Rights Reserved Abhishek</span>
            <Image src={"/payment.png"} width={300} height={100} alt="accepted payments" />
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