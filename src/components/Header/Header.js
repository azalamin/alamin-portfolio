import React from "react";
import TypeAnimation from "react-type-animation";
import ME from "../../assets/Me.png";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h4 className="header-title">HELLO I'M</h4>
        <h1>AL AMIN SHEIKH</h1>
        <TypeAnimation
          cursor={true}
          sequence={[
            "A Professional Front-End Developer",
            5000,
            "MERN Stack Developer",
            5000,
            "React JS Developer",
            5000,
            "Content Creator",
            5000,
          ]}
          wrapper="h5"
          repeat={Infinity}
        />
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="Me" />
        </div>
        <div className="scroll">
          <a href="#about" className="scroll-down">
            Scroll Down{" "}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
