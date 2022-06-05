import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zqks41j",
        "template_tsgwkyb",
        form.current,
        "q1dqDruYlFwNbF9iY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact-option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5 className="email">alaminsheikh.dev@gmail.com</h5>
            <a href="mailto:alaminsheikh.dev@gmail.com">Send a message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>me.azalamins</h5>
            <a
              href="https://www.m.me/me.azalamin"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <h5>+88016288-90779</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone+8801628890779"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
