import React, { useState } from "react";
import "../../Sass/Layout/_global_rules.scss";
import "./Navbar.css";
import img from "../../assets/logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";
import { MdEventNote } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={menu ? "allNavBar" : " allNavBar activeAllNavBar"}>
      <div className="navbar">
        <div className="logo">
          <img src={img} alt="" />
        </div>
        <ul className="navList">
          <li className="navItem">
            <a href="#Hero" className="navLink">
              <IoHomeOutline />
            </a>
          </li>
          <li className="navItem">
            <a href="#About" className="navLink">
              <FaRegUser />
            </a>
          </li>
          <li className="navItem">
            <a href="#Service" className="navLink">
              <IoBriefcaseOutline />
            </a>
          </li>
          <li className="navItem">
            <a href="#Experience" className="navLink">
              <RiGraduationCapLine />
            </a>
          </li>
          <li className="navItem">
            <a href="#Work" className="navLink">
              <FiLayers />
            </a>
          </li>
          <li className="navItem">
            <a href="#Pricing" className="navLink">
              <MdEventNote />
            </a>
          </li>
          <li className="navItem">
            <a href="#Contact" className="navLink">
              <LuMessagesSquare />
            </a>
          </li>
        </ul>
        <div className="history">
          <span>2023-2024</span>
        </div>
      </div>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
