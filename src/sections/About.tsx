import React, { useEffect, useRef, useState } from "react";
import '../styles/about.css';

const About = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [barReveal, setBarReveal] = useState(0);
    const [bodyAlpha, setBodyAlpha] = useState(0);
  
    const buffer = 1.2; // Animation smoothness
    const barBaseWidth = 65; // Base border width
    const minOpacity = 0.3;
  
    useEffect(() => {
      const handleScroll = () => {
        if (!elementRef.current) return;
        const rect = elementRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const start = elementRef.current.offsetTop - window.innerHeight;
        const rawProgress = (scrollY - start) / elementRef.current.offsetHeight;
        const progress = Math.min(Math.max(1 - rawProgress, 0), 1);
        let test = scrollY >= 1000 ? 1 : 0;
  
        setBarReveal(Math.max(progress * barBaseWidth * buffer, 0));
        setBodyAlpha(scrollY >= elementRef.current.offsetTop ? 1 : 0);
        // setBodyAlpha(Math.min((1 - progress) / buffer + minOpacity, 1));
      };
  
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }, []);

    return (
        <div id="about" className="section section2">
            <div className="scrollExpand is-active" ref={elementRef} 
            style={{ "--barReveal": `${barReveal}px`, "--bodyAlpha": bodyAlpha,} as React.CSSProperties}>
                <div className="scrollExpand-content">
                    <div className="scrollExpand-borders">
                        <div className="scrollExpand-border scrollExpand-border-top" />
                        <div className="scrollExpand-border scrollExpand-border-bottom" />
                        <div className="scrollExpand-border scrollExpand-border-left" />
                        <div className="scrollExpand-border scrollExpand-border-right" />
                    </div>
                    <div className="fullscreen-bg-about">
                        <div className="about-pageWrap">
                            <div className="about-statement">
                                <h2 className="about-statement">Experienced software engineer with nearly two years of hands-on 
                                experience in Front End Software Development</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default About;
  