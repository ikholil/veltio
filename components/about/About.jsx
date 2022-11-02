import Image from "next/image";
import React from "react";
import { bannerStates } from "../../data/bannerstate";
import CountUp from "react-countup";
import img3 from "../../public/image/about/image3.png";
import img1 from "../../public/image/about/image1.png";
import img2 from "../../public/image/about/image2.png";
bannerStates;
const About = () => {
  return (
    <div className="relative">
      <div className="mt-4 md:mt-0 xl:-mt-[77px] z-20  relative max-w-[1296px] mx-auto">
        <div className="flex gap-y-10 md:gap-5 px-2 md:px-14 mx-2 xl:mx-0   flex-wrap  bg-white justify-around  md:my-0 rounded-none md:rounded-lg shadow-lg py-10 z-10 ">
          {bannerStates.map((item, i) => (
            <div
              className="flex w-[120px] md:w-auto flex-col items-center"
              key={item.title}
            >
              <h1
                className={`text-[#5A00CC] ${
                  i == 0 ? "font-bold " : "font-semibold"
                } text-3xl md:text-[43px] mb-2 `}
              >
                <CountUp end={item.number} />
                <span className="primary-color">+</span>
              </h1>
              <p className="text-lg md:text-2xl after:content-[''] after:bg-[#F112A2] after:w-10 after:h-2">
                {item.title}
              </p>
              <div className="bg-[#F112A2] w-20 h-[2px] mt-4"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1296px] mx-auto ">
        <div className="flex flex-col-reverse mx-2 xl:mx-0 md:flex-row md:pb-[120px] md:pt-[132px] gap-7 md:gap-10 xl:gap-32 items-center  ">
          <div className="hidden lg:flex relative items-center gap-5 flex-col justify-center md:flex-row">
            <div className="absolute md:-top-3 hidden md:block -right-3">
              <Image
                width={113}
                height={124}
                src="/image/about/rectangle.png"
                alt="about image"
              />
            </div>
            <div className=" mx-2 md:mx-0 rounded-lg">
              <Image
                src={img3}
                className="rounded-lg shadow-md hover:scale-125 transition-all duration-700"
                height={356}
                width={306}
                alt="about image"
              />
            </div>
            <div className="flex rounded-lg flex-col gap-5 mb-20 md:mb-0 mx-2 md:mx-0">
              <Image
                src={img1}
                className="rounded-lg shadow-md hover:scale-125 transition-all duration-700"
                alt="img"
              />
              <Image
                src={img2}
                className="rounded-lg shadow-md hover:scale-125 transition-all duration-700"
                alt="about image"
              />
            </div>
          </div>

          <div className="flex max-w-[526px] flex-col flex-wrap lg:col-span-6 px-3 md:px-0 mr-0 md:mr-20">
            <h2 className="text-3xl my-16 md:mt-0 lg:text-[57px] leading-tight mb-2 font-bold">
              Wolcome To Global <span className="text-[#5A00CC]">Business</span>{" "}
              Conference
            </h2>
            <p className="text-base md:text-lg mb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              urna sed erat tortor aliquam ipsum auctor ut. Consectetur non,
              platea id porttitor.
            </p>
            <div className="flex gap-3">
              <button className="relative rounded px-4 py-2 md:px-10  md:py-2 overflow-hidden group bg-[#5A00CC] mr-2 hover:bg-gradient-to-r hover:from-[#5A00CC] hover:to-[#5800ccc2] text-white  transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Get Ticket</span>
              </button>

              <button className="rounded-md px-4 py-2 md:px-10  md:py-3  overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
                <span className="absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-[#5A00CC] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-500 group-hover:text-white ease">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden  xl:block absolute bottom-0 left-0">
        <Image
          src="/image/about/about-shape.png"
          width={180}
          height={350}
          alt="shape"
        />
      </div>
      <div className="hidden  lg:block absolute right-0 top-40">
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
