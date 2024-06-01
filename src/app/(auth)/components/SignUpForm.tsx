'use client'
import Button from '@/components/Ui/Button'
import Input from '@/components/Ui/Input'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { createUser } from '../actions/auth'
import { useRouter } from 'next/navigation'

const SignUpForm = () => {
    const [isSubmitting,setIsSubmitting] = useState(false);

    const session = useSession();
    const ref = useRef<HTMLFormElement>(null)
    const router = useRouter()
  
    useEffect(()=>{
        if(session.status === 'authenticated'){
          toast.success('You are already signed in')
          router.push('/')
        }
      },[session.status, router])
    
      const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true)
        const result  = await createUser(formData)
        if(result?.existingUser){
          toast.error(result.existingUser)
        }else{
          toast.success('Welcome! Please Sign In')
          ref.current?.reset();
          router.push('/signin')
        }
        setIsSubmitting(false)
      }

    //   google Login
    // const googleLogin = async () => {
    //     await signIn('google',{
    //         callbackUrl:'/',
    //         redirect: true
    //     })
    // }
  return (
    <div className='main-container py-20'>
        <div className='flex gap-32'>
            <div className=''>
                <Image src='/form.jpg' className='m-5 w-full h-[550px] rounded-md' alt='' width={800} height={800}/>
            </div>

            
            <div className='mt-10 m-5'>
                <div className='lg:text-4xl font-bold uppercase '>
                    <h1>Join the Nike</h1>
                </div>

                <form className='mt-4 m-4'  ref={ref} onSubmit={(e)=> {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget)
                        handleSubmit(formData);
                         }}>
                    <div className=''>
                            <Input disabled={isSubmitting} type='text' id='name' label='Name'/>
                    </div>
                    <div className='mt-2'>
                        <Input disabled={isSubmitting} type='email' id='email' label='Email'/>
                    </div>
                    <div className='mt-2'>
                        <Input disabled={isSubmitting} type='password' id='password' label='Password'/>
                    </div>
                    <div className='mt-1 flex gap-1'>
                        <input type='checkbox' id='checkbox'/>
                        <span className='text-[11px] mt-3'>I've read and agree with terms of service and <br></br>our Privacy policy</span>
                    </div>
                    <div className='mt-2'>
                        <Button type='submit'>Create an Account</Button>
                    </div>
                    <div className='mt-5 flex items-center justify-center'>
                        <span className='text-[11px]'>Or Connect With</span>
                    </div>
                    <div className='flex gap-6 items-center justify-center mt-5'>
                        <Link href='#' onClick={()=> signIn('google')}>
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
                        <p className='text-[11px]'>Already Already have an account? 
                        <Link href='/signin'>
                        <span className='text-[#3479AF] text-[12px] cursor-pointer'>Sign In</span></Link> &#8594;</p>
                    </div>
                </form>
            </div>
            
        </div>
        
    </div>
  )
}

export default SignUpForm