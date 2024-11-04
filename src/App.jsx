// src/App.jsx
import React, { useRef, useState } from "react";
import Carousel from "./components/Carousel";
import Navbar from "./components/navbar";
import Project2 from "./pages/project2";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const carouselRef = useRef(null);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const scrollToTop = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollToTop();
    }
  };

  const changeLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <Router>
      <div className="App">
        <Navbar scrollToTop={scrollToTop} changeLanguage={changeLanguage} language={language} />
        <Routes>
          <Route path="/" element={<Carousel ref={carouselRef} />} />
          <Route path="/project2" element={<Project2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
