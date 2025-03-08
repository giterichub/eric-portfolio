import '../styles/slideshow.css';
import { slideShowContent, Image } from '../content/slideshow';
import { useEffect, useState } from 'react';

const SlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { imageLinks }: { imageLinks: Image[] } = slideShowContent;

useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideShowContent.imageLinks.length);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [imageLinks.length]);
    return (
        <div className="carousel-container">
                      {imageLinks.map((image, index) => (
                        <img
                          key={index}
                          className={`carousel-image ${
                            currentIndex === index ? "active" : ""
                          }`}
                          src={image.url}
                          alt={image.alt}
                          aria-hidden={currentIndex !== index}
                            loading="lazy"
                        />
                      ))}
                    </div>
    );
} 
export default SlideShow;