
import React from 'react';

const RealisticRosePetal = ({ size = "2rem", style = {} }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <defs>
            <linearGradient id="petalGradient" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#D2042D" />
                <stop offset="50%" stopColor="#800000" />
                <stop offset="100%" stopColor="#5a0000" />
            </linearGradient>
            <filter id="petalShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2" />
            </filter>
        </defs>
        <g filter="url(#petalShadow)">
            {/* Main Petal Body with organic curve */}
            <path
                d="M50 15 C 20 10, 5 40, 15 70 C 25 90, 50 95, 55 95 C 75 95, 95 80, 85 50 C 80 20, 70 15, 50 15 Z"
                fill="url(#petalGradient)"
            />
            {/* Subtle highlight for velvet texture */}
            <path
                d="M45 20 C 30 20, 20 40, 25 60 C 28 75, 45 80, 50 80 C 60 80, 70 65, 65 40 C 60 25, 55 20, 45 20 Z"
                fill="rgba(255, 255, 255, 0.1)"
                filter="blur(2px)"
            />
            {/* Vein texture */}
            <path
                d="M50 95 Q 50 60 50 20"
                stroke="#3e0000"
                strokeWidth="0.5"
                opacity="0.3"
                fill="none"
            />
            <path
                d="M50 60 Q 30 50 25 40"
                stroke="#3e0000"
                strokeWidth="0.5"
                opacity="0.2"
                fill="none"
            />
            <path
                d="M50 60 Q 70 50 75 40"
                stroke="#3e0000"
                strokeWidth="0.5"
                opacity="0.2"
                fill="none"
            />
        </g>
    </svg>
);

export default RealisticRosePetal;
