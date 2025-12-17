
import React from 'react';

const RealisticMarigold = ({ size = "2rem", style = {} }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <defs>
            <radialGradient id="marigoldGradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                <stop offset="0%" stopColor="#FFA500" />
                <stop offset="60%" stopColor="#FF8C00" />
                <stop offset="100%" stopColor="#8B4500" />
            </radialGradient>
            <radialGradient id="centerGradient" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#8B4513" />
                <stop offset="100%" stopColor="#5D4037" />
            </radialGradient>
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                <feOffset dx="1" dy="1" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#dropShadow)">
            {/* Layers of petals for realistic volume */}
            {/* Outer Layer */}
            {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((angle, i) => (
                <path
                    key={`outer-${i}`}
                    d="M50 50 Q 80 20 50 5 Z"
                    fill="url(#marigoldGradient)"
                    transform={`rotate(${angle} 50 50)`}
                    opacity="0.95"
                />
            ))}
            {/* Middle Layer */}
            {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350].map((angle, i) => (
                <path
                    key={`mid-${i}`}
                    d="M50 50 Q 75 25 50 15 Z"
                    fill="#FFD700"
                    transform={`rotate(${angle} 50 50)`}
                />
            ))}
            {/* Inner Layer */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                <path
                    key={`inner-${i}`}
                    d="M50 50 Q 65 35 50 25 Z"
                    fill="#FFA500"
                    transform={`rotate(${angle} 50 50)`}
                />
            ))}
            {/* Center */}
            <circle cx="50" cy="50" r="8" fill="url(#centerGradient)" />
            {/* Texture dots */}
            <circle cx="48" cy="48" r="1" fill="#FFD700" opacity="0.6" />
            <circle cx="52" cy="52" r="1" fill="#FFD700" opacity="0.6" />
            <circle cx="48" cy="52" r="1" fill="#FFD700" opacity="0.6" />
            <circle cx="52" cy="48" r="1" fill="#FFD700" opacity="0.6" />
        </g>
    </svg>
);

export default RealisticMarigold;
