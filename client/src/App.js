import "./App.css";
import React, { useContext } from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import ExplorePlants from "./Pages/Explore";
import About from "./Pages/About";

import Signup from "./components/Signup";
import { AuthProvider, AuthContext } from './components/AuthContext'; 
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Navigate,Routes } from 'react-router-dom';
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <>
  
   
    <AuthProvider>
    
      <Navbar/>
      <Routes>
      
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup/>}/>
         <Route exact path="/plants" element={<ExplorePlants/>}/>
        <Route exact path="/about" element={<About/>}/>
      
      </Routes>
      
      </AuthProvider>
    
    </>
  );
}

export default App;
