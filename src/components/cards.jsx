// Card.js
import React from 'react';
import '../styles/Card.css';

const Card = ({ imageSrc, title, text }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt={title} />
      <div className="card-line"></div> {/* Línea roja */}
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
