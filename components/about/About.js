import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import { bannerStates } from "../../data/bannerstate";
import CountUp from "react-countup";
bannerStates;
const About = () => {
  return (
    <div className="relative">
      <div className="mt-4 md:-mt-[77px] z-20  relative max-w-[1296px] mx-auto">
        <div className="flex gap-5 mx-2 xl:mx-0 md:gap-0 flex-col md:flex-row flex-wrap  bg-white justify-around  md:my-0 rounded-none md:rounded-lg shadow-lg pt-7 pb-10 z-10 ">
          {bannerStates.map((item) => (
            <div className="flex flex-col items-center" key={item.title}>
              <h1 className="text-[#5A00CC] font-bold text-[43px]">
                <CountUp end={item.number} />
                <span className="primary-color">+</span>
              </h1>
              <p className="text-2xl after:content-[''] after:bg-[#F112A2] after:w-10 after:h-2">
                {item.title}
              </p>
              <div className="bg-[#F112A2] w-20 h-[2px] mt-4"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1296px] mx-auto ">
        <div className="flex flex-col-reverse mx-5 xl:mx-0 md:flex-row gap-7 md:gap-10 xl:gap-32 items-center min-h-[665px] ">
         <Fade left>
         <div className="flex relative items-center gap-5 flex-col justify-center w-full md:flex-row">
            <div className="absolute -top-3 hidden md:block -right-3">
              <Image width='113' height={124}  src='/image/about/rectangle.png' alt="about image" />
            </div>
            <div className=" mx-2 md:mx-0">
              <Image
                src="/image/about/image3.png"
                className="rounded-lg shadow-md"
                height={450}
                width={380}
                alt="about image"
              />
            </div>
            <div className="flex flex-col gap-5  mx-2 md:mx-0">
              <Image
                src="/image/about/image1.png"
                className="rounded-lg shadow-md"
                height={300}
                width={380}
                alt="img"
              />
              <Image
                src="/image/about/image2.png"
                className="rounded-lg shadow-md"
                height={300}
                width={380}
                alt="about image"
              />
            </div>
          </div>
         </Fade>
         <Fade right>
         <div className="flex flex-col flex-wrap lg:col-span-6 px-6 md:px-0 mr-0 md:mr-20">
            <h2 className="text-5xl mt-3 md:mt-0 md:text-[57px] leading-tight mb-2 font-bold">
              Wolcome To Global <span className="text-[#5A00CC]">Business</span>{" "}
              Conference
            </h2>
            <p className="text-lg mb-3 md:mb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              urna sed erat tortor aliquam ipsum auctor ut. Consectetur non,
              platea id porttitor.
            </p>
            <div>
              <button className="px-10 py-3 bg-[#5A00CC]  mb-4 md:mb-0 font-bold text-white mr-5 rounded-md">
                Get Ticket
              </button>
              <button className="px-10 py-3 text-[#5A00CC] hover:bg-[#4A00CC] transition-colors hover:text-white border-[1px] border-[#5A00CC] font-bold bg-white mr-5 rounded-md">
                Learn More
              </button>
            </div>
          </div>
         </Fade>
         
        </div>
      </div>
      <div className="hidden md:block absolute bottom-0 left-0">
        <Image
          src="/image/about/about-shape.png"
          width={180}
          height={350}
          alt="shape"
        />
      </div>
      <div className="absolute right-0 top-40">
        <Image
          src="/image/about/about-circle.png"
          width={60}
          height={80}
          alt="shape"
        />
      </div>
    </div>
  );
};

export default About;
