import '../styles/contact.css';
import { contactContent } from "../content/contact";
import { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div id="contact" className="section section5">
      <div className="contact-container">
        <div className='contact-header'>
          <h1>SAY HELLO</h1>
        </div>

        <div className="next-step-container">
          <div className="pulsating-circle">
            <button className="next-step-btn" onClick={() => setShowForm(true)}>
              NEXT STEP
            </button>
          </div>
          {showForm && <ContactForm onClose={() => setShowForm(false)} />}
        </div>

        <div className='footer'>
          <div className="social-links">
          {contactContent.socialLinks.map((item, index) => (
            <a key={index} href={item.url} target='-blank' rel="noopener noreferrer">{item.name}</a> 
          ))}
          </div>

          <hr className="section-divider" />
          <div className="footer-links">
            <a href="#">Eric Antao</a>
            <span>|</span>
            <span>2025</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;