import '../styles/contact.css';
import { contactContent } from "../content/contact";

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
        {contactContent.socialLinks.map((item, index) => (
           <a key={index} href={item.url} target='-blank' rel="noopener noreferrer">{item.name}</a> 
        ))}
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