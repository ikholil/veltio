import Image from "next/image";
import React from "react";
import { contactInfo } from "../../data/contactInfo";
import { Fade } from "react-reveal";
const ContactInfo = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-10">
            <Image src='/image/contact/contact-info-bg.png' height={480} width={1600}  alt="bg dots" />
        </div>
          <div className="max-w-[1296px] mx-auto relative">
        
       <Fade left>
       <div className="text-center">
       <h2 className="text-center font-bold mt-5 md:mt-[130px] mb-[27px] text-2xl md:text-[57px]">
         Contact <span className="text-[#5A00CC]">Information</span>
       </h2>
       <p className=" mx-4 mb-4 md:mb-14 text-center text-sm md:text-lg md:mt-8">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       </p>
       </div>
       </Fade>
       <Fade right>
       <div className="flex flex-col justify-center xl:justify-between flex-wrap md:flex-row gap-5 mb-5 md:mb-[120px]">
         {
             contactInfo.map((info) => (
                 <div className="p-7 mx-3 md:mx-0 rounded-md shadow-xl" key={info.id}>
                     <h3 className="primary-color font-bold text-[32px] mb-5">{info.title}</h3>
                     <ul>
                         <li className="text-[#222] text-lg mb-3"> <strong>Email: </strong>{info.contacts.email}</li>
                         <li className="text-[#222] text-lg mb-3"> <strong>Phone: </strong>{info.contacts.phone}</li>
                         <li className="text-[#222] text-lg mb-3"> <strong>Address: </strong>{info.contacts.address}</li>
                     </ul>
                 </div>
             ))
         }
       </div>
       </Fade>
       
     </div>
   
    </div>
);
};

export default ContactInfo;
