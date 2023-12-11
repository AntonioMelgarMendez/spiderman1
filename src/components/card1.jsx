// Card1.js
import React from 'react';
import "../styles/card1.css";

const Card1 = ({ image, title, text }) => {
  return (
    <div className="triangle-container1">
      <div className='containerglobal1'>
        <div className="text-container1">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="image-container1">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Card1;
