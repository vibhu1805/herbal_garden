// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo1 from "../images/logo1.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <div className="footer-content">
        <div className="company-info">
          <h2 className="company-name">Herbal</h2>
          <div className="company-logo">
            <img src={logo1} alt="Company Logo" className="logo" />
          </div>
          <p className="company-description">
            Providing medicinal plant knowledge for your health and well-being.
          </p>
        </div>
        </div>
        
          </div>
      <div className="center">
        <h4>Quick Links</h4>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="right">
        <input type="email" placeholder="Subscribe to our newsletter" />
        <button>Subscribe</button>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
