// CarouselCounter.jsx
import React from "react";
import "../styles/contador.css";

const CarouselCounter = ({ slides, currentIndex }) => (
  <div className="carousel-counter">
    {slides.map((_, index) => (
      <div key={index} className={`counter-number ${currentIndex === index ? "active" : ""}`}>
        {index + 1}
      </div>
    ))}
  </div>
);

export default CarouselCounter;
