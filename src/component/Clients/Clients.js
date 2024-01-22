import React from "react";
import "./Clients.css";
import { clients } from "../../data/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Clients = () => {
  return (
    <div className="container clients_container">
      <div className="heading">
        <h2>Clients & Reviews</h2>
      </div>
      <Swiper
        className="allClients"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {clients.map(ele => {
          return (
            <SwiperSlide key={ele.id} className="client">
              <div className="img">
                <img src={ele.image} alt="" />
              </div>
              <h2>{ele.title}</h2>
              <h3>{ele.subtitle}</h3>
              <div className="clientBox">{ele.comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Clients;
