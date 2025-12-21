
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cardFront from '../assets/card_front_optimized.jpg';
import cardInside from '../assets/card_inside_optimized.jpg';
import cardDetails from '../assets/card_details_optimized.jpg';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    { src: cardFront, label: 'Invitation Front' },
    { src: cardInside, label: 'Invitation English' },
    { src: cardDetails, label: 'Invitation Bengali' }
  ];

  useEffect(() => {
    const nav = document.querySelector('.floating-nav');
    if (nav) {
      if (selectedIndex !== null) {
        nav.style.visibility = 'hidden';
        nav.style.opacity = '0'; // Keep opacity for smooth transition if needed, but visibility is key
      } else {
        nav.style.visibility = 'visible';
        nav.style.opacity = '1';
      }
    }
  }, [selectedIndex]);

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
            onClick={() => setSelectedIndex(index)}
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
        {selectedIndex !== null && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button className="gallery-nav-btn prev-btn" onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
            }}>❮</button>

            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].label}
              />
              <button className="close-btn" onClick={() => setSelectedIndex(null)}>×</button>
            </motion.div>

            <button className="gallery-nav-btn next-btn" onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev + 1) % images.length);
            }}>❯</button>
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
          z-index: 10;
        }

        .gallery-nav-btn {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 3rem;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 5px;
          z-index: 1100;
        }

        .gallery-nav-btn:hover {
            background: rgba(255, 255, 255, 0.4);
            transform: translateY(-50%) scale(1.1);
        }

        .prev-btn {
            left: 20px;
        }

        .next-btn {
            right: 20px;
        }
        
        @media (max-width: 768px) {
            .gallery-nav-btn {
                font-size: 2rem;
                padding: 0.5rem;
                background: rgba(0, 0, 0, 0.3); /* Darker bg for better visibility on mobile */
            }
            .prev-btn { left: 10px; }
            .next-btn { right: 10px; }
        }

      `}</style>
    </section>
  );
};

export default Gallery;
