import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/profileMe1.jpeg";
import HeaderSocials from "./HeaderSocials";
import {FiChevronsRight} from 'react-icons/fi'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi! I'm</h5>
        <h1>Karl Vargas</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
          <CTA />

        {/* Socials */}
        <HeaderSocials />

        {/* Picture of ME */}
        <div className="me">
          {/* <img src={ME} alt="Photo of Me" /> */}
        </div>

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll <FiChevronsRight />
        </a>
      </div>
    </header>
  );
};

export default Header;
