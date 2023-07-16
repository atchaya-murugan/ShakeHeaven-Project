import React from "react";
import logo from "../assets/shake logo.png";
import { FaSearch } from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai"
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img src={logo} alt="logo_img" />
        </a>
      </div>
      <div className="navbar-links">
        <nav>
          <ul className="main_nav">
            <li className="lin">
              <a href="Home"> Home </a>
            </li>
            <li className="lin">
              <a href="About"> About </a>
            </li>
            <li className="lin">
              <a href="#"> Gallery </a>
            </li>
            <li className="lin">
              <a href="#"> Menu </a>
            </li>
            <li className="lin">
              <a href="#"> Store Locations </a>
            </li>
            <li className="lin">
              <a href="#"> Contact </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="search">
      <a href="#" className="search">
                <FaSearch />
              </a>
      </div>
      <div className="menu"><AiOutlineMenu /></div>
    </div>
  );
};

export default Navbar;
