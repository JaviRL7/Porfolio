import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";
import "./styles/texto.css"; // Importa el archivo CSS para el texto

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(null); // Índice de imagen que debe hacer zoom
  const slides = [
    { src: "images/imagen1.jpg", bgColor: "#4B8BBE", text: "Texto 1" },
    { src: "images/imagen2.jpg", bgColor: "#6C9A8A", text: "Texto 2" },
    { src: "images/imagen3.jpg", bgColor: "#B8B9D1", text: "Texto 3" },
    { src: "images/imagen4.jpg", bgColor: "#7D5B9D", text: "Texto 4" },
    { src: "images/imagen5.jpg", bgColor: "#A5C2C8", text: "Texto 5" },
    { src: "images/imagen6.jpg", bgColor: "#3A3A3A", text: "Texto 6" },
  ];
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (event) => {
    if (isScrolling) return;
    event.preventDefault();
    setIsScrolling(true);
    setZoomIndex(null); // Reseteamos el zoom al iniciar el scroll
    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
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

  useEffect(() => {
    document.body.style.backgroundColor = slides[currentIndex].bgColor;
  }, [currentIndex]);

  useEffect(() => {
    // Resetea el zoom y el texto cada vez que cambia el índice
    setZoomIndex(null);
    const zoomTimeout = setTimeout(() => {
      setZoomIndex(currentIndex); // Activa el zoom para la nueva imagen
    }, 800); // Ajusta el tiempo según sea necesario: 0.6s + 0.2s

    return () => clearTimeout(zoomTimeout); // Limpiar el timeout al desmontar
  }, [currentIndex]);

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
            initial={
              currentIndex === index ? { scale: 0.8, y: 100 } : { scale: 1, y: 0 }
            }
            animate={
              currentIndex === index
                ? { scale: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
                : { scale: 1, y: 0, transition: { duration: 0 } }
            }
          >
            <motion.img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              animate={zoomIndex === index ? { scale: 1.5 } : { scale: 1 }} // Zoom más grande
              transition={zoomIndex === index ? { duration: 0.5, ease: "easeInOut" } : {}}
            />
            <motion.h1
              className="carousel-text"
              initial={{ opacity: 0, y: 100 }}
              animate={currentIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {slide.text}
            </motion.h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
