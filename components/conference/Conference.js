import Image from "next/image";
import React from "react";
import Tab from "./Tab";
import { Fade } from "react-reveal";
const Conference = () => {
  return (
    <div>
           <div className="relative">
     <div className="max-w-[1296px] bg-[url('/image/conference/bg.png')] bg-conference flex flex-col items-center mx-auto min-h-[1200px]">
     <Fade bottom>
        <h2 className="text-5xl md:text-[57px] font-extrabold text-center mt-8 md:mt-[120px]">
          Conference <span className="text-[#5A00CC]">Schedule</span>
        </h2>
        <p className="md:max-w-md text-center mt-5 text-lg mx-3 md:text-lg md:mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
          urna sed erat tortor aliquam ipsum
        </p>
     </Fade>
     <Fade bottom>

        <Tab />
     </Fade>
      </div>
      <div className="absolute top-0 -z-10 left-0">
        <Image src='/image/conference/conference-shape.png' height={550} width={380} alt="shape" />
      </div>
     
    </div>
    </div>
 
  );
};

export default Conference;
