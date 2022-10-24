import React from 'react';

const Button = (props) => {
    return (
        <button className={`rounded-md px-4 py-2 xl:px-14 xl:py-[18px] font-bold ${props.class}`}>
            {props.name}
        </button>
    );
};

export default Button;