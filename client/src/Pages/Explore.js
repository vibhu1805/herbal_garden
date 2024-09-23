import React, { useState } from "react";
import ExplorePlants from "../components/ExplorePlants.js";
import Search from '../components/Searchbar.js'

import Footer from "../components/Footer.js"
const Home = () =>{
    return (
        <div>
            <ExplorePlants/>
            <Footer/> 
            
        </div>
    )
};

export default Home;