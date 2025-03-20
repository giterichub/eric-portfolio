import '../styles/timeline.css';
import { useState } from 'react';

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
        <div className="year-carousel">
          <button 
            className="year-button up-button"
            onClick={() => handleYearChange(1)}
            disabled={currentYear === 2025}
          >
            ↑
          </button>
          <div className="year-display">{currentYear}</div>
          <button 
            className="year-button down-button"
            onClick={() => handleYearChange(-1)}
            disabled={currentYear === 2014}
          >
            ↓
          </button>
        </div>

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