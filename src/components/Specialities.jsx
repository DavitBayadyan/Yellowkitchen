import React from "react";
import "./Adrees.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Frame28 from "../img/Frame 28.png";
import Frame29 from "../img/Frame 29.png";
import Frame30 from "../img/Frame 30.png";
import Frame31 from "../img/Frame 31.png";
import Frame32 from "../img/Frame 32.png";
import Frame33 from "../img/Frame 33.png";
import Frame34 from "../img/Frame 34.png";
import Frame35 from "../img/Frame 35.png";
import Background from "../img/USP.png";
import Map from "../img/Map.png";

const Specialities = () => {
  const imageArray = [
    {
      image: Frame28,
    },
    {
      image: Frame29,
    },
    {
      image: Frame30,
    },
    {
      image: Frame31,
    },
    {
      image: Frame32,
    },
    {
      image: Frame33,
    },
    {
      image: Frame34,
    },
    {
      image: Frame35,
    },
    {
      image: Frame28,
    },
    {
      image: Frame29,
    },
    {
      image: Frame30,
    },
    {
      image: Frame31,
    },
    {
      image: Frame32,
    },
    {
      image: Frame33,
    },
    {
      image: Frame34,
    },
    {
      image: Frame35,
    },
  ];

  const settings = {
    arrows: true, // Show arrows for navigation
    autoplay: true,
    infinite: true, // Infinite loop
    autoplaySpeed: 1500,
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 8, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024,   // Medium devices (tablets)
        settings: {
          slidesToShow: 6,
          autoplaySpeed: 2500,
        }
      },
      {
        breakpoint: 768,    // Small devices (landscape phones)
        settings: {
          slidesToShow: 4,
          autoplaySpeed: 2500,
          arrows:false,
        }
      },
      {
        breakpoint: 480,    // Extra small devices (portrait phones)
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 2500,
          arrows:false,
        }
      }
    ]
  };

  return (
    <div>
      <div className="text">
        <h1>Specialities</h1>
        <button className="butshow">show all</button>
      </div>
      <div className="sliddiv">
        <Slider {...settings}>
          {imageArray.map((item, index) => (
            <div key={index} className="image-slide">
              <img src={item.image} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="back">
        <img src={Background} alt="" />
      </div>
      <div className="padingdiv">
        <img src={Map} alt="" />
      </div>
    </div>
  );
};

export default Specialities;
