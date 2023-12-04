import React from "react";
import "./Sidebar.css"; // Create a separate CSS file for your sidebar styles.
import Call from "../img/call.png"
const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="paddiv">
      <div className="call">
        <img src={Call} alt="" />
        <div>
          <div>
        <h3 className="h3">0800 111 126</h3>
        <p>8:00 - 22:00</p>
        </div>
        </div>
      </div>


      <h3 className="border">Delivery info</h3>
      <h3>About us</h3>
      <h3>Restaurants</h3>
      <h3>Specialities</h3>
      <p className="pp">English ⮟</p>
      </div>
    </div>
  );
};

export default Sidebar;