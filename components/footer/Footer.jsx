import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { GoPrimitiveDot } from "react-icons/go";
import Social from "../others/Social";
const Footer = () => {
  return (
    <div className="relative  bg-[#0D0635]">
      <Fade>
      <div className=" max-w-[1296px]  mx-auto  min-h-[350px]">
        <div className="absolute top-3 animate-pulse">
          <Image
            src="/image/footer/dots1.png"
            height={200}
            width={200}
            alt="footer dots"
          />
        </div>
        <div className="grid place-content-center  xl:px-0  w-full">
          <div className="w-auto sm:px-20 md:px-32 lg:px-48 lg:bg-[url('/image/footer/footer-shape.png')] bg-no-repeat bg-left  relative flex flex-col justify-center items-center bg-white px-4 rounded-md mt-20 mb-5 md:my-[120px] py-6 md:py-16 mx-2 md:mx-auto">
            <div className="absolute rounded-md top-3  right-2 animate-pulse">
              <Image
                src="/image/footer/dots2.png"
                className="rounded-md"
                width={110}
                height={180}
                alt="footer shape"
              />
            </div>
            <h2 className="text-xl md:text-3xl font-bold mx-2 text-center mb-4 text-[#222]">
              SUBSCRIBE TO <span className="text-[#5A00CC]">NEWSLETTER</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-2  md:px-0 max-w-md mx-auto">
              <input
                type="email"
                className="border-b py-1 w-full md:w-[250px] border-black focus:outline-none focus:border-b foucs:border-black"
                placeholder="Email"
                size={80}
                required
              />
              <button className="py-2  px-3 hover:bg-white hover:text-[#F112A2] border-2 transition-all duration-300 border-[#F112A2] hover:border-2 hover:border-[#F112A2] md:px-8 bg-[#F112A2] text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex mx-3 2xl:mx-0 mb-4 pl-8 pt-5 md:pl-0 md:pt-0 md:items-center flex-col sm:flex-row justify-between ">
          <div className="cursor-pointer md:-bottom-2 relative">
            <Link href="/">
              <a>
                <Image src="/icon.png" height={36} width={110} alt="logo" />
              </a>
            </Link>
          </div>
          <div>
            <ul className="flex flex-col gap-4 sm:flex-row  items-start mb-4 md:mb-0 md:items-center text-lg text-[#B3B3B3] ">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/schedule", "Schedule"],
                ["/page", "Page"],
              ].map(([url, title], index) => (
                <span
                  key={index}
                  className="flex gap-4 justify-center items-center"
                >
                  <Link href={url}>
                    <a>
                      <li className="cursor-pointer font-semibold">{title}</li>
                    </a>
                  </Link>
                  <GoPrimitiveDot className="hidden md:block " />
                </span>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex  flex-col md:flex-row  justify-between py-7  items-center">
          <p className="text-base mb-4 md:mb-0 text-[#b3b3b3]">
            © 2022 Veltio. All rights reserved
          </p>
          <Social classes="text-white" size={45} />
        </div>
      </div>
      </Fade>
     
    </div>
  );
};

export default Footer;