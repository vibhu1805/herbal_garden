// ExplorePlants.js
/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExplorePlants.css';

const ExplorePlants = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    habitat: '',
    medicinalUses: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/plants');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        console.log('Fetched plants:', data); // Debugging line
        setPlants(data);
        setFilteredPlants(data);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching plants: ${error.message}`);
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  useEffect(() => {
    let results = plants;

    if (searchTerm) {
      results = results.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.habitat) {
      results = results.filter(plant =>
        plant.habitat?.some(h => h.toLowerCase().includes(filters.habitat.toLowerCase()))
      );
    }

    if (filters.medicinalUses) {
      results = results.filter(plant =>
        plant.medicinalUses?.some(use =>
          use.toLowerCase().includes(filters.medicinalUses.toLowerCase())
        )
      );
    }

    setFilteredPlants(results);
  }, [searchTerm, filters, plants]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <h1>Explore Plants</h1>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search plants..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="filters">
            <label>
              Habitat:
              <input
                type="text"
                name="habitat"
                value={filters.habitat}
                onChange={handleFilterChange}
              />
            </label>
            <label>
              Medicinal Uses:
              <input
                type="text"
                name="medicinalUses"
                value={filters.medicinalUses}
                onChange={handleFilterChange}
              />
            </label>
          </div>

          <ul className="plant-list">
            {filteredPlants.length > 0 ? (
              filteredPlants.map(plant => (
                <li key={plant._id} className="plant-card">
                  <Link to={`/plants/${plant._id}`} className="plant-link">
                    <h2>{plant.name}</h2>
                    {plant.images[0] && <img src={plant.images[0]} alt={plant.name} />}
                    <p>{plant.botanicalName}</p>
                  </Link>
                </li>
              ))
            ) : (
              <p>No plants available.</p>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default ExplorePlants;
*/
// ExplorePlants.js
// ExplorePlants.js
// ExplorePlants.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExplorePlants.css';
import search from "../images/search.png";
import leaf from '../images/leaf.png'; // Assuming you have an icon file in assets folder
import sr from "../images/sr.png";

const ExplorePlants = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for filters
  const [medicinalUse, setMedicinalUse] = useState('');
  const [region, setRegion] = useState('');
  const [plantType, setPlantType] = useState('');
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('https://herbal-garden.onrender.com/api/plants');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        setPlants(data);
        setFilteredPlants(data); // Initialize filteredPlants with all plants
        setLoading(false);
      } catch (error) {
        setError(`Error fetching plants: ${error.message}`);
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  useEffect(() => {
    let results = plants;

    // Filter by search term
    if (searchTerm) {
      results = results.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by medicinal use
    if (medicinalUse) {
      results = results.filter(plant =>
        plant.medicinalUses?.some(use => use.toLowerCase().includes(medicinalUse.toLowerCase()))
      );
    }

    // Filter by region
    if (region) {
      results = results.filter(plant =>
        plant.habitat?.toLowerCase().includes(region.toLowerCase())
      );
    }

    // Filter by plant type
    if (plantType) {
      results = results.filter(plant =>
        plant.type?.toLowerCase() === plantType.toLowerCase()
      );
    }

    setFilteredPlants(results);
  }, [searchTerm, medicinalUse, region, plantType, plants]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search term and filters are already handled in useEffect
  };

  return (
    <div className="explore-plants-container">
      <h1 className="explore-heading">Browse Medicinal Plants</h1>
      
      <form className="search-bar" onSubmit={handleSearch}>
        <div className="search-bar-container">
          <img src={search} alt="Search Icon" className="leaf-icon" />
          
          <input
            type="text"
            placeholder="Search medicinal plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="medicinal-use"
            value={medicinalUse}
            onChange={(e) => setMedicinalUse(e.target.value)}
          >
            <option value="">Medicinal Use</option>
            <option value="Digestive Health">Digestive Health</option>
            <option value="Immunity">Immunity</option>
            <option value="Skin Care">Skin Care</option>
            <option value="Respiratory Health">Respiratory Health</option>
          </select>

          <select
            className="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">Region</option>
            <option value="India">India</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
          </select>

          <select
            className="type"
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
          >
            <option value="">Plant Type</option>
            <option value="Herb">Herb</option>
            <option value="Shrub">Shrub</option>
            <option value="Tree">Tree</option>
            <option value="Climber">Climber</option>
          </select>
          
          <button type="submit" className="search-button">
            <img src={sr} alt="Search Icon" className="leaf-icon" />
          </button>
        </div>
      </form>
      
      {/* Plant Grid */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="plants-grid">
          {filteredPlants.length > 0 ? (
            filteredPlants.map(plant => (
              <div key={plant._id} className="plants-card">
                <Link to={`/plants/${plant._id}`}>
                  {plant.images[0] && <img src={plant.images[0]} alt={plant.name} />}
                  <h2>{plant.name}</h2>
                  <p>{plant.medicinalUses.join(', ')}</p>
                  <button className="learn-more-btn">Learn More</button>
                </Link>
              </div>
            ))
          ) : (
            <p>No plants available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExplorePlants;
