import React from "react";
import { Fade } from "react-reveal";
const TopBanner = (props) => {
  return (
    <div className="bg-[url('/image/banner/banner-bg2.png')] min-h-[500px] relative">
      <div className="bg-gradient-to-r  absolute top-0 grid-cols-12 from-[#5A00CC] to-[#B18AE1] h-full w-screen opacity-30"></div>
      <div className="flex  relative z-10 max-w-[1296px] mx-auto items-center h-full pt-[220px]">
        <Fade left>
        <div className="mx-5">
          <h1 className="text-5xl md:text-[76px] mb-[30px] text-white font-bold">
            {props.text}
          </h1>
          <p className="text-white text-lg">Home →  {props.indicator}</p>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default TopBanner;
