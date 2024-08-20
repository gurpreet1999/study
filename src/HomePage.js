import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">
        <li><a href="/">Studyhelpline</a></li>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="register">Tutor Registration</a></li>
        </ul>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <h1>LOOKING FOR A HOME TUTOR?</h1>
          <h1>LOOKING FOR AN ONLINE TUTOR?</h1>
          <p>Studyhelpline is here to help.</p>
          <p>Our service is 100% free to use.</p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
