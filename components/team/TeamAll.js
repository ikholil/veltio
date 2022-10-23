import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { speakers } from "../../data/speakers";
import Social from "../others/Social";
import { Fade, RubberBand } from "react-reveal";

const Team = () => {
  const router = useRouter()
  const handleClick = (id) => {
      router.push(`/speaker/${id}`)
  }
  return (
    <div>
         <div className="bg-[url('/image/team/allteam-bg-dot.png')] min-h-[850px] top-7 relative flex items-center justify-center">
     
      <div className="py-12   max-w-[1296px] mx-auto z-10">
       <Fade left>
       <h2 className="text-center text-4xl md:text-[57px] mt-10 font-extrabold mb-7">
          Meet Our Event <span className="text-[#F112A2]"> Speakers</span>
        </h2>
        <p className=" text-lg px-2 text-center mt-10 mb-8 md:mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum{" "}
          <br /> urna sed erat tortor aliquam ipsum
        </p>
      
        <div className="flex flex-col flex-wrap md:flex-row gap-6 justify-center items-center py-5 text-center">
          {speakers.map((person) => (
            <div
              key={person.name}
              onClick={() => handleClick(person.id)}
              className="hover:bg-[#F112A2]  z-10 p-[7px] lg:w-[306px] flex flex-col cursor-pointer items-center rounded-lg relative card"
            >
             
              <Image
                width={300}
                className="rounded-lg"
                height={420}
                src={person.photo}
                alt="team member"
              />
           
              <div className="bg-[#5A00CC] rounded-b-lg mx-auto w-[96%] pt-10 pb-3 rounded-t-[50%] transition-all card-inner">
                <h4 className="text-white text-2xl  font-bold">
                  {person.name}
                </h4>
                <p className="text-white text-lg my-2">Speakers</p>
                <Social class="text-white" size={40} />
              </div>
            </div>
          ))}
       
        </div>
        </Fade>
      </div>
    </div>
    </div>
   
  );
};

export default Team;
