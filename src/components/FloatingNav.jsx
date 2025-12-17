
import React from 'react';
import { motion } from 'framer-motion';

const FloatingNav = () => {
  const scrollToSection = (className) => {
    const element = document.querySelector(className);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="floating-nav">
      <motion.button
        className="nav-btn bride-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection('.bride')}
      >
        <span>👰</span> Bride
      </motion.button>

      <motion.button
        className="nav-btn groom-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection('.groom')}
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
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          z-index: 100;
          pointer-events: none; /* Let clicks pass through container */
        }

        .nav-btn {
          pointer-events: auto; /* Enable clicks on buttons */
          background: var(--color-primary);
          color: var(--color-secondary);
          border: 3px double var(--color-secondary);
          padding: 0.8rem 1.2rem;
          border-radius: 30px;
          cursor: pointer;
          font-family: 'Cinzel', serif;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          transition: background 0.3s, transform 0.2s;
        }

        .nav-btn:hover {
          background: #5a0000;
        }

        @media (max-width: 768px) {
          .floating-nav {
            top: auto;
            bottom: 20px;
            transform: none;
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingNav;
