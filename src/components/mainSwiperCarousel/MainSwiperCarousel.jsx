import React from "react";
import "./mainSwiperCarousel.scss";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

const MainSwiperCarousel = ({ children }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <div className="main_swiper_carousel">
        <div className="arrow_circle_icons">
          <div ref={navigationNextRef} className="button_arrow">
            <RightOutlined style={{ fontSize: '15px', color: '#a5c926' }} />
          </div>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
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
          {children}
        </Swiper>
      </div>
    </>
  );
};

export default MainSwiperCarousel;
