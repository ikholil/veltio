import Image from "next/image";
import React, { useState } from "react";
import { conference } from "../../data/conference";
conference;
const Tab = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };
  return (
    <div className="max-w-[856px] mt-5 md:mt-14 mb-5 md:mb-[120px]">
      <div className="flex justify-center gap-4 mx-2 md:mx-0">
        {conference.map((speaker, i) => (
          <div
            key={i}
            id={speaker.id}
            className={`text-center p-2 md:px-10 md:py-8 cursor-pointer rounded-md shadow-lg ${
              currentTab == speaker.id ? "bg-[#5A00CC]" : 'bg-white'
            }`}
            disabled={currentTab === `${speaker.id}`}
            onClick={() => handleTabClick(speaker.id)}
          >
            <h4 className={`text-lg md:text-2xl font-bold mb-2 ${currentTab === speaker.id? 'text-white': 'text-[#5A00CC]'}`}>{speaker.day}</h4>
            <p className={`text-sm md:text-lg ${currentTab === speaker.id? 'text-white': 'text-black'}`}>{speaker.date}</p>
          </div>
        ))}
      </div>
      <div className="content mt-5 md:mt-[60px]">
        {conference.map((conference, i) => (
          <div key={i}>
            {currentTab === `${conference.id}` && (
                <div className="flex  mx-2 md:mx-0 flex-col gap-7">
                    {
                        conference.speakers.map((item) => (
                            <div key={item.title} className="bg-white p-[22px] flex items-center flex-col md:flex-row gap-3 md:gap-8 rounded-[10px] shadow-lg">
                                
                                <div className="md:border-r pr-8 border-[#5A00CC]">
                                <Image src={item.img} className="rounded-md" height={700} width={700} alt="conference speaker" />
                                </div>
                                <div>
                                    <p className="text-lg font-bold">{item.time}</p>
                                    <h3 className="text-2xl font-bold mb-[6px] primary-color">{item.title}</h3>
                                    <p className="text-lg text-[#444444]">{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
