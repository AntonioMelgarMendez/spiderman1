// App.js
import './App.css';
import Navbar from "./components/navbar";
import Note from "./components/spidermannote";
import Cards from "./components/cards";
import image from "./sources/spidermanimg.png";
import image1 from "./sources/ironman.jpg";
import image2 from "./sources/captainAmerica.jpg";
import image3 from "./sources/avengers.jpg";
import image4 from "./sources/doctorStrange.jpg";
import image5 from "./sources/guardians.jpg";

function App() {
  return (
    <div className="font-roboto-condensed">
      <Navbar />
      <Note
        imageSrc={image}
        title="SPIDER-MAN"
        paragraph="With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man."
        buttonText="READ BIO"
      />
        <div style={{ color: '#151515', textAlign: 'left', paddingLeft: '50px', fontSize:"30px" }}>CONNECTIONS</div>
      <div className="flex flex-wrap justify-evenly p-4"> {/* Aplicando clases de Tailwind para el contenedor */}
        <Cards
          imageSrc={image1}
          title="IRON MAN"
          text="TONY STARK"
        />
        <Cards
          imageSrc={image2}
          title="CAPTAIN AMERICA"
          text="STEVE ROGERS"
        />
        <Cards
          imageSrc={image3}
          title="AVENGERS"
          text=" "
        />
        <Cards
          imageSrc={image4}
          title=" DOCTOR STRANGE"
          text="STEPHEN STRANGE"
        />
        <Cards
          imageSrc={image5}
          title="GUARDIANS OF THE GALAXY"
          text=" "
        />
      </div>
    </div>
  );
}

export default App;
