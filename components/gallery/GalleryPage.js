import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
const GalleryPage = () => {
  return (
    <div className="relative">
        <div className="absolute top-0 right-10">
            <Image src='/image/contact/contact-info-bg.png' height={550} width={1600}  alt="bg dots" />
        </div>
      <div className="max-w-[1296px] mx-auto">
      <Fade right>
      <div className="text-center">
          <h2 className="text-center font-extrabold mt-10 md:mt-[120px] mb-10 text-4xl md:text-[57px]">
            Our <span className="text-[#5A00CC]">Gallery</span>
          </h2>
          <p className=" mx-4 mb-4 md:mb-14 text-center text-sm md:text-lg md:mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </Fade>
      
     
       <div className="grid mx-2 xl:mx-0 grid-cols-12 mb-[50px]  gap-4">
            <div className="col-span-12 md:col-span-4 ">
                <Image className="" src='/image/gallery/img1.png' width={432} height={407} alt="gallery photos" />
            </div>
            <div className="col-span-12 row-span-2 md:col-span-4">
                <Image className="" src='/image/gallery/img2.png' width={418} height={821} alt="gallery photos" />
            </div>
            <div className="col-span-12 md:col-span-4">
                <Image className="" src='/image/gallery/img3.png' width={432} height={407} alt="gallery photos" />
            </div>
            <div className="col-span-12 md:col-span-4">
                <Image className="" src='/image/gallery/img4.png' width={432} height={407} alt="gallery photos" />
            </div>
            <div className="col-span-12 md:col-span-4">
                <Image className="" src='/image/gallery/img5.png' width={432} height={407} alt="gallery photos" />
            </div>
            <div className="col-span-12 md:col-span-4">
                <Image className="" src='/image/gallery/img6.png' width={432} height={407} alt="gallery photos" />
            </div>
            <div className="col-span-12 md:col-span-4">
                <Image className="" src='/image/gallery/img7.png' width={432} height={407} alt="gallery photos" />
            </div>
            <div className="col-span-12 row-span-2 md:col-span-4">
                <Image className="" src='/image/gallery/img8.png' width={418} height={822} alt="gallery photos" />
            </div>
            <div className="col-span-12 md:col-span-8">
                <Image className="" src='/image/gallery/img9.png' width={864} height={407} alt="gallery photos" />
            </div>
        </div>
      
        <div className="flex justify-center mb-5 md:mb-[120px] gap-2">
            <a href="#" className="bg-[#F112A2] px-2 text-white border border-[#F112A2]">1</a>
            <a href="#" className="text-[#F112A2] px-2 border border-[#F112A2]">2</a>
            <a href="#" className="text-[#F112A2] px-2 border border-[#F112A2]"> {">"}</a>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
