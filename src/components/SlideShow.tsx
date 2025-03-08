import '../styles/slideshow.css';
import {slideShowContent} from '../content/slideshow';
import { useEffect, useState } from 'react';

const SlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideShowContent.imageLinks.length);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [slideShowContent.imageLinks.length]);
    return (
        <div className="carousel-container">
                      {slideShowContent.imageLinks.map((image, index) => (
                        <img
                          key={index}
                          className={`carousel-image ${
                            currentIndex === index ? "active" : ""
                          }`}
                          src={image.url}
                          alt={`Image ${index + 1}`}
                        />
                      ))}
                    </div>
    );
} 
export default SlideShow;