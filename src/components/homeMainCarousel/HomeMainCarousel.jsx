import React from "react";
import "./homeMainCarousel.scss";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import slideImg1 from "../../assets/img/with-galaxy.jpeg";
import slideImg2 from "../../assets/img/honor-img.jpeg";
import slideImg3 from "../../assets/img/parfyum.jpeg";
import slideImg4 from "../../assets/img/muddatli-tulov.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const HomeMainCarousel = ({ slidesData, slidesCount = 1 }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const slides = [
    {
      carouselImg: slideImg1,
    },
    {
      carouselImg: slideImg2,
    },
    {
      carouselImg: slideImg3,
    },
    {
      carouselImg: slideImg4,
    },
  ];
  return (
    <>
      <div className="home_main_carousel">
        <div className="arrow_circle_icons">
          <div ref={navigationPrevRef} className="button_arrow">
            <LeftOutlined style={{ fontSize: "15px", color: "#a5c926" }} />
          </div>
          <div ref={navigationNextRef} className="button_arrow">
            <RightOutlined style={{ fontSize: "15px", color: "#a5c926" }} />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          className="mySwiper"
        >
          {slides &&
            slides.map((slides, i) => (
              <SwiperSlide key={i} className="home_main_carousel__swiper_card">
                <img
                  className="home_main_carousel__card_img"
                  src={slides.carouselImg}
                  alt="slide-img"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeMainCarousel;
