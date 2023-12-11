// TriangleComponent.js
import React from 'react';
import '../styles/titletext.css';
// Asegúrate de tener los estilos CSS
const Titletext = () => {
  return (
    <div className='containerimage'>
      <div className='texttitle'>
        <div className="image-container">
          <img className="image2" src="https://cdn.marvel.com/content/1x/005smp_ons_quo_mob_01_0.jpg" alt="" />
          <div className="overlay">
            <h1>"WHEN YOU CAN DO THE THINGS THAT I CAN, BUT YOU DON'T, AND THEN THE BAD THINGS HAPPEN..."</h1>
            <button>READ BIO</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Titletext;
