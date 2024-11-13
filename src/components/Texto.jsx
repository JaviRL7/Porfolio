// Texto.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "../styles/texto.css";

const Texto = ({ currentIndex, slides, onHoverProject }) => {
  const [showText, setShowText] = useState(false);
  const [showProjectLink, setShowProjectLink] = useState(false);
  const navigate = useNavigate(); // Inicializar el hook de navegación

  useEffect(() => {
    setShowText(false);
    setShowProjectLink(false);

    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 800);

    const projectLinkTimeout = setTimeout(() => {
      setShowProjectLink(true);
    }, 1300);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(projectLinkTimeout);
    };
  }, [currentIndex]);

  const handleProjectClick = () => {
    navigate("/project2"); // Navegar a /project2 al hacer clic
  };

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

            {currentIndex === 1 && (
              <motion.h4
                className="project-link"
                initial={{ opacity: 0 }}
                animate={{ opacity: showProjectLink ? 1 : 0 }}
                transition={{ duration: 0.1 }}
                onMouseEnter={() => onHoverProject(true)}
                onMouseLeave={() => onHoverProject(false)}
                onClick={handleProjectClick} // Usar handleProjectClick al hacer clic
              >
                Ver Proyecto
              </motion.h4>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Texto;
