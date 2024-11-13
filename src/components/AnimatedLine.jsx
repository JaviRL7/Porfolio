// src/components/AnimatedLine.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/AnimatedLine.css';

const AnimatedLine = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    // Animación de GSAP para hacer que la línea crezca y desaparezca de arriba hacia abajo
    gsap.fromTo(
      lineRef.current,
      { height: 0 },             // Inicia con altura 0
      {
        height: "120px",         // Crece hasta 120px
        duration: 1.5,           // Duración de cada ciclo de animación
        ease: "power2.inOut",    // Suavizado
        repeat: -1,              // Repetición infinita
        yoyo: true,              // Vuelve al punto inicial (desaparece)
      }
    );
  }, []);

  return <div className="animated-line" ref={lineRef}></div>;
};

export default AnimatedLine;
