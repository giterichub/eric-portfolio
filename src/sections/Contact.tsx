import "../styles/contact.css";
import { contactContent } from "../content/contact";
import { useState } from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div id="contact" className="section section5">
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
          <div className="contact-content">
            <h2 className="contact-header">{contactContent.location.locationTitle}</h2>
            <p className="ctt-location__address">
            {contactContent.location.address}
            </p>
            <a
              href="https://maps.google.com"
              className="ctt-location__address"
              target="_blank"
            >
              View on Map
            </a>
          </div>
        </section>

        <section id="contact-git">
          <div className="contact-content">
            <h2 className="contact-header">{contactContent.getInTouch.getInTouchTitle}</h2>
            <ul className="ctt-links__items">
              <li>
                <a href={`mailto:${contactContent.getInTouch.email}`}>{contactContent.getInTouch.email}</a>
              </li>
              <li>
                <a href={`tel:${contactContent.getInTouch.phone}`}>{contactContent.getInTouch.phone}</a>
              </li>
            </ul>
          </div>
        </section>

        <section id="contact-resume">
          <div className="contact-content">
            <h2 className="contact-header">{contactContent.resume.resumeTitle}</h2>
              <a
              href={contactContent.resume.resumePath}
              className="ctt-location__address"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              {contactContent.resume.resumeDownload}
            </a>
          </div>
        </section>

        <section id="contact-socials">
          <div className="contact-content">
            <h2 className="contact-header">{contactContent.socials.socialsTitle}</h2>
            <ul className="ctt-social__items">
              {contactContent.socials.allSocials.map((s, idx) => (
                <li key={idx}>
                  <a href={s.url}>{s.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact-text" className="ctt-text">
          <div className="ctt-text__hold e-hold">
            <div className="ctt-text__text">
              {contactContent.description}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
