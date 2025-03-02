import "../styles/intro.css";
import "../assets/backgrounds/background-hero-merged.webp";
import AnimatedCircleButton from '../components/AnimatedCircleButton';
import ContactForm from '../components/ContactForm';
import { useState } from "react";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(true);  // Show the ContactForm when button is clicked
  };
  return (
    <div id="home" className="section section1">
      <div className="strips-container">
        {/* <!-- Bottom Row --> */}
        <div className="row bottom">
            <div className="strip"><span>ITEM 1</span></div>
            <div className="strip"><span>ITEM 2</span></div>
            <div className="strip"><span>ITEM 3</span></div>
        </div>
        
        {/* <!-- Middle Row --> */}
        <div className="row middle">
            <div className="strip"><span>ITEM 4</span></div>
            <div className="strip"><span>ITEM 5</span></div>
            <div className="strip"><span>ITEM 6</span></div>
        </div>
        
        {/* <!-- Top Row --> */}
        <div className="row top">
            <div className="strip"><span>ITEM 7</span></div>
            <div className="strip"><span>ITEM 8</span></div>
            <div className="strip"><span>ITEM 9</span></div>
        </div>
    </div>
      {/* <div className="background-overlay"></div> */}
      {/* <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>Your introduction text here</p>
      </div> */}
      <div className="styled-box"></div>
      <div className="circle-rotate-container">
        <AnimatedCircleButton onClick={handleButtonClick} />
      </div>
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Home;
