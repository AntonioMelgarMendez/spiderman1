import React from 'react';
import '../styles/spidermannote.css';  // Asegúrate de tener un archivo CSS para estilos


const Note = ({ imageSrc, title, paragraph, buttonText }) => {
    return (
      <div className="container">
        <img className="image" src={imageSrc} alt="Card Image" />
        <div className="content">
          <div className="title">{title}</div>
          <div className="paragraph">{paragraph}</div>
          <button className="button">{buttonText}</button>
        </div>
      </div>
    );
  };

export default Note;
