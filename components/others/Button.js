import React from 'react';

const Button = (props) => {
    return (
        <button className={`rounded-md px-4 py-2 lg:px-10 md:py-3 font-bold ${props.class}`}>
            {props.name}
        </button>
    );
};

export default Button;