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
        <div key={index} className="text-wrapper">
          <motion.div
            className="text-content"
            initial={{ y: "100vh" }}
            animate={showText && currentIndex === index ? { y: 0 } : { y: "100vh" }}
            transition={{ duration: 0.5 }}
            style={{ display: showText && currentIndex === index ? "block" : "none" }}
          >
            <h1 className="carousel-text">{slide.text}</h1>
          </motion.div>
          <motion.div
            className="subtext-content"
            initial={{ x: "-100vw" }}
            animate={showText && currentIndex === index ? { x: 0 } : { x: "-100vw" }}
            transition={{ duration: 0.5 }}
            style={{ display: showText && currentIndex === index ? "flex" : "none" }}
          >
            <motion.h4
              className="carousel-subtext"
              whileHover={{ scale: 1.1 }}
            >
              Ver Proyecto
            </motion.h4>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Texto;
