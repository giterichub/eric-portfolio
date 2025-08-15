import "../styles/intro.css";
import "../assets/backgrounds/background-hero-merged.webp";
import { bannerContent } from "../content/intro";
import AnimatedCircleButton from "../components/AnimatedCircleButton";
import ContactForm from "../components/ContactForm";
import DottedZigZagLines from "../svgs/DottedZigZagLines/DottedZigZagLines";
import OverlappingCircles from "../svgs/OverlappingCircles/OverlappingCircles";
import OverlappingTriangles from "../svgs/OverlappingTriangles/OverlappingTriangles";
import { useState } from "react";

const Intro = () => {
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
        <OverlappingCircles/>
      </div>

      {/* SVG-animated: Zig-zig lines */}
      <div className="zigzag-container">
      <DottedZigZagLines/>
      </div>

      <div className="content">
        <h1 className="firstname">{bannerContent.name}</h1>
        <h1 className="surname">{bannerContent.surname}</h1>
        <h2>{bannerContent.subtext}</h2>
      </div>
      {/* <div className="styled-box"></div> */}

      {/* SVG: Overlapping Triangles */}
      <div className="ov-triangle-container">
        <OverlappingTriangles/>
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

export default Intro;
