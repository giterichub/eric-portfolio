import { TechList, Technology } from '../content/skills';

const SkillsMarqueeAnimated = () => {
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
              {[...technologies, ...technologies].map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon">{tech.icon}</div>
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
