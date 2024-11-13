// Carousel.jsx
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useTranslation } from "react-i18next";
import CarouselContent from "./CarouselContent"; // Importar CarouselContent
import CarouselCounter from "./CarouselCounter"; // Importar CarouselCounter
import Texto from "./Texto";
import "../styles/Carousel.css";

const Carousel = forwardRef((props, ref) => {
  const { t } = useTranslation(); // Hook para la traducción de textos
  const [currentIndex, setCurrentIndex] = useState(0); // Estado del índice actual
  const [zoomIndex, setZoomIndex] = useState(null); // Estado para controlar el zoom
  const [hoverZoomIndex, setHoverZoomIndex] = useState(null); // Estado para el hover
  const [isScrolling, setIsScrolling] = useState(false); // Estado para evitar el scrolling múltiple

  // Definición de las diapositivas
  const slides = [
    { src: "images/imagen11.jpg", bgColor: "#C2C8D4", text: t("carousel.intro") },
    { src: "images/imagen6.jpg", bgColor: "#C14A30", text: "Nectar" },
    { src: "images/imagen7.jpg", bgColor: "#678298", text: "Texto 3" },
    { src: "images/imagen8.jpg", bgColor: "#715296", text: "Texto 4" },
    { src: "images/imagen8.jpg", bgColor: "#C9CF00", text: "Texto 5" },
    { src: "images/imagen6.jpg", bgColor: "#3A3A3A", text: "Texto 6" },
  ];

  // Permite el scroll hacia arriba al llamar a scrollToTop
  useImperativeHandle(ref, () => ({
    scrollToTop() {
      setCurrentIndex(0);
    },
  }));

  // Controlador para el evento de scroll
  const handleScroll = (event) => {
    if (isScrolling) return; // Evitar scrolling mientras se está procesando uno
    setIsScrolling(true);
    setZoomIndex(null);
    setHoverZoomIndex(null);

    // Cambiar el índice basado en la dirección del scroll
    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    }

    // Restablecer el estado de scrolling después de un tiempo
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Efecto para añadir y limpiar el listener de scroll
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    document.body.style.backgroundColor = slides[currentIndex].bgColor; // Cambia el fondo según el índice
    return () => {
      window.removeEventListener("wheel", handleScroll); // Limpiar el listener
    };
  }, [currentIndex, slides]);

  // Efecto para manejar el zoom en la imagen actual
  useEffect(() => {
    setZoomIndex(null);
    const zoomTimeout = setTimeout(() => {
      setZoomIndex(currentIndex);
    }, 800);
    return () => clearTimeout(zoomTimeout);
  }, [currentIndex]);

  // Controlador para el hover sobre las imágenes
  const handleHoverProject = (isHovered) => {
    setHoverZoomIndex(isHovered ? currentIndex : null);
  };

  return (
    <div className="carousel">
      <CarouselContent
        slides={slides}
        currentIndex={currentIndex}
        zoomIndex={zoomIndex}
        hoverZoomIndex={hoverZoomIndex}
        handleHoverProject={handleHoverProject}
      />
      <CarouselCounter slides={slides} currentIndex={currentIndex} />
      <Texto currentIndex={currentIndex} slides={slides} onHoverProject={handleHoverProject} />

      {/* Indicador de scroll */}
      <span className="scroll-indicator" style={{ opacity: 1 }}>
        <span className="scroll-indicator__line"></span>
        
      </span>
    </div>
);
});

export default Carousel;