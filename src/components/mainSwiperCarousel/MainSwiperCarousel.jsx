import React from "react";
import "./mainSwiperCarousel.scss";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const MainSwiperCarousel = ({ slidesData, slidesCount = 1 }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <div className="main_swiper_carousel">
        <div className="arrow_circle_icons">
          <div ref={navigationPrevRef} className="button_arrow">
            <LeftOutlined style={{ fontSize: '15px', color: '#a5c926' }} />
          </div>
          <div ref={navigationNextRef} className="button_arrow">
            <RightOutlined style={{ fontSize: '15px', color: '#a5c926' }} />
          </div>
        </div>
        <Swiper
          slidesPerView={slidesCount}
        //   spaceBetween={35}
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
          // breakpoints={{
          //   310: {
          //     slidesPerView: 1,
          //     slidesPerGroup: 1,
          //   },
          //   600: {
          //     slidesPerView: 2,
          //     slidesPerGroup: 2,
          //   },
          //   960: {
          //     slidesPerView: 3,
          //     slidesPerGroup: 3,
          //   },
          // }}
        >
          {slidesData &&
            slidesData.map((slides, i) => (
              <SwiperSlide key={i} className="swiper_slide_card">
                <img
                  className="swiper_slide_img"
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

export default MainSwiperCarousel;
