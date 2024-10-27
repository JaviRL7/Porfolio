import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Texto from "./components/Texto"; // Importa el componente de Texto
import "./Carousel.css";
import "./styles/contador.css"; // Importa el archivo CSS para el contador

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(null); // Índice de imagen que debe hacer zoom
  const slides = [
    { src: "images/imagen1.jpg", bgColor: "#C2C8D4", text: "Soy Javier Rodriguez" },
    { src: "images/imagen2.jpg", bgColor: "#C14A30", text: "Nectar" },
    { src: "images/imagen3.jpg", bgColor: "#678298", text: "Texto 3" },
    { src: "images/imagen4.jpg", bgColor: "#715296", text: "Texto 4" },
    { src: "images/imagen5.jpg", bgColor: "#C9CF00", text: "Texto 5" },
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
    // Resetea el zoom cada vez que cambia el índice
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
          </motion.div>
        ))}
      </div>
      <div className="carousel-counter">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`counter-number ${currentIndex === index ? "active" : ""}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <Texto currentIndex={currentIndex} slides={slides} /> {/* Añade el componente de Texto */}
    </div>
  );
};

export default Carousel;
