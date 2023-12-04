import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./header.css";

const SimpleSlider = ({ cards }) => {
  const settings = {
    dots: false, 
    infinite: true,       
    speed: 500,           
    slidesToShow: 4,      
    slidesToScroll: 1,    
    autoplay: true,       
    autoplaySpeed: 3000,  
    
    responsive: [
      {
        breakpoint: 1024,  // Adjust settings for screens wider than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,   // Adjust settings for screens wider than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ],
  };
        

  return (
   
   
   
   <Slider {...settings } >

      {cards.map((item, index) => (
        <div key={index} className="slider-item">
          <img className='slidimg' src={item.image} alt={item.title} />
         
        </div>
      ))}

    </Slider>
    

  );
};

export default SimpleSlider;
