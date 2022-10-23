import Image from 'next/image';
import React from 'react';
import { Fade } from "react-reveal";
import { aboutBusiness } from '../../data/aboutBusiness';
aboutBusiness
const GlobalBusiness = () => {
    return (
        <div className='max-w-[1296px] mx-auto py-10 md:py-28'>
            <div className="grid grid-cols-12 gap-5 items-center">
                <Fade left>
                <div className='col-span-12 mx-3 xl:mx-0 flex justify-center md:col-span-5 relative'>
                    <div className='absolute hidden md:block md:-left-6 z-10 md:-top-16'>
                        <Image src="/image/about/about-page-shape.png" height={300} width={200}  alt="about page image" />
                    </div>
                    <Image src='/image/about/about-page-img.png' height={550} width={450} alt="about page image" />
                </div>
                </Fade>
                <Fade right>
                <div className="col-span-12 md:col-span-7">
                    <h2 className='mx-4 md:mx-0 mb-5 md:mb-16 text-5xl md:text-[57px] leading-tight font-bold'>Best Global <span className='text-[#F112A2]'>Business</span> Conference</h2>
                    <div className='grid grid-cols-12 gap-5'>
                        {
                            aboutBusiness.map(item => (
                                <div key={item.id} className="col-span-12 mx-4 min-h-0 h-full flex items-start gap-5 md:col-span-6 ">
                                    <div className='shadow-xl shadow-[#f112a316] w-24 px-2 py-1 rounded-lg '>
                                        
                                    <Image className=' p-5' src={item.img} alt="icon" width={75} height={75} />
                                    </div>
                                    <div> 
                                        <h3 className='text-2xl font-bold mb-1 text-[#222]'>{item.title}</h3>
                                        <p className='text-lg text-[#444]'>{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default GlobalBusiness;