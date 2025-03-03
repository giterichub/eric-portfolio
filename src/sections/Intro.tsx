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
