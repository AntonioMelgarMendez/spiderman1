
// Card1.js
import React from 'react';
import "../styles/movie.css";

const Card2 = ({ image, title, releaseDate }) => {
  
  return (
    <div className="modified-card-container2">
      <div className="modified-card2">
        <div className="modified-card-image-container2">
          <img className="modified-card-image2" src={image} alt={title} />
        </div>
  
        <div className="modified-card-content2">
          <div className="modified-card-title2">{title}</div>
          <div className="modified-card-date2">{releaseDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Card2;