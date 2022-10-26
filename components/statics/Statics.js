import Image from "next/image";
import CountUp from "react-countup";
import { Fade } from "react-reveal";
import { statics } from "../../data/statics";
const Statics = () => {
  return (
    <div className="bg-[url('/image/statics/statics-bg.png')] w-screen statics-bg">
      <Fade bottom>
      <div className="flex flex-col max-w-[1296px]  mx-auto items-center justify-center">
        <h1 className="text-4xl mt-10 md:mt-[120px] mb-4 md:mb-[22px] font-extrabold md:text-[57px] text-center">
          Our Present <span className="primary-color">Statics</span>
        </h1>
        <p className="text-lg text-[#444444] text-center mb-5 md:mb-[53px] max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
          urna sed erat tortor aliquam ipsum
        </p>
        <div className="flex flex-col justify-center 2xl:justify-between  flex-wrap  mx-2 2xl:mx-0 mb-5 md:mb-[120px] gap-6 md:flex-row">
          {
            statics.map(stat => (
              <div key={stat.title} className="flex  gap-7  md:w-[416px] items-center bg-white rounded-lg px-[30px] py-6">
              <Image src={stat.icon} width={100} height={100} alt="icon"/>
              <div className="w-[1px] h-full bg-[#5A00CC]"></div>
              <div className="">
                  <h2 className="text primary-color font-extrabold text-[43px]"><CountUp end={stat.number} /></h2>
                  <p className="text-lg text-[#222222]">{stat.title}</p>
              </div>
            </div>
            ))
          }
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Statics;
