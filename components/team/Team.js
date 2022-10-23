import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { speakers } from "../../data/speakers";
import Social from "../others/Social";
import { Fade } from "react-reveal";

const Team = () => {
  const router = useRouter()
  const handleClick = (id) => {
      router.push(`/speaker/${id}`)
  }
  return (
    <div>
         <div className="bg-[url('/image/team/team-bg.png')] min-h-[850px] relative flex items-center justify-center">
      <div className="bg-gradient-to-r  absolute top-0 from-[#B90568] to-[#F20487] h-full  w-screen opacity-70"></div>
      <Fade bottom>
      <div className="py-12   max-w-[1296px] mx-auto z-10">
        <h2 className="text-center text-4xl md:text-[57px] text-white font-extrabold mb-7">
          Meet Our Event Speakers
        </h2>
        <p className="text-white text-lg px-2 text-center mb-8 md:mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum{" "}
          <br /> urna sed erat tortor aliquam ipsum
        </p>
        <div className="flex flex-col flex-wrap md:flex-row gap-6 justify-center items-center py-5 text-center">
          {speakers.slice(0,4).map((person) => (
            <div
              key={person.name}
              onClick={() => handleClick(person.id)}
              className="bg-white p-[7px] lg:w-[306px] flex flex-col cursor-pointer items-center rounded-lg relative card"
            >
             
              <Image
                width={300}
                className="rounded-lg"
                height={400}
                src={person.photo}
                alt="team member"
              />
           
              <div className="bg-[#5A00CC] w-[95%] pt-10 pb-4 rounded-b-md rounded-t-[50%] transition-all card-inner">
                <h4 className="text-white text-2xl  font-bold">
                  {person.name}
                </h4>
                <p className="text-white text-lg my-2">Speakers</p>
                <Social class="text-white" size={40} />
              </div>
            </div>
          ))}
       
        </div>
      </div>
      </Fade>
    </div>
    </div>
   
  );
};

export default Team;
