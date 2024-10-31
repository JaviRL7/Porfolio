import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/texto.css";

const Texto = ({ currentIndex, slides, onHoverProject }) => {
  const [showText, setShowText] = useState(false);
  const [showProjectLink, setShowProjectLink] = useState(false);

  useEffect(() => {
    setShowText(false);
    setShowProjectLink(false);
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 1300);
    const projectLinkTimeout = setTimeout(() => {
      setShowProjectLink(true);
    }, 1800);
    return () => {
      clearTimeout(textTimeout);
      clearTimeout(projectLinkTimeout);
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
            {currentIndex === 1 && ( // Condición para mostrar solo en el segundo slide
              <Link to="/project2">
                <motion.h4
                  className="carousel-subtext"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showProjectLink ? 1 : 0 }}
                  transition={{ duration: 0.1 }}
                  onMouseEnter={() => onHoverProject(true)}
                  onMouseLeave={() => onHoverProject(false)}
                >
                  Ver Proyecto
                </motion.h4>
              </Link>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Texto;
