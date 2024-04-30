'use client'
import Button from '@/components/Ui/Button'
import Input from '@/components/Ui/Input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignInForm = () => {
  return (
    <div className='main-container mt-8'>
        <div className='flex gap-32'>
            <div className=''>
                <Image src='/form.jpg' className='m-5 w-full h-[550px] rounded-md' alt='' width={800} height={800}/>
            </div>

            
            <div className='mt-10 m-5'>
                <div className='lg:text-4xl font-bold uppercase '>
                    <h1>Join the Nike</h1>
                </div>

                <form className='mt-4 m-4'>
                    <div className='mt-2'>
                        <Input type='email' id='email' label='Email'/>
                    </div>
                    <div className='mt-2'>
                        <Input type='password' id='password' label='Password'/>
                    </div>
                    <div className='mt-2'>
                        <Button type='submit'>Login</Button>
                    </div>
                    <div className='mt-5 flex items-center justify-center'>
                        <span className='text-[11px]'>Or Connect With</span>
                    </div>
                    <div className='flex gap-6 items-center justify-center mt-5'>
                        <Link href={''}>
                            <Image src='/google.png' className='w-[25px] h-auto' width={300} height={300} alt=''/>
                        </Link>
                        <Link href={''}>
                            <Image src='/apple-logo.png' className='w-[25px] h-auto' width={300} height={300} alt=''/>
                        </Link>
                        <Link href={''}>
                            <Image src='/facebook.png' className='w-[25px] h-auto' width={300} height={300} alt=''/>
                        </Link>
                    </div>
                    <div className='mt-5 flex items-center justify-center'>
                        <p className='text-[11px]'>Dont have an account? Create one 
                        <Link href='/signup'>
                        <span className='text-[#3479AF] text-[12px] cursor-pointer '> Sign Up </span></Link> &#8594;</p>
                    </div>
                </form>
            </div>
            
        </div>
        
    </div>
  )
}

export default SignInForm