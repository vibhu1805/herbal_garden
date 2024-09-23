// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';
import search from "../images/search.png"
import leaf from '../images/leaf.png'; // Assuming you have an icon file in assets folder
import sr from "../images/sr.png"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [medicinalUse, setMedicinalUse] = useState('');
  const [region, setRegion] = useState('');
  const [plantType, setPlantType] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement the logic to handle search
    console.log({
      searchTerm,
      medicinalUse,
      region,
      plantType,
    });
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="search-bar-container">
          <img src={search} alt="Leaf Icon" className="leaf-icon" />
        <input
          type="text"
          placeholder="Search medicinal plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select className="medicinal-use" value={medicinalUse} onChange={(e) => setMedicinalUse(e.target.value)}>
          <option value="">Medicinal Use</option>
          <option value="Digestive Health">Digestive Health</option>
          <option value="Immunity">Immunity</option>
          <option value="Skin Care">Skin Care</option>
          <option value="Respiratory Health">Respiratory Health</option>
        </select>

        <select className="region" value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">Region</option>
          <option value="India">India</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
        </select>
        <select className="type" value={plantType} onChange={(e) => setPlantType(e.target.value)}>
        <option value="">Plant Type</option>
        <option value="Herb">Herb</option>
        <option value="Shrub">Shrub</option>
        <option value="Tree">Tree</option>
        <option value="Climber">Climber</option>
      </select>
       <img src={leaf} alt="Leaf Icon" className="leaf-icon" />
        <button type="submit" className="search-button"> <img src={sr} alt="Leaf Icon" className="leaf-icon" /></button>
      </div>
    </form>
  );
};

export default SearchBar;
