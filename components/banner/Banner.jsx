import Image from "next/image";
import React from "react";
import bannerImg from "../../public/image/banner/banner.png";
import { GoPrimitiveDot } from "react-icons/go";
import { Fade } from "react-reveal";

const Banner = () => {
  return (
    <div>
      <div className="bg-[url('/image/banner/banner-bg.png')] bg-no-repeat bg-cover banner-bg w-full lg:h-full  relative">
        <Fade bottom>
          <div className="hidden md:block absolute -bottom-2 z-10 right-0">
            <Image
              src="/image/banner/banner-shape2.png"
              width={800}
              height={1100}
              alt="shape"
            />
          </div>
        </Fade>

        <div className="max-w-[1296px] mx-auto z-20 flex flex-col md:flex-row xl:min-h-[900px] h-full lg:pt-10 items-center ">
          <Fade bottom>
            <div className="z-10 pt-32  xl:pt-0 px-4 xl:px-0">
              <p className="text-white text-lg md:text-2xl font-semibold mb-2 ">
                Professional
              </p>
              <h1 className="font-bold leading-tight text-white text-4xl lg:text-[76px]">
                Global <span className="primary-color">Business</span>{" "}
                Conference
              </h1>
              <ul className="mt-5 text-base md:text-2xl">
                <li className=" flex mb-1 md:mb-4 items-center gap-3 text-white">
                  {" "}
                  <GoPrimitiveDot className="text-[#F112A2]" /> 25-28 July 2022
                </li>
                <li className="flex items-center gap-3 text-white">
                  {" "}
                  <GoPrimitiveDot className="text-[#F112A2]" /> San Francisco,
                  California
                </li>
              </ul>
              <button className="px-8 md:px-14 mt-8 py-2 md:py-4 lg:mb-0 hover:bg-[#F112A2] hover:text-white  transition-all duration-300 rounded-md bg-white primary-color font-bold">
                Get Ticket
              </button>
            </div>
          </Fade>

          <Fade delay={500} bottom>
            <div className=" z-10 h-[70%] md:pt-20 -bottom-2  relative">
              <Image src={bannerImg} className="" alt="bannger image" />
            </div>
          </Fade>
        </div>

        <div className="absolute  duration-1000 hidden xl:block top-36">
          <Image
            src="/image/banner/circle-banner.png"
            width={60}
            height={80}
            alt="shape"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
