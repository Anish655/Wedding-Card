import React, { useState } from 'react';
import FlowerRain from './components/FlowerRain';
import Hero from './components/Hero';
import FloatingNav from './components/FloatingNav';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Location from './components/Location';
import BackgroundWrapper from './components/BackgroundWrapper';
import PersonDetailsModal from './components/PersonDetailsModal';
import './App.css';

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const brideDetails = {
    role: 'The Bride',
    name: 'Suvasree',
    description: 'Daughter of Mr. Sumit Basu & Mrs. Kaberi Basu. A wonderful soul who brings joy to everyone around her.'
  };

  const groomDetails = {
    role: 'The Groom',
    name: 'Anish',
    description: 'Son of Mr. Biplab Sarkar & Mrs. Debjani Sarkar. A charming gentleman looking forward to a lifetime of happiness.'
  };

  return (
    <BackgroundWrapper>
      <div className="app-container">
        <FlowerRain />
        <FloatingNav
          onBrideClick={() => setSelectedPerson(brideDetails)}
          onGroomClick={() => setSelectedPerson(groomDetails)}
        />
        <PersonDetailsModal
          isOpen={!!selectedPerson}
          onClose={() => setSelectedPerson(null)}
          person={selectedPerson}
        />
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
