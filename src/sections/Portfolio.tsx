import { useState, useEffect, useRef } from 'react';
import '../styles/portfolio.css'
import SlideShow from '../components/SlideShow';

const Portfolio = () => {
    const [rectWidth, setRectWidth] = useState<number>(100);
    const [rectHeight, setRectHeight] = useState<number>(20);
    const [translateX, setTranslateX] = useState<number>(0);
    const [sliderOpacity, setSliderOpacity] = useState<number>(0);
    const [sliderTranslateY, setSliderTranslateY] = useState<number>(50);
  
    useEffect(() => {
      const projectsSection = document.querySelector(".section4") as HTMLElement;
      const projectsWord = document.querySelector(".projects-word") as HTMLElement;
      const wo = document.querySelector(".wo") as HTMLElement;
      const rk = document.querySelector(".rk") as HTMLElement;
  
      const updateLayout = () => {
        const projectsWidth = projectsWord.getBoundingClientRect().width;
        const woWidth = wo.getBoundingClientRect().width;
        const rkWidth = rk.getBoundingClientRect().width;
        const woHeight = wo.getBoundingClientRect().height;
  
        const rectWidth = projectsWidth - (woWidth + rkWidth);
        const rectHeight = woHeight;
  
        setRectWidth(rectWidth);
        setRectHeight(rectHeight);
      };
  
      const updateScrollEffects = () => {
        const sectionTop = projectsSection.getBoundingClientRect().top;
        const sectionHeight = projectsSection.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.min(Math.max(0, (windowHeight - sectionTop) / sectionHeight), 1);
  
        const translateX = (1 - scrollProgress) * 100;
        setTranslateX(translateX);
  
        if (scrollProgress > 0.9) {
          setSliderOpacity(1);
          setSliderTranslateY(0);
        } else {
          setSliderOpacity(0);
          setSliderTranslateY(50);
        }
        requestAnimationFrame(updateScrollEffects);
      };
  
      updateLayout();
      updateScrollEffects();
  
      window.addEventListener("resize", updateLayout);
  
      return () => window.removeEventListener("resize", updateLayout);
    }, []);
  
    return (
      <div className="section section4">
        <section className="projects pt-35 pb-250">
          <div className="projects-wrapper mt-100">
            <h1 className="projects-title">
              <span className="projects-text projects-word">PROJECTS</span>
              <span
                className="projects-text work"
                style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
              >
                <span className="wo">WO</span>
                <span className="rect" style={{ width: `${rectWidth}px`, height: `${rectHeight}px` }}>
                  <div className="outer-container" id="outer-container" style={{ width: `${rectWidth}px`, height: `${rectHeight}px` }}>
                    <SlideShow />
                  </div>
                </span>
                <span className="rk">RK</span>
              </span>
            </h1>
          </div>
          {/* <div className="project-slider" style={{ opacity: sliderOpacity, transform: `translateY(${sliderTranslateY}px)` }}>
            <div className="project-placeholder">Project Preview</div>
          </div> */}
        </section>
      </div>
    );
};

export default Portfolio;