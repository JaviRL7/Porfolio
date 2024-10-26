import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/texto.css"; // Asegúrate de que la ruta sea correcta

const Texto = ({ currentIndex, slides }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(false);
    const textTimeout = setTimeout(() => {
      setShowText(true); // Muestra el texto después de la animación de zoom
    }, 1300); // 0.8s + 0.5s

    return () => clearTimeout(textTimeout); // Limpiar el timeout al desmontar
  }, [currentIndex]);

  return (
    <div className="text-container">
      {slides.map((slide, index) => (
        <motion.h1
          key={index}
          className="carousel-text"
          initial={{ y: "100vh" }}
          animate={showText && currentIndex === index ? { y: 0 } : { y: "100vh" }}
          transition={{ duration: 0.5 }}
          style={{ display: showText && currentIndex === index ? "block" : "none" }}
        >
          {slide.text}
        </motion.h1>
      ))}
    </div>
  );
};

export default Texto;
