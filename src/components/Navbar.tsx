import { useEffect, useRef } from 'react';

const Navbar = () => {
  // Create a ref to store all the li elements
  const navbarLinks = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const checkScroll = () => {
      sections.forEach((section, index) => {
        // Cast section to HTMLElement to access offsetTop and clientHeight
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Calculate the scroll progress for the section
        const progress = (scrollPosition - sectionTop) / sectionHeight;
        const progressPercentage = Math.min(Math.max(progress, 0), 1) * 100;

        // Get the progress bar for each li and cast it to HTMLElement
        const progressBar = navbarLinks.current[index]?.querySelector('.progress-bar') as HTMLElement;
        if (progressBar) {
          progressBar.style.height = `${progressPercentage}%`;
        }
      });
    };

    // Listen for scroll events and trigger checkScroll function
    window.addEventListener('scroll', checkScroll);

    // Call checkScroll on page load
    checkScroll();

    // Cleanup event listener
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Function to set the ref for each li element
  const setNavLinkRef = (el: HTMLLIElement | null) => {
    if (el && !navbarLinks.current.includes(el)) {
      navbarLinks.current.push(el);
    }
  };

  return (
    <div className="navbar">
      <ul>
        <li ref={setNavLinkRef}><a href="#home">HOME</a><div className="progress-bar"></div></li>
        <li ref={setNavLinkRef}><a href="#about">ABOUT</a><div className="progress-bar"></div></li>
        <li ref={setNavLinkRef}><a href="#timeline">TIMELINE</a><div className="progress-bar"></div></li>
        <li ref={setNavLinkRef}><a href="#portfolio">PORTFOLIO</a><div className="progress-bar"></div></li>
        <li ref={setNavLinkRef}><a href="#contact">CONTACT</a><div className="progress-bar"></div></li>
      </ul>
    </div>
  );
};

export default Navbar;
