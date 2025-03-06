import { TechList } from "../content/skills";
import '../styles/skillsmarqueeanimated.css'

const SkillsMarqueeAnimated = () => {
  console.log([...TechList, ...TechList]);
  return (
    <div className="marquee-main-container">
      <div className="about-pageWrap">
        <div className="section-title">
          <h3>Skills and Tools I have used</h3>
        </div>
        <div className="marquee-center-align">
          <div className="marquee-container">
            <div className="marquee-content">
              {/* Double the array for seamless loop */}
              {[...TechList, ...TechList].map((tech, index) => (
                <div key={index} className="tech-item"
                
                >
                  <div className="tech-icon">
                    <tech.icon /> {/* Render the icon */}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsMarqueeAnimated;
