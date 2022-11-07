import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { speakers } from "../../data/speakers";
import Social from "../others/Social";


const Team = () => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/speakers/${id}`);
  };
  return (
    <div>
      <div className="bg-[url('/image/team/team-bg.png')] bg-no-repeat bg-cover relative flex items-center justify-center">
     
          <div className="pt-[66px] pb-[70px] md:pt-[123px] md:pb-[120px] max-w-[1296px] mx-auto z-10">
            <h2 className="text-center mx-5 text-3xl lg:text-[57px] text-white font-bold mb-5 md:mb-[41px]">
              Meet Our Event Speakers
            </h2>
            <p className="text-white text-base md:text-lg px-2 text-center mb-5 md:mb-[37px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum{" "}
              <br /> urna sed erat tortor aliquam ipsum
            </p>
            <div className="flex flex-col flex-wrap md:flex-row gap-4 justify-center items-center pt-5 text-center">
              {speakers.slice(0, 4).map((person) => (
                <div
                  key={person.name}
                  onClick={() => handleClick(person.id)}
                  className="bg-white p-[7px] mx-2 md:mx-0 lg:w-[306px] flex flex-col cursor-pointer items-center rounded-lg relative card"
                >
                  <Image
                    width={300}
                    className="rounded-lg"
                    height={400}
                    src={person.photo}
                    alt="team member"
                  />

                  <div className="bg-[#5A00CC] w-[95%] pt-10 pb-4 rounded-b-md rounded-t-[50%] transition-all card-inner">
                    <h4 className="text-white text-xl md:text-2xl  font-bold">
                      {person.name}
                    </h4>
                    <p className="text-white text-base md:text-lg my-2">Speakers</p>
                    <Social classes="text-white" size={40} />
                  </div>
                </div>
              ))}
            </div>
          </div>
    
      </div>
    </div>
  );
};

export default Team;
