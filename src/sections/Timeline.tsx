import '../styles/timeline.css';
import { timelineCards, TimelineCard } from '../content/timeline';
import { useCallback, useEffect, useRef, useState } from 'react';
import YearCarousel from '../components/YearCarousel';
import useHorizontalScroll from '../hooks/useHorizontalScroll';
import { GrGamepad } from 'react-icons/gr';

const Timeline = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const [cards] = useState<TimelineCard[]>(timelineCards);
  const containerRef = useHorizontalScroll();
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const isScrollingProgrammatically = useRef(false);
  const programmaticScrollTimer = useRef<number | null>(null);

  // year -> card index (map all years within each card's range)
  const yearCardMap = useRef(new Map<number, number>());

  useEffect(() => {
    yearCardMap.current.clear();
    cards.forEach((card, index) => {
      for (let y = card.startYear; y <= card.endYear; y++) {
        // first card wins for a year (keeps earliest card for that year)
        if (!yearCardMap.current.has(y)) {
          yearCardMap.current.set(y, index);
        }
      }
    });
  }, [cards]);

  // helper to end programmatic scroll after user-agent stops firing scroll events
  const armProgrammaticScrollEnd = () => {
    if (programmaticScrollTimer.current) {
      window.clearTimeout(programmaticScrollTimer.current);
    }
    programmaticScrollTimer.current = window.setTimeout(() => {
      isScrollingProgrammatically.current = false;
      programmaticScrollTimer.current = null;
    }, 150); // 150ms of no scroll events => done
  };

  const scrollToYear = useCallback(
    (year: number) => {
      const cardIndex = yearCardMap.current.get(year);
      if (cardIndex === undefined) return;

      const cardEl = cardsRef.current[cardIndex];
      const container = containerRef.current;
      if (!cardEl || !container) return;

      isScrollingProgrammatically.current = true;

      // robust target calculation using rect delta
      const cardRect = cardEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const deltaLeft = cardRect.left - containerRect.left;

      container.scrollTo({
        left: container.scrollLeft + deltaLeft - 50,
        behavior: 'smooth',
      });

      armProgrammaticScrollEnd();
    },
    [containerRef]
  );

  const handleYearChange = (direction: number) => {
    const next = Math.min(Math.max(currentYear + direction, 2014), 2025);
    setCurrentYear(next);
    // only scroll if we have a matching year (either in-range or start-year)
    if (yearCardMap.current.has(next)) {
      scrollToYear(next);
    }
  };

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    // debounce end of programmatic scroll
    if (isScrollingProgrammatically.current) {
      armProgrammaticScrollEnd();
      return;
    }

    const container = containerRef.current;
    const cRect = container.getBoundingClientRect();

    // find first partially visible card
    for (let i = 0; i < cardsRef.current.length; i++) {
      const el = cardsRef.current[i];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      const partiallyVisible = r.left < cRect.right && r.right > cRect.left;
      if (partiallyVisible) {
        const newYear = cards[i].startYear;
        if (newYear !== currentYear) setCurrentYear(newYear);
        break;
      }
    }
  }, [currentYear, cards, containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll as any);
  }, [handleScroll, containerRef]);

  return (
    <div id="timeline" className="section section3">
      <div className="timeline-wrapper">
        <YearCarousel currentYear={currentYear} handleYearChange={handleYearChange} />

        <div className="timeline-container" ref={containerRef}>
          <div className="cards-wrapper">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="timeline-card"
                ref={(el) => { if (el) cardsRef.current[index] = el; }}
                style={{ background: card.bgColor }}
              >
                <div className="card-header">
                  <div className="header-title-year">
                    <span className="header-titl">{card.title}</span>
                    <span className="year-range">
                      {card.startMonth.substring(0, 3)} {card.startYear} – {card.endMonth.substring(0, 3)} {card.endYear}
                    </span>
                  </div>
                  <GrGamepad />
                  <h3>{card.designation}</h3>
                </div>
                <ul>
                  {card.content.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
