import Button from "@/components/Ui/Button";
import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const page = () => {
  return (
    <section className="py-20">
      <div className="main-container">
        <div className="lg:flex lg:items-center lg:justify-between bg-gray-300 rounded-lg w-full h-full p-5 flex-row items-center justify-center ">
          {/* Contact text */}
          <div className="w-[500px] m-5">
            <h3 className="text-4xl font-semibold">Contact Us</h3>
            <div className="m-1">
              <p className="text-[14px] font-medium">
                Not sure what your need? The team at <br></br>Squance Events
                will be happy to listen<br></br>to you and suggest event ideas
                you <br></br>hadn't considered.
              </p>
              <div className="my-4">
                <div className="flex items-center">
                  <CiMail className="text-[22px] me-2" />
                  <span className="text-[14px]">abhi@gmail.com</span>
                </div>
                <div className="flex items-center mt-2">
                  <IoCallOutline className="text-[22px] me-2" />
                  <span className="text-[14px]">+91 1254 1554 10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-[300px] mt-8  bg-white rounded-lg h-full m-5 p-3 lg:w-[600px] sm:w-[500px]">
                <div className="m-2">
                    <h4 className="text-2xl font-semibold">We'd love to hear from you!</h4>
                    <p className="text-[18px] font-medium">Let's get in touch</p>
                </div>
                
                <div className=''>
                    <form>
                        <div className="lg:flex items-center justify-between my-5 ">
                            <div className="flex flex-col">
                                <label className="text-[14px] font-medium">Full Name</label>
                                <input type="text" id="name" className="border border-gray-400 text-black w-[250px] h-10 rounded m-1 outline-none" />
                            </div>
                            <div className="flex flex-col">
                            <label className="text-[14px] font-medium">Company</label>
                            <input type="text" id="Company"   className="border border-gray-400 text-black w-[250px] h-10 rounded m-1 outline-none" />
                            </div>
                            
                        </div>
                        <div className="lg:flex items-center justify-between my-5 ">
                            <div className="flex flex-col">
                                <label className="text-[14px] font-medium">Email</label>
                                <input type="email" id="name" className="border border-gray-400 text-black w-[250px] h-10 rounded m-1 outline-none" />
                            </div>
                            <div className="flex flex-col">
                            <label className="text-[14px] font-medium">Phone No</label>
                            <input type="number" id="Company"   className="border border-gray-400 text-black w-[250px] h-10 rounded m-1 outline-none" />
                            </div>  
                        </div>
                        <div className="flex flex-col my-5">
                            <label className="text-[14px] font-medium">Message</label>
                            <textarea  className=" m-1 border border-gray-400 text-black rounded outline-none" placeholder="Type your message here" cols={10} rows={8}/>
                        </div>

                        <div>
                            <Button type="submit">Send Message</Button>
                        </div>
                    </form>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
