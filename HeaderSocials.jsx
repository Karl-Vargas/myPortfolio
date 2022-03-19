import React from "react";
// When importing react icon, to pay attention which initial. like Bs(as below), Ai, fa etc
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/karl-vargas/" target="_blank"> <BsLinkedin /></a>
      <a href="https://github.com/Karl-Vargas" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/karlvargas_/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
