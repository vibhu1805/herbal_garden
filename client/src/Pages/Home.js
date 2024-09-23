import React, { useState } from "react";
import HeroSection from "../components/HeroSection.js";
import SearchBar from "../components/Searchbar.js";
import FeaturedPlants from "../components/FeaturedPlants.js";
import VirtualTour from "../components/VirtualTour.js";
import Footer from "../components/Footer.js"
const Home = () =>{
    return (
        <div>
            
            <HeroSection/>
            <SearchBar/>
             <FeaturedPlants />
      <VirtualTour/>
            <Footer/> 
            
        </div>
    )
};

export default Home;