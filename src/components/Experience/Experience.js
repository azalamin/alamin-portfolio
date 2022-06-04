import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF Front End */}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Familiar</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Comfortable</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Comfortable</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Heroku</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Rest API</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Familiar</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience