import React from "react";
import { motion } from "framer-motion";
import "../styles/Carousel.css";

const CarouselContent = ({ slides, currentIndex, zoomIndex, hoverZoomIndex, handleHoverProject }) => {
  return (
    <div className="carousel-content" style={{ transform: `translateY(-${currentIndex * 100}vh)` }}>
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="carousel-slide"
          initial={currentIndex === index ? { scale: 0.8, y: 100 } : { scale: 1, y: 0 }}
          animate={currentIndex === index ? { scale: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } } : { scale: 1, y: 0, transition: { duration: 0 } }}
        >
          <motion.img
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
            onMouseEnter={() => handleHoverProject(true)}
            onMouseLeave={() => handleHoverProject(false)}
            animate={hoverZoomIndex === index ? { scale: 1.55 } : zoomIndex === index ? { scale: 1.6 } : { scale: 1 }}
            transition={{ duration: hoverZoomIndex === index ? 0.1 : 1, ease: "easeInOut" }}
          />
          {/* Línea vertical debajo de la imagen */}
          
          
        </motion.div>
      ))}
      
    </div>
    
  );
};

export default CarouselContent;
