import Image from "next/image";
import React from "react";
import Button from "../others/Button";
import { Fade } from "react-reveal";
const ContactForm = () => {
  return (
    <div className="relative">
      <div className=" ">
        <div className="absolute top-40 left-20">
            <Image src="/image/contact/form-bg-dots.png" width={200} height={400} alt="bg dots" />
        </div>
        <div className="bg-[url('/image/contact/form-bg.png')] bg-no-repeat opacity-10 min-h-[950px] w-full absolute top-0 flex items-center justify-center"></div>
      <Fade bottom>
      <div className="  max-w-[1296px] mx-3 md:mx-auto h-full z-10 relative">
          <h2 className="text-center text-4xl pt-20 md:text-[57px] font-extrabold mb-7">
            Send <span className="text-[#F112A2]">Message</span>
          </h2>
          <p className="text-[#444] text-lg px-2 text-center mb-8 md:mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="w-full md:w-[635px] mx-auto">
         <form action="">
         <input type="text" placeholder="Full Name" className="p-5 w-full rounded-md mb-4" />
            <input type="text" placeholder="Email" className="p-5 w-full rounded-md mb-4" />
            <input type="text" placeholder="Subject" className="p-5 w-full rounded-md mb-4" />
            <textarea rows='8'  placeholder="Type a Message" className="p-5 w-full rounded-md mb-4 md:mb-8" />
            <div className="flex justify-center md:mt-0 mt-4 mb-4 md:mb-20">

            <Button class="bg-[#F112A2] text-white" name="Contact Us" />
            </div>
         </form>
          </div>
        </div>
      </Fade>

      </div>
    </div>
)};

export default ContactForm;
