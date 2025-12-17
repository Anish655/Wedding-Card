
import React from 'react';

const OrnamentalDivider = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 300 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '80%', height: 'auto', margin: '1rem auto' }}
    >
        <path
            d="M10 20 C 50 5, 50 35, 90 20 S 130 35, 150 20 S 210 5, 250 20 S 290 35, 300 20"
            stroke="#FFD700"
            strokeWidth="2"
            fill="none"
        />
        <circle cx="150" cy="20" r="5" fill="#800000" stroke="#FFD700" strokeWidth="2" />
        <circle cx="75" cy="20" r="3" fill="#800000" />
        <circle cx="225" cy="20" r="3" fill="#800000" />
        <path
            d="M140 20 Q 150 10, 160 20 Q 150 30, 140 20 Z"
            fill="#800000"
        />
    </svg>
);

export default OrnamentalDivider;
