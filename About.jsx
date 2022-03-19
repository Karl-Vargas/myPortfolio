import React from "react";
import "./About.css";
import ME from "../../assets/profileMe1.jpeg";
import { FaAward, FaStackOverflow } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";

const About = () => {
  return (
    // Title ABOUT ME
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      {/* ABOUT PROFILE */}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My profile" />
          </div>
        </div>

        {/* CARDS */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years of Coding</small>
            </article>

            <article className="about__card">
              <FaStackOverflow className="about__icon" />
              <h5>My go-to coffee drinks</h5>
              <small>Espresso, Iced espresso and drip</small>
            </article>
            <article className="about__card">
              <GiCoffeeBeans className="about__icon" />
              <h5>In my free time</h5>
              <small>Watching videos of coffee and tech world, MCU and playing video games</small>
            </article>
          </div>
          <p>
          My name is Karl Vargas and I'm a Full-Stack developer. a HackerU Full-Stack Development certified. Passionate of creating end-to-end and designing websites and web applications. Coffee geek, enjoying making coffee and LOVE dogs.
          </p>
          <a href="#contact" className="btn btn primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
