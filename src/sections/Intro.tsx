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

      {/* SVG-animated: Zig-zig lines */}
      <div className="zigzag-container">
        <svg className="zigzag-line" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <polyline
            points="120,50 40,200 280,90 120,240 400,180 300,250"
            stroke="black" fill="none" stroke-width="3" stroke-dasharray="5,5">
            <animate
              attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
          </polyline>

          <circle className="zig-zag-circle" cx="120" cy="50" r="8" fill="black">
            <animate attributeName="r" values="8;5;8" dur="1s" repeatCount="indefinite" />
          </circle>

          <circle className="zig-zag-circle" cx="40" cy="200" r="8" fill="black">
            <animate attributeName="r" values="8;5;8" dur="1s" begin="0.2s" repeatCount="indefinite"/>
          </circle>

          <circle className="zig-zag-circle" cx="280" cy="90" r="8" fill="black">
            <animate attributeName="r" values="8;5;8" dur="1s" begin="0.4s" repeatCount="indefinite" />
          </circle>

          <circle className="zig-zag-circle" cx="120" cy="240" r="8" fill="black">
            <animate attributeName="r" values="8;5;8" dur="1s" begin="0.6s" repeatCount="indefinite"/>
          </circle>

          <circle className="zig-zag-circle" cx="400" cy="180" r="8" fill="black">
            <animate attributeName="r" values="8;5;8" dur="1s" begin="0.8s" repeatCount="indefinite" />
          </circle>

          <circle className="zig-zag-circle" cx="300" cy="250" r="8" fill="black" >
            <animate attributeName="r" values="8;5;8" dur="1s" begin="1s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="content">
        <h1>Eric</h1><br/>
        <h1 className="surname">Antao</h1>
        <h2>Frontend Developer</h2>
      </div>
      {/* <div className="styled-box"></div> */}

      {/* SVG: Overlapping Triangles */}
      <div className="ov-triangle-container">
        <svg width="200" height="200" viewBox="0 0 100 200">
          <g transform="rotate(20, 50, 80)">
            <polygon points="50,10 10,80 90,80" stroke="red" fill="none" stroke-width="2" />
            <polygon points="50,20 15,85 85,85" stroke="red" fill="none" stroke-width="2" />
            <polygon points="50,30 20,90 80,90" stroke="red" fill="none" stroke-width="2" />
            <polygon points="50,40 25,95 75,95" stroke="red" fill="none" stroke-width="2" />
            <polygon points="50,50 30,100 70,100" stroke="red" fill="none" stroke-width="2" />
          </g>
        </svg>
      </div>

      <div className="h-strips-container">
        <div className="hstrip"></div>
        <div className="hstrip"></div>
        <div className="hstrip"></div>
        <div className="hstrip"></div>
        <div className="hstrip"></div>
        <div className="hstrip"></div>
      </div>

      <div className="circle-rotate-container">
        <AnimatedCircleButton onClick={handleButtonClick} />
      </div>
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Home;
