import React from "react";
import "./Footer.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Karl V
      </a>
      <ul className="premlinks">
        <li>
          <a href="#" >Home</a>
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
          <a href="#hobbies">Hobbies</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/karl-vargas/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Karl-Vargas" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/karlvargas_/" target="_blank">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Karl Vargas</small>
        </div>
    </footer>
  );
};

export default Footer;
