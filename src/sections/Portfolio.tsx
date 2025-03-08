import { useState, useEffect, useRef } from 'react';
import '../styles/portfolio.css'

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
  
    const [currentIndex, setCurrentIndex] = useState<number>(0);
  
    const images = [
      "https://images.unsplash.com/photo-1741290723082-bd54c16a21a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1730032452988-c8d4df1256c5?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1741070487520-907d1359cb95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [images.length]);
  
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
                    <div className="carousel-container">
                      {images.map((src, index) => (
                        <img
                          key={index}
                          className={`carousel-image ${
                            currentIndex === index ? "active" : ""
                          }`}
                          src={src}
                          alt={`Image ${index + 1}`}
                        />
                      ))}
                    </div>
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