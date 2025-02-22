import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div id="contact" className="section section5">
      <div className="contact-container">
        <h1>SAY HELLO</h1>

        <div className="next-step-container">
          <div className="pulsating-circle">
            <button className="next-step-btn">
              NEXT STEP
            </button>
          </div>
        </div>

        <div className="social-links">
          <a href="#">LINKEDIN</a>
          <a href="#">YOUTUBE</a>
          <a href="#">INSTAGRAM</a>
          <a href="#">FACEBOOK</a>
          <a href="#">TWITTER</a>
        </div>

        <hr className="section-divider" />

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