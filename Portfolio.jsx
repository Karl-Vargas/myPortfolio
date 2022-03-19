import React from "react";
import "./Portfolio.css";
import portfolioImg1 from "../../assets/portfolioImg1.png";
import portfolioImg2 from "../../assets/portfolioImg2.png";
import portfolioImg3 from "../../assets/portfolioImg3.png";
import portfolioImg4 from "../../assets/portfolioImg4.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolioImg1} alt="" />
          </div>
          <h3>Landing Page for Specialty Coffee and Roastery</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Karl-Vargas/Kaffe-Landing-Page"
              target="_blank"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://kaffewebsite-2a26a.firebaseapp.com/"
              target="_blank"
              className="btn text-light"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolioImg2} alt="" />
          </div>
          <h3>Giphy Search Engine</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Karl-Vargas/Giphy-React"
              target="_blank"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://giphy-a9575.web.app/"
              target="_blank"
              className="btn text-light"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolioImg3} alt="" />
          </div>
          <h3>Pokedex</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Karl-Vargas/Pokedex"
              target="_blank"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://pokedex-4bf57.firebaseapp.com/"
              target="_blank"
              className="btn text-light"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolioImg4} alt="" />
          </div>
          <h3>Expense Tracker</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Karl-Vargas/Expense-Tracker-React"
              target="_blank"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://expense-tracker-a1e26.web.app/"
              target="_blank"
              className="btn text-light"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

// Diffrrent way to map the data:
// 1)create a jsx of:
// id, image, title, github and demo 
// for each img
// 2) use map method to loop, example:
// data.map(({id, image, title, github, demo}) {
//   return (
//     <article key{id} className='portfolio__item'>
//     <div className="portfolio__item-image">
//     <img src={image} alt="" />
//     </div>
//     <h3>{title}</h3>
//     <div className="portfolio_item-cta">
//     <a href={github} className='btn'>Github</a>
//     <a href={demo} className='btn'>Demo</a>

//     </div>
//     </article>
//   )
// })
