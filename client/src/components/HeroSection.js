// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover the Healing Power of Medicinal Plants</h1>
        <p>Explore the virtual garden of Ayurvedic, Unani, Siddha, and Homeopathic plants from the comfort of your home.</p>
      <div className="cta-buttons ">
        <ul>
          <li><button className="explore-garden">Explore Garden</button></li>
          <li><button className="start-tour">Start a Virtual Tour</button></li>
          </ul> 
          </div>
        </div>
    </div>
    
        
  );
};

export default HeroSection;
