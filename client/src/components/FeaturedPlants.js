import React from 'react';
import './FeaturedPlants.css';
const FeaturedPlants = () => {
  const plants = [
    { name: 'Tulsi', use: 'It has been traditionally used to treat various inflammatory conditions, such as arthritis, bronchitis, and asthma.', image: '/images/leaves.jpg' },
    { name: 'Neem', use: 'Neem contains chemicals that might help reduce blood sugar levels, kill bacteria, and prevent plaque from forming in the mouth.', image: '/images/neem.jpg' },
    { name: 'Aloe Vera', use: 'Aloe vera has been traditionally used to treat skin injuries (burns, cuts, insect bites, and eczemas) and digestive problems.', image: '/images/aloe.jpeg' },
    { name: 'Turmeric', use: 'Turmeric could be beneficial for pain caused by inflammatory diseases, like arthritis, preventing cancer, stopping DNA mutations.', image: '/images/turmeric.jpeg' },
  ];
  const plants1 = [
    { name: 'Echinacea', use: 'Echinacea could be beneficial for colds, immunity, bronchitis,, upper respiratory infections and to shorten symptoms of the cold.', image: '/images/ech.jpeg' },
    { name: 'Lavender', use: 'Lavender could be beneficial for anxiety, stress, blood pressure, migraine and directly impact mood and cognitive performance..', image: '/images/lavender.jpeg' },
    { name: 'Chamomile', use: 'Chamomile could be beneficial for anxiety, stress, insomnia, cancer and it can also be ingested through liquids, capsules.', image: '/images/chamomile.jpeg' },
    { name: 'Tea tree oil', use: 'Tea tree oil could be beneficial for acne, athlete’s foot cuts, dandruff, insect bites and other inflammatory skin conditions.', image: '/images/tea.jpeg' },

    // Add more plants here
  ];

  return (
    <section className="featured-plants-section">
      <h2 className="featured-heading">Featured Plants</h2>
      <div className="plant-grid">
        {plants.map((plant, index) => (
          <div key={index} className="plant-card">
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <div className="plant-details">
              <h3 className="plant-name">{plant.name}</h3>
              <p className="plant-use">{plant.use}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="plant-grid">
        {plants1.map((plant, index) => (
          <div key={index} className="plant-card">
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <div className="plant-details">
              <h3 className="plant-name">{plant.name}</h3>
              <p className="plant-use">{plant.use}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlants;
