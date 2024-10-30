import React, { useRef, useState } from 'react';
import Carousel from './Carousel';
import Navbar from './components/navbar';
import { useTranslation } from 'react-i18next';

const App = () => {
  const carouselRef = useRef(null);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en'); // Estado para controlar el idioma actual

  const scrollToTop = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollToTop();
    }
  };

  const changeLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'; // Alterna entre 'en' y 'es'
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage); // Actualiza el estado del idioma
  };

  return (
    <div className="App">
      <Navbar
        scrollToTop={scrollToTop}
        changeLanguage={changeLanguage}
        language={language} // Pasa el idioma actual como prop
      />
      <Carousel ref={carouselRef} />
    </div>
  );
};

export default App;
