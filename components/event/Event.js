import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
const Event = () => {
  return (
   <div>
     <div className="min-h-[500px] relative mb-10 md:mb-32">
      <div className="max-w-[1296px] mx-auto ">
        <Fade bottom>
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-5xl md:text-[57px] font-extrabold text-center mt-8 md:mt-28">
            Our Event <span className="text-[#5A00CC]">Partner</span>
          </h2>

          <p className="md:max-w-md text-center mt-5 text-lg mx-3 z-10 md:text-lg md:mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            urna sed erat tortor aliquam ipsum
          </p>
        </div>
        
        <div className="flex flex-col justify-center items-center px-5 md:px-0 md:flex-row gap-6 flex-wrap mt-7 md:mt-[60px] ">
          <div>

            <Image src='/image/event/partner4.png' alt="our partner" height={90} width={306} />
          </div>
          <div>

            <Image src='/image/event/partner2.png' alt="our partner" height={90} width={306} />
          </div>
          <div>

            <Image src='/image/event/partner3.png' alt="our partner" height={90} width={306} />
          </div>
          <div>

            <Image src='/image/event/partner1.png' alt="our partner" height={90} width={306} />
          </div>
           
        </div>
        </Fade>
      </div>
    <div className="absolute -z-10 top-10 left-24">
        <Image src='/image/event/event-shape.png' height={260} width={138} alt="shape" />
    </div>
    <div className="absolute -z-10 top-7 right-0">
        <Image src='/image/event/event-shape2.png' height={600} width={258} alt="shape" />
    </div>


    </div>
   </div>
  );
};

export default Event;
