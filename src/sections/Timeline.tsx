import '../styles/timeline.css';
import {timelineCards, TimelineCard } from '../content/timeline'
import { useCallback, useEffect, useRef, useState } from 'react';
import YearCarousel from '../components/YearCarousel';
import useViewport from '../hooks/useViewport'
import useHorizontalScroll from '../hooks/useHorizontalScroll';

const Timeline = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const [cards] = useState<TimelineCard[]>(timelineCards);
  const containerRef = useHorizontalScroll();
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const scrollTimeout = useRef<number | null>(null);
  const isScrollingProgrammatically = useRef(false);

  // Map years to card indices
  const yearCardMap = useRef(new Map<number, number>());

  useEffect(() => {
    // Create year-to-card index mapping
    cards.forEach((card, index) => {
      for (let year = card.startYear; year <= card.endYear; year++) {
        yearCardMap.current.set(year, index);
      }
    });
  }, [cards]);

  const scrollToYear = useCallback((year: number) => {
    const cardIndex = yearCardMap.current.get(year) ?? 0;
    const cardElement = cardsRef.current[cardIndex];
    
    if (cardElement && containerRef.current) {
      isScrollingProgrammatically.current = true;
      const container = containerRef.current;
      const cardLeft = cardElement.offsetLeft - container.offsetLeft;
      
      container.scrollTo({
        left: cardLeft,
        behavior: 'smooth'
      });

      // Reset flag after scroll completes
      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 1000);
    }
  }, [containerRef]);

  const handleYearChange = (direction: number) => {
    const newYear = Math.min(Math.max(currentYear + direction, 2014), 2025);
    setCurrentYear(newYear);
    scrollToYear(newYear);
  };


  const handleScroll = useCallback(() => {
    if (isScrollingProgrammatically.current || !containerRef.current) return;

    // Throttle scroll events
    if (scrollTimeout.current) {
      window.cancelAnimationFrame(scrollTimeout.current);
    }

    scrollTimeout.current = window.requestAnimationFrame(() => {
      const container = containerRef.current!;
      const visibleCards = cardsRef.current.filter(card => {
        const cardRect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        return cardRect.left >= containerRect.left && 
               cardRect.right <= containerRect.right;
      });

      if (visibleCards.length > 0) {
        const firstVisibleCard = visibleCards[0];
        const cardIndex = cardsRef.current.indexOf(firstVisibleCard);
        const newYear = cards[cardIndex]?.startYear || currentYear;
        
        if (newYear !== currentYear) {
          setCurrentYear(newYear);
        }
      }
    });
  }, [currentYear, cards, containerRef]);

  // Add scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll, containerRef]);


  return (
    <div id="timeline" className="section section3">
      <div className="timeline-wrapper">
        {/* Year Carousel */}
        <YearCarousel currentYear={currentYear} handleYearChange={handleYearChange} />
        {/* Timeline Container */}
        <div className="timeline-container" ref={containerRef}>
          <div className="cards-wrapper">
            {cards.map((card, index) => (
              <div key={card.id} className="timeline-card" ref={el => el && (cardsRef.current[index] = el)}>
                <div className="card-header">
                  <div className='header-title-year'>
                    <span className='header-titl'>
                      {card.title}
                    </span>
                    <span className="year-range">
                     {card.startMonth.substring(0, 3)} {card.startYear} – {card.endMonth.substring(0, 3)} {card.endYear}
                    </span>
                  </div>
                  <h3>{card.designation}</h3>
                </div>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;