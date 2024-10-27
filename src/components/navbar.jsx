import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-content">
        <div className="navbar-left">
          <img
            className="navbar-logo"
            src="https://i.pinimg.com/474x/01/ab/fc/01abfc687a17904a0a16e3bfc266831a.jpg"
            alt="Logo"
          />
        </div>
        <div className="navbar-center">
          <div className="navbar-links">
            <a href="#inicio">Inicio</a>
            <a href="#contacto">Contacto</a>
            <a href="#github">Github</a>
            <a href="#proyectos">Proyectos</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
