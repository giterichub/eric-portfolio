import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/portfolio.css';
import { projects, slideshowImages } from '../content/projectContent';
import ProjectComponent from '../components/ProjectComponent';

const allSlideshowImages = slideshowImages;

const Portfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectsWordRef = useRef<HTMLSpanElement>(null);
  const woRef = useRef<HTMLSpanElement>(null);
  const rkRef = useRef<HTMLSpanElement>(null);

  const updateLayout = useCallback(() => {
    if (!projectsWordRef.current || !woRef.current || !rkRef.current) return;

    const projectsWidth = projectsWordRef.current.offsetWidth;
    const woWidth = woRef.current.offsetWidth;
    const rkWidth = rkRef.current.offsetWidth;
    const woHeight = woRef.current.offsetHeight;

    const rectWidth = Math.max(0, projectsWidth - (woWidth + rkWidth));
    document.documentElement.style.setProperty('--rect-width', `${rectWidth}px`);
    document.documentElement.style.setProperty('--rect-height', `${woHeight}px`);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      updateLayout();
      window.requestAnimationFrame(updateLayout);
    };

    window.addEventListener('resize', handleResize);
    document.fonts.ready.then(() => {
      updateLayout();
    });

    return () => window.removeEventListener('resize', handleResize);
  }, [updateLayout]);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <main id="portfolio" className="portfolio-main section">
      <div id="portfolio-inner" className="portfolio-inner-container section4P">
        {/* Projects Section */}
        <section className="projects">
          <div className="projects-wrapper">
            <h1 className="projects-title">
              <span ref={projectsWordRef} className="projects-text projects-word">
                PROJECTS
              </span>
              <span className="projects-text work">
                <span ref={woRef} className="wo">WO</span>
                <div className="rect">
                  <div className="outer-container">
                    <div className="carousel-container">
                      {allSlideshowImages.map((img, index) => (
                        <img
                          key={`carousel-${index}`}
                          className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                          src={img}
                          alt={`Project Showcase ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <span ref={rkRef} className="rk">RK</span>
              </span>
            </h1>
          </div>
        </section>

        {/* Content Sections */}
        {projects.filter(p => p.isFeatured).map((project, index) => (
          <section
            key={project.id}
            className="sticky-section"
            style={{
              zIndex: index + 3, // Ensuring order in stacking
              top: 'var(--header-height)', // Keeping them sticky
          }}
          >
            <ProjectComponent project={project} />
          </section>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;