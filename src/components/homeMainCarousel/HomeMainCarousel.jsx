import React from "react";
import slideImg1 from "../../assets/img/honor-img.jpeg";
import slideImg2 from "../../assets/img/with-galaxy.jpeg";
import slideImg3 from "../../assets/img/parfyum.jpeg";
import slideImg4 from "../../assets/img/muddatli-tulov.jpeg";
import MainSwiperCarousel from "../mainSwiperCarousel/MainSwiperCarousel";

const HomeMainCarousel = () => {
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
    <div>
      <MainSwiperCarousel slidesData={slides} />
    </div>
  );
};

export default HomeMainCarousel;
