import React from "react";
import "../styles/project2.css";

const Project2 = () => {
  return (
    <div className="project2-container">
      {/* Sección de la imagen ocupando toda la pantalla */}
      <div className="image-section">
        <img src="/images/imagen6.jpg" alt="Proyecto Imagen Completa" className="full-image" />
      </div>
      {/* Sección de contenido adicional que continúa debajo */}
      <div className="content-section">
        <h1>Ejemplo de Título 1</h1>
        <h1>Ejemplo de Título 2</h1>
        <p>Este es un ejemplo de contenido adicional que continúa debajo de la imagen.</p>
      </div>
    </div>
  );
};

export default Project2;
