
import React from 'react';

const Location = ({ isBorJatri }) => {
  return (
    <section id="location" className="location-section">
      <h2>{isBorJatri ? "Wedding & Reception Venues" : "Reception Venue"}</h2>

      {isBorJatri && (
        <>
          <div className="venue-details">
            <h3>Wedding Venue</h3>
            <p>Calcutta Orphanage Computer Training Centre</p>
            <p>12/1, Balaram Ghosh Street, Shyambazar, Kolkata - 700004</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.8687360536172!2d88.37014316962131!3d22.59873293685026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027631d74701e3%3A0x342407e53f5c3c93!2sCalcutta%20Orphanage%20Computer%20Training%20Centre!5e0!3m2!1sen!2sin!4v1766909257401!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Map"
            ></iframe>
          </div>
          <div style={{ margin: "3rem 0" }} /> {/* Spacer between maps */}
        </>
      )}

      <div className="venue-details">
        <h3>{isBorJatri ? "Reception Venue" : "CB Market Community Hall"}</h3>
        {isBorJatri && <p style={{ fontWeight: 'bold' }}>CB Market Community Hall</p>}
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
          title="Reception Venue Map"
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
          margin: 4rem auto;
          max-width: 900px;
          width: 90%;
          color: var(--color-primary); 
          padding: 4rem 2rem;
          text-align: center;
          /* Added background for readability on all screens */
          background-color: rgba(255, 253, 208, 0.85); 
          backdrop-filter: blur(5px);
          border-radius: 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .location-section {
            background-color: rgba(255, 253, 208, 0.9); /* Cream background for visibility */
            border-radius: 1rem;
            width: 95%; /* Slightly wider on mobile */
            padding: 2rem 1rem;
          }
        }

        .location-section h2 {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--color-primary); /* Changed to primary */
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.9), 0 0 10px rgba(255, 253, 208, 0.8); /* Halo to pop against text */
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
