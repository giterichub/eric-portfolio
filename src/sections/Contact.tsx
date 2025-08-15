import '../styles/contact.css';
import { contactContent } from "../content/contact";
import { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <main className="main-contact page-contact">
      <section id="contact-title" className="ctt-title">
        <div className="ctt-title__hold">
          <h1 className="big-t">
            <span className="t t1">Drop us</span>
            <span className="t t2">A Line</span>
          </h1>
        </div>
      </section>

    <section id="contact-location">
      <div className='contact-content'>
        <h2 className='contact-header'>Location</h2>
        <p className="ctt-location__address">123 Main Street, New York, NY</p>
        <a href="https://maps.google.com" className="ctt-location__address" target="_blank">View on Map</a>
      </div>
    </section>

    <section id="contact-git">
      <div className='contact-content'>
        <h2 className='contact-header'>Get in Touch</h2>
        <ul className="ctt-links__items">
            <li><a href="mailto:info@example.com">info@example.com</a></li>
            <li><a href="tel:+123456789">+1 (234) 567-89</a></li>
        </ul>
      </div>
    </section>

    <section id="contact-hours">
      <div className='contact-content'>
        <h2 className='contact-header'>Hours</h2>
          <ul className="ctt-hours__list">
              <li className="ctt-hours__each"><span>Mon–Fri</span><span>9am – 6pm</span></li>
              <li className="ctt-hours__each"><span>Sat</span><span>10am – 4pm</span></li>
              <li className="ctt-hours__each"><span>Sun</span><span>Closed</span></li>
          </ul>
      </div>
    </section>

    <section id="contact-socials">
      <div className='contact-content'>
      <h2 className='contact-header'>Follow Us</h2>
        <ul className="ctt-social__items">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </section>

    <section id="contact-text" className="ctt-text">
        <div className="ctt-text__hold e-hold">
            <div className="ctt-text__text">
                We are happy to assist you with any inquiries. Reach out to us through phone, email, or visit us during our working hours.
            </div>
        </div>
    </section>
</main>
  );
};

export default Contact;