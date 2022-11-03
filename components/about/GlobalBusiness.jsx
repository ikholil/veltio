import Image from "next/image";
import React from "react";
import { aboutBusiness } from "../../data/aboutBusiness";
import AboutImg from "../../public/image/about/about-page-img.png";
import AboutShape from "../../public/image/about/about-page-shape.png";
aboutBusiness;
const GlobalBusiness = () => {
  return (
    <div className="max-w-[1296px] mx-auto my-16 md:mt-[132px] md:pb-[138px]">
      <div className="grid grid-cols-12 mx-3 2xl:mx-0 2xl:gap-5 items-center">
        <div className="col-span-12 mx-3 xl:mx-0 flex justify-center lg:col-span-4 relative">
          <div className="absolute hidden lg:block -top-[150px] -left-[30px]  ">
            <Image
              src={AboutImg}
              height={440}
              width={350}
              alt="about page image"
            />
          </div>
          <div className="absolute hidden lg:block md:-top-[217px] -left-[100px]">
            <Image
              src={AboutShape}
              height={300}
              width={200}
              alt="about page image"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <h2 className="mx-4 lg:mx-0 mb-7 md:mb-[41px] text-4xl md:text-[57px] leading-tight font-bold">
            Best Global <span className="text-[#F112A2]">Business</span>{" "}
            Conference
          </h2>
          <div className="grid grid-cols-12 gap-3 xl:gap-12">
            {aboutBusiness.map((item) => (
              <div
                key={item.id}
                className="col-span-12 mx-4 min-h-0 h-full flex items-start gap-5 md:col-span-6 "
              >
                <div className="shadow-xl shadow-[#f112a316] w-24 px-2 py-1 rounded-lg ">
                  <Image
                    className=" p-5"
                    src={item.img}
                    alt="icon"
                    width={75}
                    height={75}
                  />
                </div>
                <div>
                  <h3 className="text-lg lg:text-2xl font-bold mb-[1px] text-[#222]">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-lg text-[#444]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalBusiness;
