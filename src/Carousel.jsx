import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: "images/imagen1.jpg", bgColor: "#4B8BBE" },
    { src: "images/imagen2.jpg", bgColor: "#6C9A8A" },
    { src: "images/imagen3.jpg", bgColor: "#B8B9D1" },
    { src: "images/imagen4.jpg", bgColor: "#7D5B9D" },
    { src: "images/imagen5.jpg", bgColor: "#A5C2C8" },
    { src: "images/imagen6.jpg", bgColor: "#3A3A3A" },
  ];

  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (event) => {
    if (isScrolling) return;

    event.preventDefault();

    setIsScrolling(true);

    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    document.body.style.backgroundColor = slides[currentIndex].bgColor;

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex, slides]);

  return (
    <div className="carousel">
      <div
        className="carousel-content"
        style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="carousel-slide"
            initial={currentIndex === index ? { scale: 0.5 } : { scale: 1 }} // Imagen entrante empieza al 50%, la saliente no cambia.
            animate={
              currentIndex === index
                ? { 
                    scale: [0.5, 0.5, 1], // Mantiene 50% durante 0.5s y luego sube al 100%
                    y: [100, 0] // Movimiento de entrada hasta el centro (solo afecta la imagen entrante)
                  }
                : { scale: 1 } // La imagen saliente permanece al 100%
            }
            transition={
              currentIndex === index
                ? {
                    duration: 3, // Total de 3 segundos para la animación completa
                    times: [0, 0.33, 1], // División de tiempo: 1s movimiento, 0.5s quieto, 1.5s zoom
                    ease: ["easeInOut", "easeInOut", "easeInOut"]
                  }
                : { duration: 0 } // La imagen saliente no tiene transición
            }
          >
            <img src={slide.src} alt={`Slide ${index + 1}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
