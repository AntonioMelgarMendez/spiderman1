import React, { useState } from 'react';
import '../styles/navbar.css';  // Asegúrate de tener un archivo CSS para estilos
import logo from "../sources/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="/">INICIO</a>
        <a href="/historia">HISTORIA</a>
        <a href="/personajes">PERSONAJES</a>
        <a href="/comics">CÓMICS</a>
        <a href="/peliculas">PELÍCULAS</a>
      </div>
    </div>
  );
};

export default Navbar;
