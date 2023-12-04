import React from "react";
import "./Adrees.css";
import Lokation from "../img/location.png";
const Adrees = () => {
  return (
    <div className="adres">
      <div>
        <h1>Your nearest restaurants</h1>
        <p>
          Each kitchen works with its own delivery area <br /> to deliver food
          to you as soon as possible
        </p>
      </div>
      <div className="obshi">
        <div className="inputtdiv">
          <img src={Lokation} alt="" />
          <input type="text" placeholder="Enter delivery address" required />
        </div>
        <button className="butt">send</button>
      </div>
    </div>
  );
};

export default Adrees;
