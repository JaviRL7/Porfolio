import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/texto.css"; // Asegúrate de que la ruta sea correcta

const Texto = ({ currentIndex, slides }) => {
  const [showText, setShowText] = useState(false);
  const [showProjectLink, setShowProjectLink] = useState(false);

  useEffect(() => {
    setShowText(false);
    setShowProjectLink(false);
    const textTimeout = setTimeout(() => {
      setShowText(true); // Muestra el texto después de la animación de zoom
    }, 1300); // 0.8s + 0.5s

    const projectLinkTimeout = setTimeout(() => {
      setShowProjectLink(true); // Muestra "Ver Proyecto" después del texto
    }, 1800); // 1.3s + 0.5s de retraso

    return () => {
      clearTimeout(textTimeout); // Limpiar el timeout al desmontar
      clearTimeout(projectLinkTimeout); // Limpiar el timeout al desmontar
    };
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
            <h2 className="green-text">Desarrollador Front End</h2>
          </motion.div>
          <motion.div
            className="subtext-content"
            initial={{ y: "100vh" }}
            animate={showText && currentIndex === index ? { y: 10 } : { y: "100vh" }}
            transition={{ duration: 0.5 }}
            style={{ display: showText && currentIndex === index ? "flex" : "none" }}
          >
            <motion.div className="subtext-line"></motion.div>
            <motion.h4
              className="carousel-subtext"
              initial={{ opacity: 0 }}
              animate={{ opacity: showProjectLink ? 1 : 0 }}
              transition={{ duration: 0.5 }}
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
