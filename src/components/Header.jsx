import React, { useState } from "react";
import "./header.css";
import Logo from "../img/Logo.png";
import Photo from "../img/Photo.png";
import Timmeat from "../img/time-eat.png";
import Deliver from "../img/delivery.png";
import Group from "../img/Group.png";
import Mard from "../img/person.png";
import Karzina from "../img/cart.png";
import Burger from "../img/Property 1=hamburger-initial.png";
import SimpleSlider from "./SimpleSlider";
import Slider from "../img/restaurant.png";
import Slider1 from "../img/restaurant (2).png";
import Slider2 from "../img/restaurant (3).png";
import Slider3 from "../img/restaurant (4).png";
import Sidebar from "./Sidebar";
import Closelog from "../img/Property 1=hamburger-close.png";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the state
  };

  const cards = [
    {
      image: `${Slider1}`,
    },
    {
      image: `${Slider}`,
    },
    {
      image: `${Slider2}`,
    },
    {
      image: `${Slider3}`,
    },
    {
      image: `${Slider1}`,
    },
    {
      image: `${Slider}`,
    },
    {
      image: `${Slider2}`,
    },
    {
      image: `${Slider3}`,
    },
    // Add more cards as needed
  ];
  return (
    <header>
      <nav className={isSidebarOpen ? "fixed-nav" : ""}>
        <img className="navlogo" src={Logo} alt={"k"} />
        <div className="right">
          <div className="headerlogo">
            <img src={Mard} alt="" />
            <p className="p0">Log in</p>
          </div>
          <div className="headerlogo">
            <img src={Karzina} alt="" />

            <p className="p0">0</p>
          </div>
          <div className="headerlogo burg" onClick={toggleSidebar}>
            <img src={isSidebarOpen ? Closelog : Burger} alt="" />
          </div>
        </div>
        {isSidebarOpen && <div className="overlay" />}
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </nav>

      <div className="main">
        <div>
          <h1>Your Food court at home</h1>
          <div className="kub">
            <div>
              <h3>Delivery</h3>
              <h5>Order in</h5>
            </div>
            <div>
              <h3>Takeout</h3>
              <h5>Grab and go</h5>
            </div>
          </div>
        </div>
        <div>
          <img className="imgfood" src={Photo} alt="afds" />
        </div>
      </div>
      <div className="three">
        <div>
          <div className="deliverlog">
            {" "}
            <img src={Timmeat} alt="" />{" "}
          </div>
          <p>delivery in all paris in less than 30 minutes</p>
        </div>
        <div>
          <div className="deliverlog">
            {" "}
            <img src={Deliver} alt="" />
          </div>
          <p>Free delivery from 29 euros</p>
        </div>
        <div>
          <div className="deliverlog">
            {" "}
            <img src={Group} alt="" />{" "}
          </div>
          <p>Only fresh and French products</p>
        </div>
      </div>
      <div className="slid">
        <div className="resturan">
          <h1>Restaurants</h1>
          <button className="butshow">show all</button>
        </div>

        <SimpleSlider cards={cards} />
      </div>
    </header>
  );
};

export default Header;
