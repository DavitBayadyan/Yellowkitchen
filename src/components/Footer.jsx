import React from "react";
import "./Footer.css";
import Logo from "../img/Logo2.png";
import App from "../img/app-img1-1.png";
import App2 from "../img/app-img2-1.png";
import Twiter from '../img/twitter.png';
import Vector from '../img/Vector.png'
const Footer = () => {
  return (
    <footer>
      <div className="footall">
        <div className="gic">
          <div className="logoo">
            <img src={Logo} alt="" />
          </div>
          <div className="apps">
            <img className="app1" src={App} alt="" />
            <img src={App2} alt="" />
          </div>
        </div>
        <div className="uls">
          <div>
            <ul>
              <li className="dark">About us</li>
              <li>Concept</li>
              <li>Franchise</li>
              <li>Business</li>
              <li>Restaurant signup</li>
              <li>For Investors</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="dark">Get help</li>
              <li>Read FAQs</li>
              <li>Restaurants</li>
              <li>Specialities</li>
              <li>Sign up to deliver</li>
              <li>English</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="dark">Contact us</li>
              <li>Yellow kitchen Paris 11</li>
              <li>69 avenue de la Republique 75011 Paris</li>
              <li>0800 111 126</li>
              <li>contact@yellowkitchens.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footend">
        <div className="log">
            <img className="twiter" src={Twiter} alt="" />
            <img src={Vector} alt="" />
        </div>
        <div className="end">
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>© 2020 Yellow kitchen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
