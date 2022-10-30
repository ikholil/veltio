import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { speakers } from "../../data/speakers";
import Social from "../others/Social";

const Team = () => {
  const router = useRouter()
  const handleClick = (id) => {
      router.push(`/speaker/${id}`)
  }
  return (
    <div className="relative">
         <div className="bg-[url('/image/team/allteam-bg-dot.png')] bg-no-repeat bg-cover h-full w-screen absolute">
         </div>
      <div className="my-20 md:my-[120px]   max-w-[1296px] mx-auto z-10">
       
       <h2 className="text-center text-3xl md:text-[57px]  font-bold mb-[30px]">
          Meet Our Event <span className="text-[#F112A2]"> Speakers</span>
        </h2>
        <p className=" text-lg px-2 text-center mt-10 mb-8 md:mb-[56px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum{" "}
          <br /> urna sed erat tortor aliquam ipsum
        </p>
      
        <div className="flex flex-col mx-3 lg:mx-0 flex-wrap md:flex-row gap-6 md:gap-y-14 justify-center items-center text-center">
          {speakers.map((person) => (
            <div
              key={person.name}
              onClick={() => handleClick(person.id)}
              className="hover:bg-[#F112A2]  z-10 p-[7px] bg-white shadow-md lg:w-[306px] flex flex-col cursor-pointer items-center rounded-lg relative card"
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
       
      </div>
    
    </div>
   
  );
};

export default Team;
