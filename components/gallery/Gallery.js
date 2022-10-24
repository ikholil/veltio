import Image from "next/image";
import React from "react";
import { galleryImages } from "../../data/galleryImage";
import { Fade } from "react-reveal";
const Gallery = () => {
  return (
    <div className="relative">
      <div className="absolute -z-10 top-5 -right-1">
        <Image src='/image/gallery/bg-dots-home.png' height={260} width={260} alt="shape" />
    </div>
      <Fade bottom>
      <div className="max-w-[1296px] mx-auto mb-[120px] ">
       
       <h2 className="text-2xl md:text-[57px] font-extrabold text-center mb-[30px] md:mb-10 mt-8 md:mt-[120px]">
         Our <span className="text-[#5A00CC]">Gallery</span>
       </h2>
       <p className="text-center text-lg text-[#444] mb-4 md:mb-[60px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       </p>
       <div className="grid grid-cols-12 gap-6 items-center content-center  mx-2 md:mx-0">
         {galleryImages.map((img) => (
           <div key={img} className="col-span-12 md:col-span-6 cursor-pointer lg:col-span-4">
             <Image src={img} height={287} width={416} />
           </div>
         ))}
       </div>
     </div>
      </Fade>
    </div>
  );
};

export default Gallery;
