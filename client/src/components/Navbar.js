// NavigationBar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';


import './NavigationBar.css'; // Custom CSS for styling
import logo from "../images/logo.png";

const NavigationBar= () => {
  const authContext = useContext(AuthContext);
   if (!authContext) {
    return <div>Error: AuthContext is not available</div>;
  }

  const { isLoggedIn, userData, logout } = authContext;
  return(
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="menu-items mb-0 mx-2">
        <li><Link to="/">Home</Link></li>
       
        <li><Link to="/plants">Explore Plants</Link></li>
        <li><Link to="/virtual tour">Virtual Tours</Link></li>
        <li><Link to="/about">About Us</Link></li>
         {isLoggedIn ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
      </ul>
      
    </nav>
  );
};

export default NavigationBar;
