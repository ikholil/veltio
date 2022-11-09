import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { speakers } from "../../data/speakers";
import Social from "../others/Social";
import Placeholder from "../../public/image/team/placeholder.jpg";
const SpeakerDetails = () => {
  const [speaker, setSpeaker] = useState({});
  const { query } = useRouter();
  useEffect(() => {
    const speaker = speakers.find((item) => item.id == query.id);
    setSpeaker(speaker);
  }, [query.id]);

  return (
    <div className="relative bg-[url('/image/team/single-speaker-bg.png')] bg-no-repeat bg-cover">
      <div className="max-w-[1296px] mx-2 bg-white xl:mx-auto  md:gap-8 xl:gap-20 flex flex-col lg:flex-row pt-[46px] pb-[70px] md:py-[120px]">
        <div className="shadow-xl rounded-md flex flex-col items-center ">
          <div className="md:h-[250px] md:w-[250px] my-[25px] rounded-full border-4 border-[#F112A2]">
            <Image
              className="rounded-full "
              src={speaker?.photo ? speaker?.profilePic : Placeholder}
              height={250}
              width={250}
              alt="speaker image"
            />
          </div>
          <h5 className="font-bold text-2xl text-[#222]">{speaker?.name}</h5>
          <p className="text-lg text-[#222] mb-[27px]">Speakers</p>
          <div className="bg-[#F112A2] h-[.5px] w-36 mb-[25px]"></div>
          <p className="text-lg text-[#444] px-2 md:px-5 mb-8 text-center">
            {speaker?.biography}
          </p>
          <Social classes="border-[#222] text-[#222]" size={40} />
          <div className="mb-[30px]"></div>
        </div>
        <div className="col-span-12 md:col-span-7 mx-3 md:mx-0">
          <h2 className="text-3xl mt-16 md:mt-0 md:text-[57px] text-[#F112A2] font-bold mb-4 md:mb-[40px]">
            Biography
          </h2>
          <p className="text-lg text-[#444] mb-8 md:mb-[46px]">
            {speaker?.biography}
          </p>
          <h2 className="text-3xl leading-tight md:text-[57px] font-bold mb-4 md:mb-[24px]">
            Personal Experience
          </h2>
          <p className="text-lg text-[#444] mb-[51px]">{speaker?.experience}</p>

          <h6 className="text-lg font-bold mb-2">Business</h6>
          <div className="xl:w-1/3 rounded-xl bg-gray-200 h-1 mb-5">
            <div className="bg-[#F112A2] rounded-xl h-1 w-10/12"></div>
          </div>
          <h6 className="text-lg font-bold mb-2">Entrepreneur</h6>
          <div className="xl:w-1/3 rounded-xl bg-gray-200 h-1 md:mb-5">
            <div className="bg-[#F112A2] rounded-xl h-1 w-11/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetails;
