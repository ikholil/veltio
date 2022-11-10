import Image from "next/image";
import CountUp from "react-countup";
import { statics } from "../../data/statics";
const Statics = () => {
  return (
    <div className="bg-[url('/image/statics/statics-bg.png')]  bg-right  w-screen statics-bg">

        <div className="flex flex-col max-w-[1296px]  mx-auto items-center justify-center">
          <h2 className="text-3xl px-4 mt-16 md:mt-[110px] leading-tight mb-4 md:mb-[7px] font-bold md:text-[57px] text-center">
            Our Present <span className="primary-color">Statics</span>
          </h2>
          <p className="text-base md:text-lg text-[#444444] text-center mx-2 lg:mx-0 mb-[37px] md:mb-[53px] max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            urna sed erat tortor aliquam ipsum
          </p>
          <div className="flex justify-center 2xl:justify-between  flex-wrap  mx-2 2xl:mx-0 mb-[70px] md:mb-[120px] gap-4 md:gap-6 ">
            {statics.map((stat) => (
              <div
                key={stat.title}
                className="flex  gap-3 md:gap-7 w-[200px] md:w-[416px] items-center bg-white rounded-[10px] shadow-lg  px-4 md:px-[30px] py-3 md:py-6"
              >
                <div className="w-14 h-14 md:w-24 md:h-24 ">
                  <Image src={stat.icon} width={100} height={100} alt="icon" />
                </div>
                <div className="w-[1px] h-full bg-[#5A00CC]"></div>
                <div>
                  <h2 className="text primary-color font-bold text-xl md:text-[43px]  md:mb-3">
                    <CountUp end={stat.number} />
                  </h2>
                  <p className="text-sm md:text-lg text-[#222222]">
                    {stat.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Statics;
