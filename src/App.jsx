import React from 'react';
import FlowerRain from './components/FlowerRain';
import Hero from './components/Hero';
import FloatingNav from './components/FloatingNav';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Location from './components/Location';
import BackgroundWrapper from './components/BackgroundWrapper';
import './App.css';

function App() {
  return (
    <BackgroundWrapper>
      <div className="app-container">
        <FlowerRain />
        <FloatingNav />
        <div className="content-container">
          <Hero />
          <Timeline />
          <Gallery />
          <Location />
        </div>
      </div>
    </BackgroundWrapper>
  );
}

export default App;
