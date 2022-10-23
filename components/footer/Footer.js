import Image from "next/image";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Social from "../others/Social";
const Footer = () => {
  return (
    <div className="relative  bg-[#0D0635]">
       
      <div className=" max-w-[1296px]  mx-auto pb-10 min-h-[350px]">
        <div className="absolute ">
          <Image
            src="/image/footer/dots1.png"
            height={200}
            width={200}
            alt="footer dots"
          />
        </div>
        <div className="grid place-content-center px-3 xl:px-0  w-full">
          <div className="w-auto lg:w-[800px] relative flex flex-col justify-center items-center bg-white rounded-md mt-8 md:mt-28 py-8 md:py-16 mx-2 md:mx-auto">
           <div className="absolute rounded-md top-0 left-0  hidden md:block">
            <Image src='/image/footer/footer-shape.png' className="rounded-md" width={200} height={228} alt="footer shape" />
           </div>
           <div className="absolute rounded-md top-3 right-2">
            <Image src='/image/footer/dots2.png' className="rounded-md" width={110} height={180} alt="footer shape" />
           </div>
            <h2 className="text-xl md:text-3xl font-bold mx-2 text-center mb-4 text-[#222]">
              SUBSCRIBE TO <span className="text-[#5A00CC]">NEWSLETTER</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-2 px-2 md:px-0 max-w-md mx-auto" >

            <input type="text" className="border-b py-1 w-auto md:w-[250px] border-black focus:outline-none focus:border-b foucs:border-black" placeholder="Email" />
            <button className="py-2 md:py-3 px-3 md:px-8 bg-[#F112A2] text-white">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="flex mx-3 md:mx-0 flex-col md:flex-row justify-between  mt-5 md:mt-28">
          <div>
          <Image src='/icon.png' height={36} width={110} alt="logo" />
          </div>
          <div>
            <ul className="flex flex-col  md:flex-row gap-2 md:gap-7 items-start mb-4 md:mb-0 md:items-center text-lg text-[#B3B3B3]">
              <li>Home</li>
              <GoPrimitiveDot  className="hidden md:block" />
              <li>About</li>
              <GoPrimitiveDot className="hidden md:block" />
              <li>Schedule</li>
              <GoPrimitiveDot className="hidden md:block" />
              <li>Page</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row  justify-between mt-7 items-center">
          <p className="text-base mb-4 md:mb-0 text-[#b3b3b3]">© 2022 Veltio. All rights reserved</p>
          <Social class="text-white" size={50} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
