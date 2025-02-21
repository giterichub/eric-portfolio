import React from 'react';
import '../styles/contact.css';
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="section section5">
      <div className="contact-container">
        <h1>SAY HELLO</h1>

        <hr className="section-divider" />

        <div className="input-container">
          <input 
            type="text" 
            placeholder="Type your full name here" 
            aria-label="Enter your full name"
            className="name-input"
          />
        </div>

        <hr className="section-divider" />

        <div className="next-step-container">
          <div className="pulsating-circle">
            <button className="next-step-btn">
              NEXT STEP
            </button>
          </div>
        </div>

        <div className="social-links">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
        </div>

        <div className="footer-links">
          <a href="#">TERMS & CONDITIONS</a>
          <span>|</span>
          <a href="#">PRIVACY POLICY</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;