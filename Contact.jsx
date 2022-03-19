import React from "react";
import { useRef } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ryxwgef', 'template_ij4w8i1', form.current, 'HmG3PlO0Bi0tx-oaQ')

    // Resets after submit
    e.target.reset()
  };
  

  return (
    <section id="contact">
      <h5>Stay in Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact__container">
        {/* Contacs Options - Email and Linkedin */}
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>Karlallenvargas@gmail.com</h5>
            <a href="mailto:karlallenvargas@gmail.com">Send a E-mail</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__icon" />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/karl-vargas/" target="_blank">
              Let's connect
            </a>
          </article>
        </div>

        {/* Contact message form */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="fullName" placeholder="Full name" required />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Type a message"
            required
          ></textarea>
          <button type="submit" className="btn btn primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
