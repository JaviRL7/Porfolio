import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Texto from "./components/Texto";
import "./Carousel.css";
import "./styles/contador.css";

const Carousel = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(null);
  const [hoverZoomIndex, setHoverZoomIndex] = useState(null); // Nuevo estado para el zoom adicional
  const { t } = useTranslation();
  const slides = [
    { src: "images/imagen11.jpg", bgColor: "#C2C8D4", text: t("carousel.intro") },
    { src: "images/imagen6.jpg", bgColor: "#C14A30", text: "Nectar" },
    { src: "images/imagen7.jpg", bgColor: "#678298", text: "Texto 3" },
    { src: "images/imagen8.jpg", bgColor: "#715296", text: "Texto 4" },
    { src: "images/imagen8.jpg", bgColor: "#C9CF00", text: "Texto 5" },
    { src: "images/imagen6.jpg", bgColor: "#3A3A3A", text: "Texto 6" },
  ];
  const [isScrolling, setIsScrolling] = useState(false);

  useImperativeHandle(ref, () => ({
    scrollToTop() {
      setCurrentIndex(0);
    },
  }));

  const handleScroll = (event) => {
    if (isScrolling) return;
    event.preventDefault();
    setIsScrolling(true);
    setZoomIndex(null);
    setHoverZoomIndex(null); // Resetear el hoverZoom al cambiar de imagen
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
    setZoomIndex(null);
    const zoomTimeout = setTimeout(() => {
      setZoomIndex(currentIndex);
    }, 800);

    return () => clearTimeout(zoomTimeout);
  }, [currentIndex]);

  // Función para manejar el hover en "Ver Proyecto"
  const handleHoverProject = (isHovered) => {
    setHoverZoomIndex(isHovered ? currentIndex : null);
  };

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
              animate={
                hoverZoomIndex === index
                  ? { scale: 1.55 } // Aumentar el zoom adicional al hacer hover
                  : zoomIndex === index
                  ? { scale: 1.5 }
                  : { scale: 1 }
              }
              transition={{
                duration: hoverZoomIndex === index ? 0.1 : 1,
                ease: "easeInOut",
              }}
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
      <Texto currentIndex={currentIndex} slides={slides} onHoverProject={handleHoverProject} />
    </div>
  );
});

export default Carousel;
