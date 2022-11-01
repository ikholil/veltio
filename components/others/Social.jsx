import React from 'react';
import {CgFacebook} from 'react-icons/cg'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {TiSocialLinkedin} from 'react-icons/ti'
const Social = (props) => {
    return (
        <div className='flex justify-center gap-4'>
            <CgFacebook className={`cursor-pointer hover:text-white hover:border-[#F112A2] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[#F112A2] ${props.classes}`} size={props.size} />
            <AiOutlineInstagram className={`cursor-pointer hover:text-white hover:border-[#F112A2] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[#F112A2] ${props.classes}`} size={props.size} />
            <BsTwitter className={`cursor-pointer hover:text-white hover:border-[#F112A2] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[#F112A2] ${props.classes}`} size={props.size} />
            <TiSocialLinkedin className={`cursor-pointer hover:text-white hover:border-[#F112A2] duration-500   border-[1px] rounded-full p-2 transition-colors hover:bg-[#F112A2] ${props.classes}`} size={props.size} />
        </div>
    );
};

export default Social;