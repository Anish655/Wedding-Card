import React from 'react';
import cardBgDesktop from '../assets/card_bg_desktop.png';
import cardBgMobile from '../assets/card_bg_mobile.png';

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="global-background">
      <div className="bg-image" />
      <div className="content-overlay">
        {children}
      </div>
      <style>{`
        .global-background {
          position: relative;
          min-height: 100vh;
          width: 100%;
        }
        .bg-image {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${cardBgDesktop});
          background-size: 100% 100%;
          background-position: center;
          background-attachment: fixed;
          z-index: -1;
        }
        .content-overlay {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .bg-image {
            background-image: url(${cardBgMobile});
            background-size: 100% 100%;
            background-position: center;
            background-attachment: scroll;
            height: 100vh;
            height: 100dvh;
          }
          /* Ensure the body or container background color fills the rest */
          .global-background {
             background-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundWrapper;
