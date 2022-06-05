import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Optimizing the user experience.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Managing software workflow.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Fixing bugs and testing for usability.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Following SEO best practices.</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONT-END DEVELOPMENT */}

        <article className="service">
          <div className="service_head">
            <h3>Responsive Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Reflowing content simply refers to content.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Relative sizing simply means adjusting size of element.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Breakpoints, also known as media queries.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Flexibility is main component of responsive website.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Any conscientious Web developer should place a high priority.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p> Compatibility.</p>
            </li>
          </ul>
        </article>
        {/* END RESPONSIVE WEBSITE */}

        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p></p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p> Podcast</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Product Upload</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
