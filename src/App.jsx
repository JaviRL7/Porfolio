// src/App.jsx
import React, { useRef, useState } from "react";
import Carousel from "./components/Carousel";
import Navbar from "./components/navbar";
import Project2 from "./pages/project2";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FadeTransition from "./FadeTransition"; // Importa el componente de transición
import { AnimatePresence } from "framer-motion"; // Importa AnimatePresence para manejar la animación de salida
import "./App.css";

const App = () => {
  const carouselRef = useRef(null);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  // Función para hacer scroll al inicio del Carousel
  const scrollToTop = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollToTop();
    }
  };

  // Función para cambiar el idioma entre inglés y español
  const changeLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <Router>
      <div className="App">
        <Navbar scrollToTop={scrollToTop} changeLanguage={changeLanguage} language={language} />
        
        {/* Usamos AnimatePresence para manejar la animación de salida */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <FadeTransition>
                  <Carousel ref={carouselRef} />
                </FadeTransition>
              }
            />
            <Route
              path="/project2"
              element={
                <FadeTransition>
                  <Project2 />
                </FadeTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
