import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ onAboutClick, onContactClick }) => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="left-nav">
          <Link to={'/'}>
            <img
              src="https://t3.ftcdn.net/jpg/03/67/46/08/360_F_367460829_XdMVU2j0w9fqEwzVwbJp0OdllXIszeXN.jpg"
              alt=""
              className="left-nav-img"
            />
          </Link>
        </div>
        <div className="right-nav">
          <h1 onClick={onAboutClick}>About Us</h1>
          <h1 onClick={onContactClick}>Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
