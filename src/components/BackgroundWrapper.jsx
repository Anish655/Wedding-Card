
import React from 'react';
import cardBgClear from '../assets/card_bg_clear.jpg';

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
          background: url(${cardBgClear});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: -1;
        }
        .content-overlay {
          position: relative;
          z-index: 1;
        }
      `}</style>
        </div>
    );
};

export default BackgroundWrapper;
