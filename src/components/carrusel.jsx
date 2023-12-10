// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import Card from './cards';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css';// Asegúrate de tener estilos para el carrusel

const Carousel = ({ cards }) => {
  const settings = {
    dots: false, // Oculta los puntos indicadores
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5, // Muestra 3 imágenes por defecto
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600, // Ajusta este valor según tus necesidades
        settings: {
          slidesToShow: 2, // Muestra 2 imágenes en pantallas más pequeñas
        },
      },
      {
        breakpoint: 480, // Ajusta este valor según tus necesidades
        settings: {
          slidesToShow: 2, // Muestra 1 imagen en pantallas aún más pequeñas
        },
      },
      {
        breakpoint: 450, // Ajusta este valor según tus necesidades
        settings: {
          slidesToShow: 1.8, // Muestra 1 imagen en pantallas aún más pequeñas
        },
      },
      {
        breakpoint: 410, // Ajusta este valor según tus necesidades
        settings: {
          slidesToShow: 1.7, // Muestra 1 imagen en pantallas aún más pequeñas
        },
      },
      {
        breakpoint: 400, // Ajusta este valor según tus necesidades
        settings: {
          slidesToShow:1.6, // Muestra 1 imagen en pantallas aún más pequeñas
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
