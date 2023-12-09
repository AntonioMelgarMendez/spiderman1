// Card.js
import React from 'react';
import '../styles/Card.css';

const Cards = ({ imageSrc, title, text }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt={title} />
      <div className="card-line"></div> {/* Div rojo entre la imagen y el título */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Cards;
