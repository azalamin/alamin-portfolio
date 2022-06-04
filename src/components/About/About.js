import React from 'react';
import { FaAward, FaUsers } from 'react-icons/fa';
import { VscFolderLibrary } from "react-icons/vsc";
import ME from '../../assets/alamin.png';
import './About.css';

const About = () => {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="About" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
              <article className="about_card">
                <FaUsers className="about_icon" />
                <h5>Clients</h5>
                <small>0 Worldwide</small>
              </article>
              <article className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              ducimus blanditiis corporis. Ad magnam aperiam fugit? Debitis,
              quas voluptatibus? Provident veritatis ipsam aliquid facilis
              possimus tempora neque aliquam qui quis?
            </p>
            <button className="btn btn-primary">Let't Talk</button>
          </div>
        </div>
      </section>
    );
};

export default About;