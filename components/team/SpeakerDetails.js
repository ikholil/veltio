import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { speakers } from "../../data/speakers";
import Social from "../others/Social";
const SpeakerDetails = () => {
  const [speaker, setSpeaker] = useState({});
  const { query } = useRouter();
  useEffect(() => {
    const speaker = speakers.find((item) => item.id == query.id);
    setSpeaker(speaker);
  }, [query.id]);

  console.log(speaker);
  return (
    <div className="relative">
      <div className="bg-[url('/image/team/single-speaker-bg.png')] hidden md:block h-full w-full absolute top-0"></div>
      <div className="max-w-[1296px] mx-auto gap-5 md:gap-20 flex flex-col md:flex-row my-20">
        <div className="shadow-xl rounded-md flex flex-col items-center ">
          <div className="md:h-[250px] md:w-[250px] my-5 rounded-full border-4 border-[#F112A2]">
            <Image
              className="rounded-full "
              src={speaker.photo}
              height={250}
              width={250}
              alt="speaker image"
            />
          </div>
          <h2 className="font-bold text-2xl mb-2 text-[#222]">
            {speaker.name}
          </h2>
          <p className="text-lg text-[#222] mb-7">Speakers</p>
          <div className="bg-[#F112A2] h-[.5px] w-36 mb-7"></div>
          <p className="text-lg text-[#444] px-5 mb-10 text-center">
            {speaker.biography}
          </p>
          <Social class="border-[#222] text-[#222]" size={40} />
          <div className="mb-10"></div>
        </div>
        <div className="col-span-12 md:col-span-7 mx-3 md:mx-0">
          <h2 className="text-4xl md:text-[57px] text-[#F112A2] font-bold mb-7">
            Biography
          </h2>
          <p className="text-lg text-[#444] mb-4 md:mb-14">{speaker.biography}</p>
          <h2 className="text-4xl md:text-[57px] font-bold mb-7">Personal Experience</h2>
          <p className="text-lg text-[#444] mb-14">{speaker.experience}</p>

          <h4 className="text-lg font-bold mb-2">Business</h4>
          <div className="md:w-1/3 rounded-xl bg-gray-200 h-1 mb-5">
            <div className="bg-[#F112A2] rounded-xl h-1 w-10/12"></div>
          </div>
          <h4 className="text-lg font-bold mb-2">Entrepreneur</h4>
          <div className="md:w-1/3 rounded-xl bg-gray-200 h-1 md:mb-5">
            <div className="bg-[#F112A2] rounded-xl h-1 w-11/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetails;

export const getStaticProps = () => {
  return {
    props: {
      speakers,
    },
  };
};
