import Link from "next/link";
import React from "react";
const TopBanner = (props) => {
  return (
    <div className="bg-[url('/image/banner/banner-bg2.png')] bg-no-repeat bg-cover relative">
      <div className="bg-gradient-to-r  absolute top-0 grid-cols-12 from-[#5A00CC] to-[#B18AE1] h-full w-screen opacity-30"></div>
      <div className="flex  relative z-10 max-w-[1296px] mx-auto items-center h-full pb-[62px] lg:pb-[113px] pt-[130px] lg:pt-[230px]">
        <div className="mx-5">
          <h1 className="text-4xl md:text-5xl lg:text-[76px] mb-2 md:mb-3 text-white font-bold">
            {props.text}
          </h1>
          <p className="text-white text-base md:text-lg">
            <Link href="/">
              <a>Home </a>
            </Link>
            → {props.indicator}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
