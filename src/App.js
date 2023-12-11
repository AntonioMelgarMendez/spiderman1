// App.js
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Note from './components/spidermannote';
import Carousel from './components/carrusel';
import TriangleComponent from './components/triangle';
import Abilities from './components/abilites';
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

import '../src/App.css';
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

function App() {
  const [selectedSet, setSelectedSet] = useState('set1');

  const handleSetChange = (set) => {
    setSelectedSet(set);
  };

  return (
    <div className="app-container">
      <Navbar />
      <Note
        imageSrc={image}
        title="SPIDER-MAN"
        paragraph="With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man."
        buttonText="READ BIO"
      />
      <TriangleComponent/>
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
      <Abilities/>
    </div>
  );
}

export default App;
