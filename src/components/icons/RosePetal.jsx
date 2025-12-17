
import React from 'react';

const RosePetal = ({ size = "2rem", style = {} }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <path
            d="M50 10 C 20 10, 10 40, 10 60 C 10 85, 40 95, 50 95 C 60 95, 90 85, 90 60 C 90 40, 80 10, 50 10 Z"
            fill="#800000"
            fillOpacity="0.9"
        />
        <path
            d="M50 10 C 50 10, 30 30, 30 60 C 30 80, 50 95, 50 95"
            stroke="#5a0000"
            strokeWidth="2"
            fill="none"
        />
    </svg>
);

export default RosePetal;
