// App.js
import React, { useState, useEffect} from 'react';
import Navbar from './components/navbar';
import Note from './components/spidermannote';
import Carousel from './components/carrusel';
import TriangleComponent from './components/triangle';
import Abilities from './components/abilites';
import Sliderdefault from './components/sliderdefault'; 
import SliderMovie from './components/sliderMovie'; 
import CardGeneric from './components/cardgeneric';// Importa el componente para pantallas pequeñas
import image from './sources/spidermanimg.png';
import image1 from './sources/ironman.jpg';
import image2 from './sources/captainAmerica.jpg';
import image3 from './sources/avengers.jpg';
import image4 from './sources/doctorStrange.jpg';
import image5 from './sources/guardians.jpg';
import image6 from './sources/wong.jpg';
import image7 from './sources/drax.jpg';
import image8 from './sources/mantis.jpg';
import image9 from './sources/hawk.jpg';
import image10 from './sources/blackwidow.jpg';
import image11 from './sources/warmachine.jpg';
import image12 from './sources/wintersoldier.jpg';
import image13 from './sources/vision.jpg';
import image14 from './sources/nebula.jpg';
import enemy from './sources/vulture.jpg';
import enemy1 from './sources/Thanos.jpg';
import enemy2 from './sources/ebonymaw.jpg';
import enemy3 from './sources/cullobsidian.jpg';
import po from './sources/team2.jpg';
import p1 from './sources/avengers.jpg';
import s1 from './sources/sylvie.jpg';
import s2 from './sources/barel.jpg';
import s3 from './sources/verse.jpg';
import s4 from './sources/liga.jpg';
import img from "./sources/titl1.jpg";
import img2 from "./sources/fery.jpg";
import img3 from "./sources/suit.jpg";
import img4 from "./sources/suit2.jpg";
import img5 from "./sources/thanosfight.jpg";
import img6 from "./sources/agility.jpg";
import img7 from "./sources/holland.jpg";
import img8 from "./sources/webshoot.jpg";
import img9 from "./sources/pincers.jpg";
import movie1 from "./sources/infinitywar.jpg"
import movie2 from "./sources/homecoming.jpg"
import movie3 from "./sources/civilwar.jpg"
import movie4 from "./sources/nohome.jpg"
import movie5 from "./sources/endgame.jpeg"
import movie6 from "./sources/spiderverso.jpg"

