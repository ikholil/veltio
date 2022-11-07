import Image from "next/image";
import React from "react";
import { contactInfo } from "../../data/contactInfo";
import ContactBg from '../../public/image/contact/contact-info-bg.png'
const ContactInfo = () => {
  return (
    <div className="relative">
      <div className="absolute animate-pulse top-0 right-10">
        <Image
          src={ContactBg}
          height={480}
          width={1600}
          alt="bg dots"
        />
      </div>
      <div className="max-w-[1296px] mx-auto relative mt-16 md:mt-[125px]">
        <div className="text-center">
          <h2 className="text-center mx-3 font-bold  mb-5 md:mb-6 text-3xl md:text-[57px]">
            Contact <span className="text-[#5A00CC]">Information</span>
          </h2>
          <p className=" mx-4 mb-10 md:mb-[60px] text-center text-sm md:text-lg md:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col justify-center xl:justify-between flex-wrap md:flex-row gap-5 mb-[71px] md:mb-[120px]">
          {contactInfo.map((info) => (
            <div
              className="md:px-[30px] md:pt-[30px] md:pb-[25px] p-4 mx-3 md:mx-0 rounded-[10px] shadow-[0px_4px_23px_rgba(173,173,173,0.25)]"
              key={info.id}
            >
              <h3 className="primary-color font-semibold text-xl md:text-[32px] mb-5">
                {info.title}
              </h3>
              <ul>
                <li className="text-[#222] text-base md:text-lg">
                  {" "}
                  <strong>Email: </strong>
                  {info.contacts.email}
                </li>
                <li className="text-[#222] text-base md:text-lg">
                  {" "}
                  <strong>Phone: </strong>
                  {info.contacts.phone}
                </li>
                <li className="text-[#222] text-base md:text-lg">
                  {" "}
                  <strong>Address: </strong>
                  {info.contacts.address}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
