import React from "react";
import { pricing } from "../../data/price";

const Pricing = () => {
  return (
    <div>
      <div className="bg-[url('/image/pricing/bg.png')] bg-no-repeat bg-cover">
     

      <div className=" max-w-[1296px]  z-10 flex flex-col items-center mx-auto py-[60px] md:pt-[127px] md:pb-[120px]">
        <h2 className="text-white  font-bold  text-3xl md:text-[57px]">
          Get Your Ticket
        </h2>
        <p className="md:max-w-lg  mx-3 mb-7 md:mb-14 text-white text-center mt-3 text-sm md:text-lg md:mt-[28px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum urna sed erat tortor aliquam ipsum
        </p>
        <div className="flex flex-wrap max-w-full px-3 xl:px-0 justify-center   gap-5">
            {
              pricing.map((item,i) => (
                <div className=" bg-white w-[300px] lg:w-[417px] shadow-[0px_4px_18px_rgba(148,148,148,0.25)] rounded-[10px]  " key={item.title}>
                  <div className="flex flex-col justify-between">
                    <div className={`${i == 1 && 'bg-[#F112A2] text-white'} pt-10 md:pt-[69px] rounded-t-lg`}>
                    <h1 className={`text-center font-extrabold text-2xl md:text-[57px] mb-3 md:mb-[34px] ${i == 1 ? 'bg-[#F112A2] text-white':'primary-color'}`}>${item.price}</h1>
                    <h3 className={`text-lg md:text-3xl text-center font-extrabold mb-4 md:mb-8 ${i == 1?'text-white':'text-[#222]'}`}>{item.title}</h3>
                    </div>
                    {i !== 1 && <div className="w-28 h-1 mx-auto bg-[#5A00CC]"></div>}
                   <div className="px-10 pb-8 md:pb-[60px]">
                   <ul className="flex flex-1 flex-col gap-2  items-center mt-[34px] mb-9">
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

    </div>
    </div>
  );
};

export default Pricing;
