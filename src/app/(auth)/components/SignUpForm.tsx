import Input from '@/components/Ui/Input'
import Image from 'next/image'
import React from 'react'

const SignUpForm = () => {
  return (
    <div className='main-container mt-8'>
        <div className='flex gap-10'>
            <div className=''>
                <Image src='/sign.jpg' className='w-[450px] h-[600px]' alt='' width={500} height={500}/>
            </div>

            
            <div className='m-5'>
                <div className='lg:text-4xl font-bold uppercase '>
                    <h1>Join the Nike</h1>
                </div>

                <form className=''>
                    <Input type='text' id='name' label='Name'/>
                </form>
            </div>
            
        </div>
        
    </div>
  )
}

export default SignUpForm