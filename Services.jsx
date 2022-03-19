import React from 'react'
import './Services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* UX UI */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>

            </div>

            <ul className='service__list'>
              <li> <AiOutlineCheck className='service__icon' />
              <p>I value simple content, clean design patterns, and thoughtful interactions.</p>
              </li>
            </ul>
          </article>

          {/* Web Development */}
          <article className="service">
          <div className="service__head">
            <h3>Frontend & Web Development</h3>

            </div>

            <ul className='service__list'>
              <li> <AiOutlineCheck className='service__icon' />
              <p>I enjoy to code from scratch and see bringing ideas to life.</p>
              </li>
            </ul>
          </article>

          {/* Coffee */}
          <article className="service">
          <div className="service__head">
            <h3>Responsive Website Design</h3>

            </div>

            <ul className='service__list'>
              <li> <AiOutlineCheck className='service__icon' />
              <p>fluidly resizes for optimal viewing regardless of the screen size or device.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
  )
}

export default Services