import '../src/App.css';
import Slider from 'react-slick';
const cardSets = {
  set1: [
    { imageSrc: image1, title: 'IRON MAN', text: 'TONY STARK' },
    { imageSrc: image2, title: 'CAPTAIN AMERICA', text: 'STEVE ROGERS' },
    { imageSrc: image3, title: 'AVENGERS', text: 'THE HEROES' },
    { imageSrc: image4, title: 'DOCTOR STRANGE', text: 'STEPHEN STRANGE' },
    { imageSrc: image5, title: 'GUARDIANS OF THE GALAXY', text: 'UNEXPECTED HEROES' },
    { imageSrc: image6, title: 'WONG', text: 'SORCERER SUPREME' },
    { imageSrc: image7, title: 'DRAX', text: '' },
    { imageSrc: image8, title: 'MANTIS', text: '' },
    { imageSrc: image9, title: 'HAWKEYE', text: 'CLINT BARTON' },
    { imageSrc: image10, title: 'BLACK WIDOW', text: 'NATASHA ROMANOFF' },
    { imageSrc: image11, title: 'WAR MACHINE', text: 'JAMES "RODHEY" RHODES' },
    { imageSrc: image12, title: 'WINTER SOLDIER', text: 'BUCKY BARNES' },
    { imageSrc: image13, title: 'VISION', text: '' },
    { imageSrc: image14, title: 'NEBULA', text: '' },
  ],
  set2: [
    { imageSrc: enemy, title: 'VULTURE', text: 'ADRIAN TOOMES' },
    { imageSrc: enemy1, title: 'THANOS', text: ' ' },
    { imageSrc: enemy2, title: 'EBONY MAW', text: ' ' },
    { imageSrc: enemy3, title: 'CULL OBSIDIAN', text: ' ' },
    { imageSrc: s1, title: 'SYLVIE', text: ' ' },
  ],
  set3: [
    { imageSrc: p1, title: 'AVENGERS', text: 'THE HEROES' },
    { imageSrc: s2, title: 'NO BARREL', text: ' ' },
    { imageSrc: s3, title: 'SPIDERVERSE', text: ' ' },
    { imageSrc: s4, title: 'THE JUSTICE LEAGUE', text: ' ' },
    { imageSrc: po, title: 'THE WAPAYASOS', text: ' ' },
  ],

};
const contentMap = {
  set1:[
  { title:"Teaming Up", text: 'On Titan, Spider-Man joined forces with several other heroes against Thanos, attempting to remove the Infinity Gauntlet from his hand.', image: img },
  { title:"Staten Island Ferry", text: 'Encountering a villain called the Vulture, Spider-Man tried to save the Staten Island Ferry from sinking, but needed Iron Man’s help to save everyone on board.', image: img2 },
  { title:"Taking On Vulture", text: 'With Tony Stark taking back his high tech suit, Peter used his original homemade costume to take on the Vulture.', image: img3 },
  {title:"New Suit",  text: 'While attempting to save Doctor Strange, Peter was given a new, advanced suit by Tony that better protected him as he found himself traveling to space.', image: img4 },
 { title:"Battling Thanos", text: 'On Titan, Spider-Man joined forces with several other heroes against Thanos, attempting to remove the Infinity Gauntlet from his hand.', image: img5 },
  ],
  set2:[
    { title:"Agility", text: 'Spider-Man has incredible agility, allowing him to catch his enemies off guard with how quickly he can move and contort in battle.', image: img6 },
    { title:"Awareness", text: 'Spider-Man has shown an extrasensory awareness of impending danger.', image: img7 },
    { title:"Web Shooters", text: 'Peter Parker’s own invention, which were then upgraded by Tony Stark, Spider-Man’s web-shooters can be used as weapons, a means to travel the city, and much more.', image: img8 },
    {title:"Pincers",  text: 'Even more advanced than the first costume Tony Stark gave him, Peter’s armored suit includes pincers that can be used to help root Spider-Man in place.', image: img9 },
  
  ],
  set3:[{image:movie6,title:"Across The Spiderverse",releaseDate:"2023"},{image:movie4,title:"No Way Home",releaseDate:"2021"},{image:movie5,title:"Avengers: End Game ",releaseDate:"2019"},{image:movie1,title:"Avengers: Infinity War",releaseDate:"2018"},{image:movie2,title:"Spider-Man: Homecoming",releaseDate:"2017"},{image:movie3,title:"Captain America: Civil War",releaseDate:"2016"}]

};

function App() {
  const [selectedSet, setSelectedSet] = useState('set1');
  
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleSetChange = (set) => {
    setSelectedSet(set);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      // Verifica si la pantalla es pequeña, por ejemplo, si el ancho es menor que 768px
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Verifica el tamaño de la pantalla al cargar la página
    checkScreenSize();

    // Agrega un event listener para verificar el tamaño de la pantalla cuando cambia
    window.addEventListener('resize', checkScreenSize);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  return (
    <div className="app-container">
      <Navbar />
      <Note
        imageSrc={image}
        title="SPIDER-MAN"
        paragraph="With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man."
        buttonText="READ BIO"
      />
      {/* Renderiza el componente correspondiente según el tamaño de la pantalla */}
      {isSmallScreen ? (
        <Sliderdefault cards={contentMap["set1"]} style={"card1"}  />
      ) : (
        <TriangleComponent />
      )}
      <div className='titulohead'>
       CONNECTS
      </div>

      <div className="button-container">
        <button
          className={selectedSet === 'set1' ? 'selected' : ''}
          onClick={() => handleSetChange('set1')}
        >
         ALLIES
        </button>
        <button
          className={selectedSet === 'set2' ? 'selected' : ''}
          onClick={() => handleSetChange('set2')}
        >
         ENEMIES
        </button>
        <button
          className={selectedSet === 'set3' ? 'selected' : ''}
          onClick={() => handleSetChange('set3')}
        >
          GROUPS
        </button>
      </div>
      <Carousel cards={cardSets[selectedSet]} />
      <div className='third'></div>
      {isSmallScreen ? (
        <Sliderdefault cards={contentMap["set2"]} style={"card1"}  />
      ) : (
        <Abilities/>
      )}
            <div className='titulohead'>
            RELATED MOVIES
      </div>
      {isSmallScreen ? (
        <SliderMovie cards={contentMap["set3"]}  />
      ) : (
        <div className='wrath'>
        <CardGeneric  image={movie1}
          title="Avengers: Infinity War"
          releaseDate="2018"/>
                <CardGeneric  image={movie2}
          title="Spider-Man: Homecoming"
          releaseDate="2017"/>
                <CardGeneric  image={movie3}
          title="Captain America: Civil War"
          releaseDate="2016"/>
       </div>
      )}


    </div>
    
  );
}

export default App;
