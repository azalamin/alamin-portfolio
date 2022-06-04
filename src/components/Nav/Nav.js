import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./Nav.css";

const Nav = () => {
  const [activeItem, setActiveItem] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveItem("#home")}
        className={activeItem === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActiveItem("#about")}
        className={activeItem === "#about" ? "active" : ""}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActiveItem("#experience")}
        className={activeItem === "#experience" ? "active" : ""}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveItem("#services")}
        className={activeItem === "#services" ? "active" : ""}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setActiveItem("#contact")}
        className={activeItem === "#contact" ? "active" : ""}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
