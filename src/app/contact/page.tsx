'use client';
import Button from "@/components/Ui/Button";
import React, {  useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import {motion} from 'framer-motion'
import PageHeader from "@/components/PageHeader";

const Contact : React.FC = () => {
  const [sucess,setSucess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

 
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, formRef.current!, {
        publicKey: process.env.NEXT_PUBLIC_KEY
      });

      toast.success('Email sent successfully');
      formRef.current!.reset();
    } catch (error) {
      toast.error('Failed to send email');
    }
  }
  
   return (
    <>
    <motion.section className="py-20" initial={{opacity:0}} animate={{opacity: 1, transition:{
      delay: 0.5, duration: 0.4, ease: 'easeIn'
    }}}>
      <PageHeader title={"Contact Page"} curpage="Contact"/>
      <div className="main-container py-20">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between rounded-lg w-full h-full p-5 flex flex-col items-center justify-center "
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/bgcontact.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        >
          {/* Contact text */}
          <div className="w-[500px] m-5 lg:flex lg:items-start  flex flex-col items-center  justify-center"
          >
            <h3 className="text-4xl font-bold text-white">Contact Us</h3>
            <div className="m-1">
              <p className="text-[14px] font-semibold lg:text-start text-center text-white
              ">
                Not sure what your need? The team at <br></br>Squance Events
                will be happy to listen<br></br>to you and suggest event ideas
                you <br></br>hadn't considered.
              </p>
              <div className="my-4 flex items-center justify-center gap-3">
                <div className="flex items-center justify-center">
                  <CiMail className="text-[22px] me-2 text-white " />
                  <span className="text-[14px] font-semibold  text-white">abhi@gmail.com</span>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <IoCallOutline className="text-[22px] me-2 text-white" />
                  <span className="text-[14px] font-semibold text-white">+91 1254 1554 10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-[300px] mt-8  bg-white rounded-lg h-full m-5 p-3 lg:w-[600px] sm:w-[500px]"
          >
                <div className="m-2">
                    <h4 className="text-2xl font-semibold">We'd love to hear from you!</h4>
                    <p className="text-[18px] font-medium">Let's get in touch</p>
                </div>
                
                <div className=''>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className="lg:flex items-center justify-between my-5 ">
                            <div className="flex flex-col">
                                <label className="text-[14px] font-medium">Full Name</label>
                                <input type="text" id="name" name="user_name" className="border border-gray-400 text-black w-[250px] h-10 rounded m-1 outline-none" required />
                            </div>
                            <div className="flex flex-col">
                            <label className="text-[14px] font-medium">Company</label>
                            <input type="text" id="company" name="user_company"  className="border border-gray-400 text-black w-[250px] h-10 rounded m-1 outline-none" required />
                            </div>
                            
                        </div>
                        <div className="lg:flex items-center justify-between my-5 ">
                            <div className="flex flex-col">
                                <label className="text-[14px] font-medium">Email</label>
                                <input type="email" id="email" name="user_email" className="border border-gray-400 text-black w-[250px] h-10 rounded m-1 outline-none" required />
                            </div>
                            <div className="flex flex-col">
                            <label className="text-[14px] font-medium">Phone No</label>
                            <input type="number" id="phone" name="user_phoneno"   className="border border-gray-400 text-black w-[250px] h-10 rounded m-1 outline-none" required />
                            </div>  
                        </div>
                        <div className="flex flex-col my-5">
                            <label className="text-[14px] font-medium">Message</label>
                            <textarea  className=" m-1 border border-gray-400 text-black rounded outline-none" name="user_message" id="message" required placeholder="Type your message here" cols={10} rows={8}/>
                        </div>

                        <div>
                            <Button type="submit">Send Message</Button>
                        </div>
                    </form>
                </div>
          </div>
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default Contact;
