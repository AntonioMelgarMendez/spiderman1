// CardComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cardgeneric.css'; // Asegúrate de tener los estilos CSS

const cardGeneric = ({ image, title, releaseDate }) => {
  return (
    <div className="modified-card-container1">
      <div className="modified-card1">
        <div className="modified-card-image-container1">
          <img className="modified-card-image1" src={image} alt={title} />
        </div>
  
        <div className="modified-card-content1">
          <div className="modified-card-title1">{title}</div>
          <div className="modified-card-date1">{releaseDate}</div>
        </div>
      </div>
    </div>
  );
};

cardGeneric.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default cardGeneric;
