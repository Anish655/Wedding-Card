
import React from 'react';

const Location = () => {
  return (
    <section id="location" className="location-section">
      <h2>Reception Venue</h2>

      <div className="venue-details">
        <h3>CB Market Community Hall</h3>
        <p>C.B Market 2nd floor, Action Area-1</p>
        <p>New Town, Kolkata-700156</p>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376.213088052809!2d88.46536403312447!3d22.57761911140072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027585d702a537%3A0x6e39760c7071c3da!2sCB%20Community%20Hall%20Newtown!5e0!3m2!1sen!2sin!4v1766004912239!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Venue Map"
        ></iframe>
      </div>

      <div className="rsvp-msg">
        <p>We eagerly await your presence!</p>
        <p style={{ marginBottom: '0.5rem' }}>Contact:</p>
        <div className="contact-numbers" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
          <a href="tel:+919163040783" style={{ color: 'inherit', textDecoration: 'none' }}>+91 91630 40783</a>
          <a href="tel:+916292303439" style={{ color: 'inherit', textDecoration: 'none' }}>+91 62923 03439</a>
          <a href="tel:+917980651193" style={{ color: 'inherit', textDecoration: 'none' }}>+91 79806 51193</a>
        </div>
      </div>

      <style>{`
        .location-section {
          margin: 2rem 1rem;
          color: var(--color-primary); 
          padding: 4rem 2rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .location-section {
            background-color: rgba(255, 253, 208, 0.9); /* Cream background for visibility */
            border-radius: 1rem;
          }
        }

        .location-section h2 {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--color-primary); /* Changed to primary */
        }

        .venue-details {
          margin-bottom: 2rem;
        }

        .venue-details h3 {
          font-size: 1.8rem;
          font-family: 'Noto Serif Bengali', serif;
        }

        .map-container {
          max-width: 800px;
          margin: 0 auto 3rem;
          border: 2px solid var(--color-secondary);
          border-radius: 10px;
          overflow: hidden;
        }

        .rsvp-msg {
          font-size: 1.5rem;
          font-family: 'Cinzel', serif;
        }

        .contact {
          font-size: 1.2rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default Location;
