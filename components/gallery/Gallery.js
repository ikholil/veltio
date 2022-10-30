import Image from "next/image";
import React from "react";
import { galleryImages } from "../../data/galleryImage";
import { Fade } from "react-reveal";
const Gallery = () => {
  return (
    <div className="relative">
      <div className="absolute -z-10 top-5 -right-1">
        <Image
          src="/image/gallery/bg-dots-home.png"
          height={260}
          width={260}
          alt="shape"
        />
      </div>
      <Fade bottom>
        <div className="max-w-[1296px] mx-auto mb-[110px] ">
          <h2 className="text-4xl md:text-[57px] font-extrabold text-center mb-[30px] mt-16 md:mt-[124px]">
            Our <span className="text-[#5A00CC]">Gallery</span>
          </h2>
          <p className="text-center text-lg text-[#444] mb-[35px] md:mb-[55px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-12 gap-1 md:gap-6 items-center content-center  mx-2 md:mx-0">
            {galleryImages.map((img) => (
              <div
                key={img}
                className="col-span-12 flex justify-center  md:col-span-6 cursor-pointer lg:col-span-4"
              >
                <Image
                  className="hover:scale-125 transition-all duration-700"
                  src={img}
                  height={287}
                  width={416}
                  alt="gallery img"
                />
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Gallery;
