import React from 'react';
import { motion } from 'framer-motion';
import SimpleGoldDivider from './icons/SimpleGoldDivider';
import '../App.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="card-container">
        <motion.div
          className="wedding-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Top Divider */}
          <div className="divider-container top-divider" style={{ width: '40%', margin: '0 auto 1.5rem', opacity: 0.9 }}>
            <SimpleGoldDivider className="w-full" />
          </div>

          {/* Main Content */}
          <div className="card-content">
            <h3 className="intro-text">We Cordially Invite You to the Reception of</h3>

            <h1 className="couple-names">
              <span className="groom">Anish</span>
              <span className="separator">&</span>
              <span className="bride">Suvasree</span>
            </h1>

            <div className="parents-section">
              <div className="groom-parents">
                <h4>Son of</h4>
                <p>Mr. Biplab Sarkar</p>
                <p>Mrs. Debjani Sarkar</p>
              </div>
              <div className="divider">♥</div>
              <div className="bride-parents">
                <h4>Daughter of</h4>
                <p>Mr. Sumit Basu</p>
                <p>Mrs. Kaberi Basu</p>
              </div>
            </div>

            <div className="wedding-date">
              <h2>Wedding Ceremony</h2>
              <p className="date">5th February 2026</p>
              <p className="time">Thursday</p>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="divider-container bottom-divider" style={{ width: '40%', margin: '1.5rem auto 0', opacity: 0.9, transform: 'scaleX(-1) rotate(180deg)' }}>
            <SimpleGoldDivider className="w-full" />
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          position: relative;
          z-index: 10;
          /* Background handled globally */
        }

        .card-container {
          width: 100%;
          max-width: 600px;
          perspective: 1000px;
        }

        .wedding-card {
          background: rgba(255, 253, 208, 0.95);
          /* Ornamental Border */
          border: 3px double var(--color-primary);
          outline: 2px solid var(--color-secondary);
          outline-offset: -10px;
          border-radius: 15px;
          padding: 3rem 2rem;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          position: relative;
          color: var(--color-primary);
          backdrop-filter: blur(5px);
        }

        .wedding-card::before,
        .wedding-card::after {
          content: '❧';
          position: absolute;
          font-size: 2rem;
          color: var(--color-secondary);
        }

        .wedding-card::before {
          top: 10px;
          left: 10px;
          transform: rotate(-45deg);
        }

        .wedding-card::after {
          bottom: 10px;
          right: 10px;
          transform: rotate(135deg);
        }

        .intro-text {
          font-family: 'Cinzel', serif;
          font-size: 1.2rem;
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .couple-names {
          font-family: 'Cinzel', serif;
          font-size: 3.5rem;
          margin: 2rem 0;
          line-height: 1.2;
          color: var(--color-primary);
        }

        .couple-names span {
          display: block;
        }

        .couple-names .separator {
          font-size: 2rem;
          color: var(--color-secondary);
          margin: 0.5rem 0;
        }

        .parents-section {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 3rem 0;
          font-size: 0.9rem; 
        }

        .parents-section h4 {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .wedding-date {
          margin-top: 3rem;
          border-top: 1px solid var(--color-secondary);
          padding-top: 2rem;
        }

        .wedding-date h2 {
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .date {
          font-size: 1.5rem;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .couple-names {
            font-size: 2.5rem;
          }
          
          .parents-section {
            flex-direction: column;
            gap: 1.5rem;
          }

          .divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
