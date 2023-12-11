// TriangleComponent.js
import React, { useState } from 'react';
import '../styles/TriangleComponent.css'; // Asegúrate de tener los estilos CSS
import img from "../sources/agility.jpg";
import img2 from "../sources/holland.jpg";
import img3 from "../sources/webshoot.jpg";
import img4 from "../sources/pincers.jpg";


const Abilities = () => {
  const contentMap = {
    Agility: { title:"Agility", text: 'Spider-Man has incredible agility, allowing him to catch his enemies off guard with how quickly he can move and contort in battle.', image: img },
    Awareness: { title:"Awareness", text: 'Spider-Man has shown an extrasensory awareness of impending danger.', image: img2 },
    WebShooters: { title:"Web Shooters", text: 'Peter Parker’s own invention, which were then upgraded by Tony Stark, Spider-Man’s web-shooters can be used as weapons, a means to travel the city, and much more.', image: img3 },
    Pincers: {title:"Pincers",  text: 'Even more advanced than the first costume Tony Stark gave him, Peter’s armored suit includes pincers that can be used to help root Spider-Man in place.', image: img4 },
  
    // Agrega más categorías según sea necesario
  };

  const [currentCategory, setCurrentCategory] = useState('Agility');

  const changeContent = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="triangle-container">
        <div className='containerglobal'>

            <div className="text-container">
                <h2>{contentMap[currentCategory].title}</h2>
                <p>{contentMap[currentCategory].text}</p>
           </div>
           <div className="image-container">
                <img src={contentMap[currentCategory].image} alt="Spider-Man" />
            </div>
        </div>  
      <div className="button-container">
        <button className="button1" onClick={() => changeContent('Agility')}>
          AGILITY
        </button>
        <button className="button1" onClick={() => changeContent('Awareness')}>
          AWARENESS
        </button>
        <button className="button1" onClick={() => changeContent('WebShooters')}>
         WEB SHOOTERS
        </button>
        <button className="button1" onClick={() => changeContent('Pincers')}>
          PINCERS
        </button>

        {/* Agrega más botones según sea necesario */}
      </div>
    </div>
  );
}

export default Abilities;