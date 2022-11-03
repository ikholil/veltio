import React from "react";
import { pricing } from "../../data/price";

const Pricing = () => {
  return (
    <div>
      <div className="bg-[url('/image/pricing/pricing-bg-dots.png')] min-h-[850px] bg-no-repeat top-4 left-2 relative flex items-center justify-center">
        <div className=" max-w-[1296px]  z-10 flex flex-col items-center mx-auto mb-20 md:mb-[135px]">
          <h2 className="  font-bold mt-8 md:mt-[112px] text-2xl md:text-[57px]">
            Get Your <span className="text-[#5A00CC]">Ticket</span>
          </h2>
          <p className="md:max-w-lg mx-4 mb-4 md:mb-14  text-center mt-5 text-sm md:text-lg md:mt-[29px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            urna sed erat tortor aliquam ipsum
          </p>
          <div className="flex flex-col px-2 xl:px-0 items-stretch justify-center flex-wrap lg:flex-row gap-5">
            {pricing.map((item, i) => (
              <div
                className="bg-white w-[295px] md:w-[417px] shadow-[0px_4px_18px_rgba(148,148,148,0.25)] rounded-[10px] "
                key={item.title}
              >
                <div className="flex flex-col justify-between">
                  <div
                    className={`${
                      i == 1 && "bg-[#F112A2] text-white"
                    } pt-16 rounded-t-md`}
                  >
                    <h1
                      className={`text-center font-extrabold text-2xl md:text-[57px] mb-3 md:mb-7 ${
                        i == 1 ? "bg-[#F112A2] text-white" : "primary-color"
                      }`}
                    >
                      ${item.price}
                    </h1>
                    <h3
                      className={`text-lg md:text-3xl text-center font-semibold mb-4 md:mb-10 ${
                        i == 1 ? "text-white" : "text-[#222]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  {i !== 1 && (
                    <div className="w-28 h-1 mx-auto bg-[#5A00CC]"></div>
                  )}
                  <div className="p-6 md:p-10">
                    <ul className="flex flex-col gap-4 items-center my-4 md:my-8">
                      {item.features.map((feature, i) => (
                        <li
                          className="text-[#222] text-base md:text-lg  "
                          key={i}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center w-full">
                      <button
                        style={{ alignSelf: "end" }}
                        className="text-white  text-lg py-3 rounded-md px-4 bg-[#F112A2] "
                      >
                        Purchase Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
