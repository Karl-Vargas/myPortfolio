import React from "react";
import "./Experience.css";
import { BsCheck2Circle } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have </h5>
      <h2> My Stack</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          {/* Frontend SECTION */}
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>Material UI</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          {/* BACKEND SECTION */}
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>mySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className="experience__icon" />
              <div>
                <h4>PHP</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
