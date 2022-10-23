import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
const Event = () => {
  return (
   <div>
     <div className="min-h-[500px] bg-[url('/image/pricing/partnar-bg.png')] bg-no-repeat h-full relative">
      <div className="max-w-[1296px] mx-auto ">
       <Fade right>
       <div className="flex flex-col justify-center items-center ">
          <h2 className="text-2xl md:text-[57px] text-white font-extrabold text-center mt-8 md:mt-28">
            Our Event Partner </h2>

          <p className="md:max-w-md text-white text-center mt-2 md:mt-5 text-lg mx-3 z-10 md:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            urna sed erat tortor aliquam ipsum
          </p>
        </div>
       </Fade>
      <Fade left>
      <div className="flex flex-col justify-center items-center px-5 md:px-0 md:flex-row gap-2 md:gap-6 flex-wrap mt-7 md:mt-[60px] ">
          <div >

            <Image src='/image/pricing/partner1.png' alt="our partner" height={80} width={306} />
          </div>
          <div>

            <Image src='/image/pricing/partner2.png' alt="our partner" height={80} width={306} />
          </div>
          <div>

            <Image src='/image/pricing/partner3.png' alt="our partner" height={80} width={306} />
          </div>
          <div>

            <Image src='/image/pricing/partner4.png' alt="our partner" height={80} width={306} />
          </div>
           
        </div>
      </Fade>
      </div>
    <div className="absolute -z-10 top-5 left-24">
        <Image src='/image/event/event-shape.png' height={260} width={138} alt="shape" />
    </div>
    <div className="absolute -z-10 top-7 right-0">
        <Image src='/image/event/event-shape2.png' height={360} width={138} alt="shape" />
    </div>


    </div>
   </div>
  );
};

export default Event;
