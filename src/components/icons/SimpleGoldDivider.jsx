import React from 'react';

const SimpleGoldDivider = ({ className = "" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 30"
            className={className}
            preserveAspectRatio="xMidYMid meet"
            style={{ overflow: 'visible' }}
        >
            <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C6A664" />
                    <stop offset="20%" stopColor="#EAD899" />
                    <stop offset="45%" stopColor="#C6A664" />
                    <stop offset="50%" stopColor="#F9F2D3" />
                    <stop offset="55%" stopColor="#C6A664" />
                    <stop offset="80%" stopColor="#EAD899" />
                    <stop offset="100%" stopColor="#C6A664" />
                </linearGradient>
                <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                    <feComposite in="blur" operator="over" in2="SourceGraphic" />
                </filter>
            </defs>

            <g fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" strokeLinecap="round">
                {/* Center Element */}
                <path d="M195 15 L200 10 L205 15 L200 20 Z" fill="url(#goldGradient)" />
                <circle cx="200" cy="15" r="1.5" fill="#FFF" opacity="0.8" />

                {/* Left Wing */}
                <path d="M195 15 C 180 15, 175 10, 160 10 S 140 15, 120 15 S 80 15, 20 15" />
                <path d="M160 10 Q 155 10, 153 13" strokeWidth="1" />
                <path d="M120 15 Q 115 15, 113 18" strokeWidth="1" />
                <circle cx="20" cy="15" r="1.5" fill="url(#goldGradient)" />

                {/* Right Wing */}
                <path d="M205 15 C 220 15, 225 10, 240 10 S 260 15, 280 15 S 320 15, 380 15" />
                <path d="M240 10 Q 245 10, 247 13" strokeWidth="1" />
                <path d="M280 15 Q 285 15, 287 18" strokeWidth="1" />
                <circle cx="380" cy="15" r="1.5" fill="url(#goldGradient)" />
            </g>
        </svg>
    );
};

export default SimpleGoldDivider;
