import Image from "next/image";
import Tab from "./Tab";
import conShape from "../../public/image/conference/conference-shape.png";
const Conference = () => {
  return (
    <div className="relative pt-[67px] lg:pt-[123px]">
      <div className="max-w-[1296px] bg-[url('/image/conference/bg.png')] bg-conference flex flex-col  items-center mx-auto">
        <h2 className="text-4xl md:text-[57px] font-bold text-center ">
          Conference <span className="text-[#5A00CC]">Schedule</span>
        </h2>
        <p className="md:max-w-md text-center text-base mx-3 md:text-lg mt-4 md:mt-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
          urna sed erat tortor aliquam ipsum
        </p>

        <Tab />
      </div>
      <div className="absolute hidden xl:block top-0 -z-10 left-0">
        <Image src={conShape} height={550} width={380} alt="shape" />
      </div>
    </div>
  );
};

export default Conference;
