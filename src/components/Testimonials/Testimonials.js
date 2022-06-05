import React from "react";
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar1 from "../../assets/alamin.png";
import "./Testimonials.css";

const Testimonials = () => {
  const data = [
    {
      avatar: Avatar1,
      id: 1,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam maxime ullam quia optio vero tempore consectetur exercitationem temporibus iusto voluptatibus ratione saepe laborum reprehenderit,eveniet in totam autem quod odio?",
    },
    {
      avatar: Avatar1,
      id: 2,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam maxime ullam quia optio vero tempore consectetur exercitationem temporibus iusto voluptatibus ratione saepe laborum reprehenderit,eveniet in totam autem quod odio?",
    },
    {
      avatar: Avatar1,
      id: 3,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam maxime ullam quia optio vero tempore consectetur exercitationem temporibus iusto voluptatibus ratione saepe laborum reprehenderit,eveniet in totam autem quod odio?",
    },
    {
      avatar: Avatar1,
      id: 4,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam maxime ullam quia optio vero tempore consectetur exercitationem temporibus iusto voluptatibus ratione saepe laborum reprehenderit,eveniet in totam autem quod odio?",
    },
    {
      avatar: Avatar1,
      id: 5,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam maxime ullam quia optio vero tempore consectetur exercitationem temporibus iusto voluptatibus ratione saepe laborum reprehenderit,eveniet in totam autem quod odio?",
    },
    {
      avatar: Avatar1,
      id: 6,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam maxime ullam quia optio vero tempore consectetur exercitationem temporibus iusto voluptatibus ratione saepe laborum reprehenderit,eveniet in totam autem quod odio?",
    },
  ];
  return (
    <section id="testimonials ">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="container testimonials_container"
      >
        {data.map(({ avatar, id, name, review }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt="Alamin" />
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
