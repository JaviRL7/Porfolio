import React, { useEffect } from "react";
import "../styles/project2.css";
import Icon from "@mdi/react";  // Esta es la forma correcta de importar el componente
import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";
const Project2 = () => {
  useEffect(() => {
    // Establecer el fondo blanco al montar el componente
    document.body.style.backgroundColor = "#ffffff";

    const handleScroll = () => {
      const sections = document.querySelectorAll(".fade-in-section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });

      const footer = document.querySelector("footer");
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.classList.add("visible");
      } else {
        footer.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="project-container">
      {/* Video Principal */}
      <div className="hero-section">
        <div className="scroll-indicator">
          <div className="indicator-frame">
            <div className="indicator-dot"></div>
          </div>
        </div>
        <video className="hero-video" autoPlay muted loop>
          <source src="/images/video/video1.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
        <div className="hero-overlay">
          <h1 className="main-title">Gunlim</h1>
          <h2 className="subtitle">Donde conoces a las leyendas</h2>
        </div>
      </div>

      {/* Primera Sección: Introducción */}
      <div className="red-bg-section">
        <div className="fade-in-content">
          <h1 className="section-title">¿Qué es Gunlim?</h1>
          <div className="fade-in-section">
            <p className="section-description">
              Gunlim fue mi proyecto de fin de grado, inspirado en plataformas
              como Sheep eSports y SofaScore. Su objetivo es ofrecer un portal
              de información del mundo de los eSports, donde puedes consultar
              estadísticas de partidas, crear tus equipos, participar en
              minijuegos y seguir a tus amigos y jugadores favoritos.
            </p>
          </div>
        </div>
      </div>
      {/* Imagen Centradas */}
      <div className="image-container fade-in-section margin-top-only">
        <img
          src="/images/gunlim/c2.jpeg"
          alt="Interfaz de usuario de Gunlim"
          className="centered-image"
        />
      </div>

      {/* Segunda Sección: Interfaz */}
      <div className="white-bg-section fade-in-section">
        <h1 className="section-title text-highlight">La Interfaz</h1>
        <p className="section-description text-highlight">
          Diseñada para ser intuitiva y moderna, la interfaz de Gunlim permite
          explorar estadísticas, gestionar equipos y acceder a información clave
          de forma rápida y sencilla.
        </p>
      </div>

      {/* Sección con Imagen Izquierda y Texto Derecha */}
      <div className="row-section fade-in-section margin-vertical">
        <div className="row-image">
          <img
            src="/images/gunlim/c3.jpeg"
            alt="Comunidad Activa"
            className="responsive-image"
          />
        </div>
        <div className="vertical-divider"></div>
        <div className="row-text">
          <div className="text-content">
            <h2 className="section-title text-highlight">Comunidad Activa</h2>
            <p className="section-description text-highlight">
              Gunlim fomenta la interacción entre los usuarios, creando una
              comunidad activa donde compartir estrategias, seguir a tus
              jugadores favoritos y participar en eventos exclusivos.
            </p>
          </div>
        </div>
      </div>
      <div className="row-section fade-in-section margin-vertical">
        <div className="row-image">
          <img
            src="/images/gunlim/c5.jpeg"
            alt="Comunidad Activa"
            className="responsive-image"
          />
        </div>
        <div className="vertical-divider"></div>
        <div className="row-text">
          <div className="text-content">
            <h2 className="section-title text-highlight">Comunidad Activa</h2>
            <p className="section-description text-highlight">
              Gunlim fomenta la interacción entre los usuarios, creando una
              comunidad activa donde compartir estrategias, seguir a tus
              jugadores favoritos y participar en eventos exclusivos.
            </p>
          </div>
        </div>
      </div>

      {/* Video centrado (similar a la imagen centrada) */}
      <div className="video-container fade-in-section margin-vertical">
        <video className="centered-video small-video" autoPlay muted loop>
          <source src="/images/video/video2.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
      </div>

      {/* Footer */}
      {/* Footer */}
      <footer className="footer fade-in-section">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <Icon path={mdiGithub} size={1} /> {/* Usamos el componente Icon para mostrar el icono */}
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <Icon path={mdiLinkedin} size={1} />
          </a>
          <a
            href="mailto:your-email@gmail.com"
            className="social-icon"
            aria-label="Gmail"
          >
            <Icon path={mdiEmail} size={1} />
          </a>
        </div>

        <div className="contact-info">
          <p>¿Tienes preguntas o sugerencias? ¡Contáctanos!</p>
          <p>
            Email: <a href="mailto:your-email@gmail.com">your-email@gmail.com</a>
          </p>
          <p>
            Teléfono: <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
        </div>

        <p className="footer-rights">© 2024 Gunlim. Todos los derechos reservados.</p>
      </div>
    </footer>


    </div>
  );
};

export default Project2;
