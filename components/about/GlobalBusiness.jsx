import Image from 'next/image';
import React from 'react';
import { Fade } from "react-reveal";
import { aboutBusiness } from '../../data/aboutBusiness';
aboutBusiness
const GlobalBusiness = () => {
    return (
        <div className='max-w-[1296px] mx-auto py-16 md:my-[120px]'>
            <div className="grid grid-cols-12 mx-3 2xl:mx-0 2xl:gap-5 items-center">
                <Fade left>
                <div className='col-span-12 mx-3 xl:mx-0 flex justify-center lg:col-span-4 relative'>
                    <div className='absolute hidden lg:block -top-[182px] -left-[30px] z-10 '>
                    <Image src='/image/about/about-page-img.png' height={440} width={350} alt="about page image" />
                    </div>
                    <div className='absolute hidden lg:block -top-[257px] -left-[100px]'>

                        <Image src="/image/about/about-page-shape.png" height={300} width={200}  alt="about page image" />
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className="col-span-12 lg:col-span-8">
                    <h2 className='mx-4 lg:mx-0 mb-16 md:mb-[64px] text-4xl md:text-[57px] leading-tight font-bold'>Best Global <span className='text-[#F112A2]'>Business</span> Conference</h2>
                    <div className='grid grid-cols-12 gap-3 xl:gap-12'>
                        {
                            aboutBusiness.map(item => (
                                <div key={item.id} className="col-span-12 mx-4 min-h-0 h-full flex items-start gap-5 md:col-span-6 ">
                                    <div className='shadow-xl shadow-[#f112a316] w-24 px-2 py-1 rounded-lg '>
                                        
                                    <Image className=' p-5' src={item.img} alt="icon" width={75} height={75} />
                                    </div>
                                    <div> 
                                        <h3 className='text-lg lg:text-2xl font-bold mb-[1px] text-[#222]'>{item.title}</h3>
                                        <p className='text-sm lg:text-lg text-[#444]'>{item.desc}</p>
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