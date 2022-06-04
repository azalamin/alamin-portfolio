import React from "react";
import ME from "../../assets/Me.png";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Al Amin Sheikh</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="Me" />
        </div>
        <a href="#contact" className="scroll-down">Scroll Down </a>
      </div>
    </header>
  );
};

export default Header;
