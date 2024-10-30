import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

const Navbar = ({ scrollToTop, changeLanguage, language }) => {
  const { t } = useTranslation();

  return (
    <header className="navbar">
      <nav className="navbar-content">
        <div className="navbar-left">
          <img
            className="navbar-logo"
            src="https://i.pinimg.com/474x/01/ab/fc/01abfc687a17904a0a16e3bfc266831a.jpg"
            alt="Logo"
            onClick={scrollToTop}
          />
        </div>
        <div className="navbar-center">
          <div className="navbar-links">
            <a href="#inicio" onClick={scrollToTop}>{t('navbar.home')}</a>
            <a href="#contacto">{t('navbar.contact')}</a>
            <a href="https://github.com/JaviRL7" target="_blank" rel="noopener noreferrer">{t('navbar.github')}</a>
            <a href="https://www.linkedin.com/in/javier-rodriguez-lopez-4795a8180/" target="_blank" rel="noopener noreferrer">{t('navbar.linkedin')}</a>
            <a href="#proyectos">{t('navbar.projects')}</a>
            {/* Enlace de texto para cambiar el idioma */}
            <a onClick={changeLanguage} className="language-toggle" style={{ cursor: 'pointer' }}>
              {language === 'en' ? 'ES' : 'EN'}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
