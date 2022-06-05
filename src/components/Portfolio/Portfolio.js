import React from "react";
import Img2 from "../../assets/digital.png";
import Img4 from "../../assets/doctors_portal.png";
import Img3 from "../../assets/get-me-healthy.png";
import Img1 from "../../assets/rinspeed.png";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Rinspeed Car Dashboard Management",
    github: "https://github.com/azalamin/Rinspeed-Car",
    demo: "https://rinspeed-car.web.app/",
  },
  {
    id: 2,
    image: Img2,
    title: "Digital Electronics (warehouse)",
    github: "https://github.com/azalamin/digital-electronics-client",
    demo: "https://digital-electronics-1f619.web.app/",
  },
  {
    id: 3,
    image: Img3,
    title: "Get Me Healthy (GYM Trainer)",
    github: "https://github.com/azalamin/get-me-healthy",
    demo: "https://get-me-healthy.web.app/",
  },
  {
    id: 4,
    image: Img4,
    title: "Doctors Portal (Booking Treatment)",
    github: "https://github.com/azalamin/doctors-portal-client",
    demo: "https://doctors-portal-a6cd1.web.app/",
  },
  {
    id: 5,
    image: Img1,
    title: "Rinspeed Car Dashboard Management",
    github: "https://github.com/azalamin/Rinspeed-Car",
    demo: "https://rinspeed-car.web.app/",
  },
  {
    id: 6,
    image: Img1,
    title: "Rinspeed Car Dashboard Management",
    github: "https://github.com/azalamin/Rinspeed-Car",
    demo: "https://rinspeed-car.web.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
