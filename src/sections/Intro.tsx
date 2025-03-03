import "../styles/intro.css";
import "../assets/backgrounds/background-hero-merged.webp";
import AnimatedCircleButton from "../components/AnimatedCircleButton";
import ContactForm from "../components/ContactForm";
import { useState } from "react";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(true); // Show the ContactForm when button is clicked
  };
  return (
    <div id="home" className="section section1">

      {/* Animation: Animated strips */}
      <div className="strips-container">
        <div className="row top">
          <div className="strip"><span></span></div>
          <div className="strip"><span></span></div>
          <div className="strip"><span></span></div>
        </div>

        <div className="row middle">
          <div className="strip"><span></span></div>
          <div className="strip"><span></span></div>
          <div className="strip"><span></span></div>
        </div>

        <div className="row bottom">
          <div className="strip"><p>Javascript</p></div>
          <div className="strip"><p>ReactJs</p></div>
          <div className="strip"><p>HTML & Css</p></div>
        </div>
      </div>

      {/* <div className="background-overlay"></div> */}

      <div className="ov-circle-container">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <g transform="rotate(-20, 100, 100)">
            <circle className="overlap-circle" cx="50" cy="100" r="30" stroke="#d21338" fill="none" stroke-width="2" />
            <circle className="overlap-circle" cx="65" cy="95" r="30" stroke="#d21338" fill="none" stroke-width="2" />
            <circle className="overlap-circle" cx="80" cy="90" r="30" stroke="#d21338" fill="none" stroke-width="2" />
            <circle className="overlap-circle" cx="95" cy="85" r="30" stroke="#d21338" fill="none" stroke-width="2" />
            <circle className="overlap-circle" cx="110" cy="80" r="30" stroke="#d21338" fill="none" stroke-width="2" />
          </g>
        </svg>
      </div>

      <div className="content">
        <h1>Eric Antao</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className="styled-box"></div>

      <div className="circle-rotate-container">
        <AnimatedCircleButton onClick={handleButtonClick} />
      </div>
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Home;
