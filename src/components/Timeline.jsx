
import React from 'react';
import { motion } from 'framer-motion';
import palkiMotif from '../assets/palki_motif.png';
import shehnaiMotif from '../assets/shehnai_motif.png';

const events = [
  {
    title: 'Wedding Ceremony',
    date: '5th February 2026',
    time: 'Thursday',
    icon: shehnaiMotif,
    alt: 'Shehnai'
  },
  {
    title: 'Reception',
    date: '8th February 2026',
    time: 'Sunday Evening',
    icon: palkiMotif,
    alt: 'Palki'
  }
];

const TimelineElement = ({ title, date, time, icon, alt, index }) => (
  <motion.div
    className="timeline-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <div className="event-icon">
      <img src={icon} alt={alt} className="event-icon-img" />
    </div>
    <h3>{title}</h3>
    <p className="date-time">{date} | {time}</p>
  </motion.div>
);

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <h2 className="section-title">Wedding Schedule</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <TimelineElement key={index} {...event} index={index} />
        ))}
      </div>

      <style>{`
        .timeline-section {
          /* background-color: var(--color-primary); Removed for global bg */
          color: var(--color-primary); /* Changed to primary for contrast on light bg */
          padding: 4rem 2rem;
          text-align: center;
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: var(--color-primary); /* Dark text on light bg */
          border-bottom: 2px solid var(--color-secondary);
          display: inline-block;
          padding-bottom: 0.5rem;
        }

        .timeline-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-card {
          background: rgba(255, 255, 255, 0.85);
          border: 2px solid var(--color-primary);
          outline: 1px solid var(--color-secondary);
          outline-offset: -6px;
          padding: 2rem;
          border-radius: 8px;
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          backdrop-filter: blur(5px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          position: relative;
        }

        .timeline-card h3 {
          font-family: 'Noto Serif Bengali', serif;
          font-size: 1.8rem;
          margin: 0.5rem 0;
          color: var(--color-primary); /* Dark text */
        }

        .timeline-card .date-time {
          font-size: 1.2rem;
          color: #5a0000; /* Darker red for readability */
          font-weight: bold;
        }

        .event-icon-img {
          width: 80px;
          height: auto;
          mix-blend-mode: multiply;
          filter: sepia(0.5) hue-rotate(-30deg) saturate(1.5);
          margin-bottom: 0.5rem;
        }

      `}</style>
    </section>
  );
};

export default Timeline;
