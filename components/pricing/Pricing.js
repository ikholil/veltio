import React from "react";
import { pricing } from "../../data/price";
import { Fade } from "react-reveal";
const Pricing = () => {
  return (
    <div>
      <div className="bg-[url('/image/pricing/bg.png')] min-h-[850px] relative flex items-center justify-center">
     
      <Fade bottom>
      <div className=" max-w-[1296px]  z-10 flex flex-col items-center mx-auto mb-10 md:mb-[120px]">
        <h2 className="text-white  font-bold mt-5 md:mt-[120px] text-2xl md:text-[57px]">
          Get Your Ticket
        </h2>
        <p className="md:max-w-lg  mb-4 md:mb-14 text-white text-center mt-5 text-sm md:text-lg md:mt-[28px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum urna sed erat tortor aliquam ipsum
        </p>
        <div className="flex flex-col px-2 xl:px-0 items-stretch justify-center flex-wrap lg:flex-row gap-6">
            {
              pricing.map((item,i) => (
                <div className="bg-white pricing-card w-[310px] sm:w-[417px] rounded-lg " key={item.title}>
                  <div className="flex flex-col justify-between">
                    <div className={`${i == 1 && 'bg-[#F112A2] text-white'} pt-24 rounded-t-lg`}>
                    <h1 className={`text-center font-extrabold text-2xl md:text-[57px] mb-3 md:mb-7 ${i == 1 ? 'bg-[#F112A2] text-white':'primary-color'}`}>${item.price}</h1>
                    <h3 className={`text-lg md:text-3xl text-center font-extrabold mb-4 md:mb-10 ${i == 1?'text-white':'text-[#222]'}`}>{item.title}</h3>
                    </div>
                    {i !== 1 && <div className="w-28 h-1 mx-auto bg-[#5A00CC]"></div>}
                   <div className="px-10 py-5 md:py-14">
                   <ul className="flex flex-col gap-4 items-center my-8">
                     {
                      item.features.map(feature => (
                        <li className="text-[#222] text-lg  " key={feature}>{feature}</li>
                      ))
                     }
                    </ul>
                    <div className="flex justify-center w-full">

                    <button style={{alignSelf:'end'}} className="text-white font-semibold text-lg py-2 md:py-4 rounded-md px-4 md:px-6 bg-[#F112A2] ">Purchase Ticket</button>
                    </div>
                   </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
      </Fade>
    </div>
    </div>
  );
};

export default Pricing;
