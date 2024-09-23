/*import React, { useState } from 'react';
import './AboutUs.css'; // Create this CSS file for styling
import owner from '../images/owner.jpg';

const AboutUs = () => {
  // State to capture form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to store the response message from the server
  const [responseMessage, setResponseMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  
  console.log('Submitting form with data:', formData);
  
  try {
    const res = await fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log('Response status:', res.status);
    const data = await res.json();
    console.log('Response data:', data);
    setResponseMessage(data.message || 'Message sent successfully!');
  } catch (error) {
    console.error('Error:', error);
    setResponseMessage('Error sending message.');
  }
};



  return (
    <div className="about-us">
      {}
      <header className="about-header">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">Get to know us better</p>
      </header>

      {}
      <section className="mission-statement">
        <div className="mission-content">
          <h2 className="mission-heading">Our Mission</h2>
          <p className="mission-text">
            We aim to create a comprehensive virtual herbal garden platform, bringing detailed information about medicinal plants, their uses, and cultivation methods, to users in an engaging and interactive way.
          </p>
        </div>
      </section>

      {}
      <section className="team-section">
        <h2 className="team-heading">Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={owner} alt="Team Member" className="team-photo" />
            <h3 className="team-name">Vibhuti Sharma</h3>
            <p className="team-position">Full Stack Developer</p>
            <p className="team-bio">
              Vibhuti is a skilled full-stack developer with a passion for building interactive web applications.
            </p>
          </div>
        </div>
        {}
      </section>

      {}
      <section className="contact-section">
        <div className="contact-column">
          <h2 className="contact-heading">Contact Us</h2>
          <p>Email: vibhutisharma483@gmail.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: Online</p>
        </div>
        <div className="contact-column">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact-button">Send</button>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;*/
// AboutUs.js
import React, { useState, useRef } from 'react';
import './AboutUs.css'; // Create this CSS file for styling
import owner from '../images/owner.jpg';
import emailjs from 'emailjs-com';

const AboutUs = () => {
  const form = useRef();

  // State to capture form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to store the response message from EmailJS
  const [responseMessage, setResponseMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    // Send email via EmailJS using environment variables
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      console.log(result.text);
      setResponseMessage('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      setResponseMessage('Error sending message. Please try again later.');
    });

    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="about-us">
      <header className="about-header">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">Get to know us better</p>
      </header>

      <section className="mission-statement">
        <div className="mission-content">
          <h2 className="mission-heading">Our Mission</h2>
          <p className="mission-text">
            We aim to create a comprehensive virtual herbal garden platform, bringing detailed information about medicinal plants, their uses, and cultivation methods, to users in an engaging and interactive way.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-heading">Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={owner} alt="Team Member" className="team-photo" />
            <h3 className="team-name">Vibhuti Sharma</h3>
            <p className="team-position">Full Stack Developer</p>
            <p className="team-bio">
              Vibhuti is a skilled full-stack developer with a passion for building interactive web applications.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-column">
          <h2 className="contact-heading">Contact Us</h2>
          <p>Email: vibhutisharma483@gmail.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: Online</p>
        </div>
        <div className="contact-column">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact-button">Send</button>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
