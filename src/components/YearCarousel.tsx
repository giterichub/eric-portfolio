import '../styles/yearcarousel.css';

interface yearCarouselProps{
    currentYear: number;
    handleYearChange: (direction: number) => void;
}
const YearCarousel = ({currentYear, handleYearChange}: yearCarouselProps) => {
  return (
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
  );
};
export default YearCarousel;
