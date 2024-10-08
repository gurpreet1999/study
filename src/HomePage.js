import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
     

      <div className="hero-section">
        <div className="hero-text">
          <h1>LOOKING FOR A HOME TUTOR?</h1>
          <h1>LOOKING FOR AN ONLINE TUTOR?</h1>
          <p>Studyhelpline is here to help.</p>
         
  

<a href="https://wa.me/9250192507" target="_blank"> <button className="contact-button">Contact Us</button></a>
        </div>
      </div>
      <div className="achievements">
      <div className="achievements-container">
        <div className="achievement-item">
          <i className="achievement-icon fa fa-users"></i>
          <p>We are a team of</p>
          <h3>49,673</h3>
          <p>Verified & Tested Tutors</p>
        </div>
        <div className="achievement-item">
          <i className="achievement-icon fa fa-university"></i>
          <p>Our Students are from</p>
          <h3>2,589</h3>
          <p>Schools of India </p>
        </div>
        <div className="achievement-item">
        <i class="fa-regular fa-face-smile"></i>
          <p>Inquiries Posted by</p>
          <h3>10,352</h3>
          <p>Students</p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-logo">
        <h1>Studyhelpline</h1>
          <p>To provide the most transparent, honest, and efficient services...</p>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Area of work</h4>
            <ul>
              <li>Tutors in Delhi</li>
              <li>Tutors in Mumbai</li>
              
            </ul>
          </div>
          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              <li>About Us</li>
             
              <li>Contact Us</li>
              
              
            </ul>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default HomePage;
