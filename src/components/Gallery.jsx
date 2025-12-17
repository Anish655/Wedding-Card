
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cardFront from '../assets/card_front.jpg';
import cardInside from '../assets/card_inside.jpg';
import cardDetails from '../assets/card_details.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: cardFront, label: 'Invitation Front' },
    { src: cardInside, label: 'Invitation English' },
    { src: cardDetails, label: 'Invitation Bengali' }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <h2>Digital Invitation</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(img)}
          >
            <div className="image-container">
              <img src={img.src} alt={img.label} className="card-image" />
              <div className="image-overlay">
                <span>{img.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.label} />
              <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-section {
          padding: 4rem 2rem;
          text-align: center;
          /* background: var(--color-bg); Removed for global bg */
          color: var(--color-primary);
        }

        .gallery-section h2 {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .gallery-item {
          border: 2px solid var(--color-secondary);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          background: rgba(255, 255, 255, 0.5); /* Semi-transparent */
          backdrop-filter: blur(2px);
          cursor: pointer;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 400px; /* Fixed height for uniform tiles */
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Shows full image within container without cropping */
          object-position: center;
          transition: transform 0.5s;
          background: rgba(0,0,0,0.1); /* Subtle dark bg for contrast if image is transparent */
        }

        .gallery-item:hover .card-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 0.5rem;
          background: rgba(128, 0, 0, 0.8);
          color: #FFD700;
          font-family: 'Cinzel', serif;
          transform: translateY(100%);
          transition: transform 0.3s;
        }

        .image-container:hover .image-overlay {
          transform: translateY(0);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }

        .modal-content img {
          max-width: 100%;
          max-height: 90vh;
          display: block;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.8);
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
