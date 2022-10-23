import React from "react";
import { pricing } from "../../data/price";
import { Fade } from "react-reveal";
const Pricing = () => {
  return (
    <div>
      <div className="bg-[url('/image/pricing/pricing-bg-dots.png')] min-h-[850px] bg-no-repeat top-4 left-2 relative flex items-center justify-center">
     
      <Fade bottom>
      <div className=" max-w-[1296px]  z-10 flex flex-col items-center mx-auto mb-10 md:mb-28">
        <h2 className="  font-bold mt-5 md:mt-24 text-2xl md:text-[57px]">
          Get Your <span className="text-[#5A00CC]">Ticket</span> 
        </h2>
        <p className="md:max-w-lg mx-4 mb-4 md:mb-14 text-white text-center mt-5 text-sm md:text-lg md:mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum urna sed erat tortor aliquam ipsum
        </p>
        <div className="flex flex-col px-2 xl:px-0 items-stretch justify-center flex-wrap lg:flex-row gap-6">
            {
              pricing.map((item,i) => (
                <div className="bg-white pricing-card md:w-[417px] shadow-lg rounded-md " key={item.title}>
                  <div className="flex flex-col justify-between">
                    <div className={`${i == 1 && 'bg-[#F112A2] text-white'} pt-16 rounded-t-md`}>
                    <h1 className={`text-center font-extrabold text-2xl md:text-[57px] mb-3 md:mb-7 ${i == 1 ? 'bg-[#F112A2] text-white':'primary-color'}`}>${item.price}</h1>
                    <h3 className={`text-lg md:text-3xl text-center font-extrabold mb-4 md:mb-10 ${i == 1?'text-white':'text-[#222]'}`}>{item.title}</h3>
                    </div>
                    {i !== 1 && <div className="w-28 h-1 mx-auto bg-[#5A00CC]"></div>}
                   <div className="p-10">
                   <ul className="flex flex-col gap-4 items-center my-8">
                     {
                      item.features.map(feature => (
                        <li className="text-[#222] text-lg  " key={feature}>{feature}</li>
                      ))
                     }
                    </ul>
                    <div className="flex justify-center w-full">

                    <button style={{alignSelf:'end'}} className="text-white  text-lg py-3 rounded-md px-4 bg-[#F112A2] ">Purchase Ticket</button>
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
