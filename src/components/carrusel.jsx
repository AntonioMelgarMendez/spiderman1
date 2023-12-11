// Carousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Card from './cards';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css';

const Carousel = ({ cards }) => {
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(calculateSlidesToShow());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calculateSlidesToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 700) {
      return 5;
    }
    else if (screenWidth >= 600) {
      return 4;
    } else if (screenWidth >= 480) {
      return 3;
    } else{
      return 2;
    } 

  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow,
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
