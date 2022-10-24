import Image from "next/image";
import React from "react";
import bannerImg from '../../public/image/banner/banner.png'
import { GoPrimitiveDot } from "react-icons/go";
import { Fade } from "react-reveal";

const Banner = () => {
  return (    
    <div>
 <div className="bg-[url('/image/banner/banner-bg.png')] banner-bg w-full md:h-[96vh] relative">
      
      <Fade bottom >
      <div className="hidden md:block absolute -bottom-2 z-10 right-0">
          <Image src='/image/banner/banner-shape2.png' width={800} height={1100} alt="shape" />
        </div>
      </Fade>
      
        <div className="max-w-[1296px] mx-auto z-20 flex flex-col md:flex-row  lg:pt-10 items-center ">
          <Fade bottom>
          <div className="z-10 pt-24 px-4 xl:px-0">
            <p className="text-white text-2xl font-bold mb-3 md:mb-7">Professional</p>
            <h1 className="font-extrabold leading-tight text-white text-5xl md:text-[76px]">
              Global <span className="primary-color">Business</span> Conference
            </h1>
            <ul className="mt-10">
              <li className="text-2xl flex mb-7 items-center gap-3 text-white">
                {" "}
                <GoPrimitiveDot className="text-[#F112A2]" /> 25-28 July 2022
              </li>
              <li className="text-2xl flex items-center gap-3 text-white">
                {" "}
                <GoPrimitiveDot className="text-[#F112A2]" /> San Francisco,
                California
              </li>
            </ul>
            <button className="px-16 mt-10 py-4 mb-10 rounded-md bg-white primary-color font-bold">
              Get Ticket
            </button>
          </div>
          </Fade>
          
          <Fade delay={500} bottom>
          <div className=" z-20 md:-right-14 -bottom-2 md:-bottom-10 relative">
            <Image
              src={bannerImg}
              className=""
              alt="bannger image"
              width={950}
              height={1200}
            />
          </div>
          </Fade>
        </div>
        
        
        <div className="absolute hidden md:block top-36">
          <Image src='/image/banner/circle-banner.png' width={60} height={80} alt="shape" />
        </div>
        
    </div>
    </div>
   
  );
};

export default Banner;
