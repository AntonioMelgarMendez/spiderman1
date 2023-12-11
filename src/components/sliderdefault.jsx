// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import Card1 from './card1';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/sliderdefault.css";

const Carousel = ({ cards }) => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <div className="carousel-container1">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card1 {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
