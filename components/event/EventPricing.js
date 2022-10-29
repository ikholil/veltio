import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
const Event = () => {
  return (
   <div>
     <div className="min-h-[500px] bg-[url('/image/pricing/partnar-bg.png')] bg-cover bg-no-repeat h-full relative">
      <div className="max-w-[1296px] mx-auto py-12 lg:pb-[110px] lg:pt-[120px]">
       <Fade right>
       <div className="flex flex-col justify-center items-center ">
          <h2 className="text-3xl md:text-[57px] text-white font-bold text-center ">
            Our Event Partner </h2>

          <p className="md:max-w-md text-white text-center mt-6 text-sm mx-3 z-10 md:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            urna sed erat tortor aliquam ipsum
          </p>
        </div>
       </Fade>
      <Fade left>
      <div className="flex flex-col justify-center items-center px-5 md:px-0 md:flex-row gap-8 md:gap-6 flex-wrap mt-8 md:mt-[60px] ">
          <div  className="w-9/12 flex justify-center md:w-auto">

            <Image src='/image/pricing/partner1.png' alt="our partner" height={80} width={306} />
          </div>
          <div className="w-9/12 flex justify-center md:w-auto">

            <Image src='/image/pricing/partner2.png' alt="our partner" height={80} width={306} />
          </div>
          <div className="w-9/12 flex justify-center md:w-auto">

            <Image src='/image/pricing/partner3.png' alt="our partner" height={80} width={306} />
          </div>
          <div className="w-9/12 flex justify-center md:w-auto">

            <Image src='/image/pricing/partner4.png' alt="our partner" height={80} width={306} />
          </div>
           
        </div>
      </Fade>
      </div>
    


    </div>
   </div>
  );
};

export default Event;
