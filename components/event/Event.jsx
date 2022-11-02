import Image from "next/image";
import React from "react";
import { eventHome } from "../../data/eventhome";

const Event = () => {
  return (
    <div className="relative">
      <div className="mb-10 md:mb-[107px]  mt-16 md:mt-[120px]">
        <div className="max-w-[1296px] mx-auto ">
      
            <div className="flex flex-col justify-center items-center ">
              <h2 className="text-4xl md:text-[57px] font-bold text-center">
                Our Event <span className="text-[#5A00CC]">Partner</span>
              </h2>

              <p className="md:max-w-md text-center mt-[23px] text-lg mx-3 z-10 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum urna sed erat tortor aliquam ipsum
              </p>
            </div>

            <div className="flex flex-col justify-center items-center px-5 md:px-0 md:flex-row gap-10 md:gap-4 flex-wrap mt-8 mb:mt-3 md:mt-[44px] ">
              {eventHome.map((img, i) => (
                <div
                  key={i}
                  className="w-[200px] md:w-[300] flex justify-center lg:w-auto"
                >
                  <Image src={img} alt="our partner" height={80} width={306} />
                </div>
              ))}
            </div>
     
        </div>
        <div className="absolute hidden xl:block -z-10 top-10 left-24">
          <Image
            src="/image/event/event-shape.png"
            height={260}
            width={138}
            alt="shape"
          />
        </div>
        <div className="hidden xl:block absolute  -z-10 -top-24 right-0">
          <Image
            src="/image/event/event-shape2.png"
            height={400}
            width={150}
            alt="shape"
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
