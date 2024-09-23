import React from 'react';
import './VirtualTour.css';

const VirtualTour = () => {
  const tours = [
    {
      image: '/images/aloe.jpeg',
      use: 'Digestive Health',
      description: 'Explore plants that improve digestion and enhance gut health.',
      tourLink: '#', // Replace with actual tour link
    },
    {
      image: '/images/ech.jpeg',
      use: 'Immunity Boosting',
      description: 'Discover herbs that help boost your immune system.',
      tourLink: '#', // Replace with actual tour link
    },
    {
      image: '/images/ech.jpeg',
      use: 'Skin Care',
      description: 'Learn about medicinal plants that promote healthy skin.',
      tourLink: '#', // Replace with actual tour link
    },
    // Add more tours as needed
     {
      image: '/images/ech.jpeg',
      use: 'Skin Care',
      description: 'Learn about medicinal plants that promote healthy skin.',
      tourLink: '#', // Replace with actual tour link
    },
  ];

  return (
    <section className="virtual-tour-section">
      <h2 className="virtual-tour-heading">Take a Virtual Tour</h2>
      <div className="tour-grid">
        {tours.map((tour, index) => (
          <div key={index} className="tour-card">
            <img src={tour.image} alt={tour.use} className="tour-image" />
            <div className="tour-details">
              <h3 className="tour-use">{tour.use}</h3>
              <p className="tour-description">{tour.description}</p>
              <button className="start-tour-button" onClick={() => window.location.href = tour.tourLink}>
                Start Tour
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="tour-grid">
        {tours.map((tour, index) => (
          <div key={index} className="tour-card">
            <img src={tour.image} alt={tour.use} className="tour-image" />
            <div className="tour-details">
              <h3 className="tour-use">{tour.use}</h3>
              <p className="tour-description">{tour.description}</p>
              <button className="start-tour-button" onClick={() => window.location.href = tour.tourLink}>
                Start Tour
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VirtualTour;
