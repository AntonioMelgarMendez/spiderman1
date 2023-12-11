// TriangleComponent.js
import React, { useState } from 'react';
import '../styles/TriangleComponent.css'; // Asegúrate de tener los estilos CSS
import img from "../sources/titl1.jpg";
import img2 from "../sources/fery.jpg";
import img3 from "../sources/suit.jpg";
import img4 from "../sources/suit2.jpg";
import img5 from "../sources/thanosfight.jpg";

const TriangleComponent = () => {
  const contentMap = {
    Team: { title:"Teaming Up", text: 'On Titan, Spider-Man joined forces with several other heroes against Thanos, attempting to remove the Infinity Gauntlet from his hand.', image: img },
    island: { title:"Staten Island Ferry", text: 'Encountering a villain called the Vulture, Spider-Man tried to save the Staten Island Ferry from sinking, but needed Iron Man’s help to save everyone on board.', image: img2 },
    taking: { title:"Taking On Vulture", text: 'With Tony Stark taking back his high tech suit, Peter used his original homemade costume to take on the Vulture.', image: img3 },
    newsuit: {title:"New Suit",  text: 'While attempting to save Doctor Strange, Peter was given a new, advanced suit by Tony that better protected him as he found himself traveling to space.', image: img4 },
    thanos: { title:"Battling Thanos", text: 'On Titan, Spider-Man joined forces with several other heroes against Thanos, attempting to remove the Infinity Gauntlet from his hand.', image: img5 },
    // Agrega más categorías según sea necesario
  };

  const [currentCategory, setCurrentCategory] = useState('Team');

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
        <button className="button1" onClick={() => changeContent('Team')}>
          TEAMING UP
        </button>
        <button className="button1" onClick={() => changeContent('island')}>
          STATEN ISLAND FERRY
        </button>
        <button className="button1" onClick={() => changeContent('taking')}>
          TAKING ON VULTURE
        </button>
        <button className="button1" onClick={() => changeContent('newsuit')}>
          NEW SUIT
        </button>
        <button className="button1" onClick={() => changeContent('thanos')}>
          BATTLING THANOS
        </button>
        {/* Agrega más botones según sea necesario */}
      </div>
    </div>
  );
}

export default TriangleComponent;