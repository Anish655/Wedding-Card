import React from 'react';
import { motion } from 'framer-motion';

const FloatingNav = ({ onBrideClick, onGroomClick }) => {
  return (
    <div className="floating-nav">
      <motion.button
        className="nav-btn bride-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onBrideClick}
      >
        <span>👰</span> Bride
      </motion.button>

      <motion.button
        className="nav-btn groom-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onGroomClick}
      >
        <span>🤵</span> Groom
      </motion.button>

      <style>{`
        .floating-nav {
          position: fixed;
          top: 50%;
          left: 0;
          width: 100%;
          transform: translateY(-50%);
          /* Removed flex display for desktop to allow absolute positioning of children */
          height: 0; /* Zero height container to avoid blocking clicks in the middle */
          z-index: 100;
          pointer-events: none;
        }

        .nav-btn {
          pointer-events: auto;
          position: absolute; /* Explicit positioning */
          top: 50%;
          transform: translateY(-50%);
          background: var(--color-primary);
          color: var(--color-secondary);
          border: 3px double var(--color-secondary);
          padding: 0.8rem 1.2rem; /* Restored from git history */
          border-radius: 30px;
          cursor: pointer;
          font-family: 'Cinzel', serif;
          /* font-size removed to match git history (likely inherits or default) */
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.5rem; /* Restored gap */
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          transition: background 0.3s, transform 0.2s;
        }
        
        /* Specific positioning for each button */
        .bride-btn {
            left: 20px;
        }
        
        .groom-btn {
            right: 20px;
            /* Reset any potential conflict */
            left: auto; 
        }

        .nav-btn:hover {
          background: #5a0000;
          /* We need to re-apply the translateY on hover because transform is overwritten */
          transform: translateY(-50%) scale(1.1);
        }

        @media (max-width: 768px) {
          .floating-nav {
            top: auto;
            bottom: 20px;
            height: auto;
            transform: none;
            
            /* Restore flex for mobile centering */
            display: flex;
            justify-content: center;
            gap: 1rem;
            width: 100%;
          }
          
          .nav-btn {
            position: static; /* Reset absolute positioning */
            transform: none;
          }
          
          .nav-btn:hover {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingNav;
