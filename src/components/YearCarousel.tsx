import useViewport from '../hooks/useViewport';
import '../styles/yearcarousel.css';

interface yearCarouselProps{
  currentYear: number;
  handleYearChange: (direction: number) => void;
}

const YearCarousel = ({ currentYear, handleYearChange }: yearCarouselProps) => {
  const { isMobile } = useViewport();

  return (
    <div className="year-carousel">
      {/* UP should INCREASE */}
      <button
        className="year-button up-button"
        onClick={() => handleYearChange(1)}
        disabled={currentYear === 2025}
      >
        {isMobile ? '←' : '↑'}
      </button>

      <div className="year-display">{currentYear}</div>

      {/* DOWN should DECREASE */}
      <button
        className="year-button down-button"
        onClick={() => handleYearChange(-1)}
        disabled={currentYear === 2014}
      >
        {isMobile ? '→' : '↓'}
      </button>
    </div>
  );
};
export default YearCarousel;
