import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a className="footer_logo" href="#home">
        ALAMIN
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://facebook.com">
          <FaInstagram />
        </a>
        <a href="https://facebook.com">
          <FaTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Al Amin Sheikh, All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
