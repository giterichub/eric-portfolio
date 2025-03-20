import '../styles/timeline.css';
import { useState } from 'react';
import YearCarousel from '../components/YearCarousel';
import useViewport from '../hooks/useViewport'

const Timeline = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentCards] = useState([
    { id: 1, title: "Milestone 1", content: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "Achievement 2", content: "Consectetur adipiscing elit." },
    { id: 3, title: "Event 3", content: "Sed do eiusmod tempor incididunt." },
  ]);

  const handleYearChange = (direction: number) => {
    setCurrentYear(prev => Math.min(Math.max(prev + direction, 2014), 2025));
  };

  return (
    <div id="timeline" className="section section3">
      <div className="timeline-wrapper">
        {/* Year Carousel */}
        <YearCarousel currentYear={currentYear} handleYearChange={handleYearChange} />
        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="cards-wrapper">
            {currentCards.map(card => (
              <div key={card.id} className="timeline-card">
                <h3>{card.title}</h3>
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