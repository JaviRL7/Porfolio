import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useTranslation } from "react-i18next";
import CarouselContent from "./CarouselContent"; // Componente de contenido
import CarouselCounter from "./CarouselCounter"; // Indicador de conteo
import Texto from "./Texto";
import "../styles/Carousel.css";

const Carousel = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(null);
  const [hoverZoomIndex, setHoverZoomIndex] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const slides = [
    { src: "images/imagen11.jpg", bgColor: "#C2C8D4", text: t("carousel.intro") },
    { src: "images/gunlim/esta.jpeg", bgColor: "#C14A30", text: "Nectar" },
    { src: "images/imagen7.jpg", bgColor: "#678298", text: "Texto 3" },
    { src: "images/imagen8.jpg", bgColor: "#715296", text: "Texto 4" },
    { src: "images/imagen8.jpg", bgColor: "#C9CF00", text: "Texto 5" },
    { src: "images/imagen6.jpg", bgColor: "#3A3A3A", text: "Texto 6" },
  ];

  useImperativeHandle(ref, () => ({
    scrollToTop() {
      setCurrentIndex(0);
    },
  }));

  const handleScroll = (event) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setZoomIndex(null);
    setHoverZoomIndex(null);

    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    document.body.style.backgroundColor = slides[currentIndex].bgColor;
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex, slides]);

  useEffect(() => {
    setZoomIndex(null);
    const zoomTimeout = setTimeout(() => {
      setZoomIndex(currentIndex);
    }, 800);
    return () => clearTimeout(zoomTimeout);
  }, [currentIndex]);

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
    </div>
  );
});

export default Carousel;
