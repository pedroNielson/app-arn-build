import React, { useState } from 'react';
import './style.css'; // Import your custom CSS

const FullScreenImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const closeCarousel = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="fullscreen-carousel">
      <div className="carousel-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${
              index === currentIndex ? 'active-slide' : ''
            }`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        <button className="prev-button" onClick={goToPreviousSlide}>
          &lt;
        </button>
        <button className="next-button" onClick={goToNextSlide}>
          &gt;
        </button>
        <button className="close-button" onClick={closeCarousel}>
          Close
        </button>
      </div>
    </div>
  );
};

export default FullScreenImageCarousel;
