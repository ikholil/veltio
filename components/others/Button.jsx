import React from 'react';

const Button = (props) => {
    return (
        <button className={`rounded-md px-4 hover:bg-[#F112A2]  hover:text-white transition-all duration-500 py-2 xl:px-14 xl:py-[18px] font-bold ${props.classes}`}>
            {props.name}
        </button>
    );
};

export default Button;