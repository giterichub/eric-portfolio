import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/portfolio.css';
import { projects, slideshowImages } from '../content/projectContent';
import ProjectComponent from '../components/ProjectComponent';

const allSlideshowImages = [
  ...new Set([
    ...slideshowImages,
    ...projects.flatMap(p => p.showInSlideshow ? p.images : [])
  ])
];

const imageUrls = [
  'https://images.unsplash.com/photo-1741290723082-bd54c16a21a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1730032452988-c8d4df1256c5?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1741070487520-907d1359cb95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const sections = [
  {
    bgImage: imageUrls[0],
    title: 'Short CV',
    text: 'With a strategic brand and digital product development background...',
    button: 'LinkedIn CV'
  },
  {
    bgImage: imageUrls[1],
    title: 'Experience',
    text: 'Extensive experience working with global brands...',
    button: 'View Portfolio'
  },
  {
    bgImage: imageUrls[2],
    title: 'Projects',
    text: 'Extensive Projects working with global brands...',
    button: 'View Portfolio'
  }
];
const projectSections = Array.from({ length: 4 }); // Ensure order remains consistent


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
    updateLayout(); // Initial layout

    return () => window.removeEventListener('resize', handleResize);
  }, [updateLayout]);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % imageUrls.length);
    }, 3000);

    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <main id="PAGE_SECTIONSc1dmp" className="c1rIl3">
      <div id="c1dmp" className="c1dmp-container section4P">
        {/* Projects Section */}
        <section className="projects">
          <div className="projects-wrapper">
            <h1 className="projects-title">
              <span ref={projectsWordRef} className="projects-text projects-word">
                PROJECTS
              </span>
              <span className="projects-text work">
                <span ref={woRef} className="wo">WO</span>
                <span className="rect">
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
                </span>
                <span ref={rkRef} className="rk">RK</span>
              </span>
            </h1>
          </div>
        </section>

        {/* Content Sections */}
        {projectSections.map((_, index) => (
          <section
            key={index}
            className="sticky-section"
            style={{
              zIndex: index + 3, // Ensuring order in stacking
              top: 'var(--header-height)', // Keeping them sticky
          }}
          >
            <ProjectComponent />
          </section>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;