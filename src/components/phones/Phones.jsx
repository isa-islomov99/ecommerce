import React from "react";
import "./phones.scss";
import Data from "../../service/api";
import MainSwiperCarousel from "../mainSwiperCarousel/MainSwiperCarousel";

import { SwiperSlide } from "swiper/react";

const Phones = () => {
  console.log(Data);
  const arrayCut = Data.slice(3);
  return (
    <div className="phones">
      {/* <MainSwiperCarousel arrayCut={arrayCut} /> */}
      <div className="container">
        <MainSwiperCarousel>
          {arrayCut &&
            arrayCut.map((item, i) => (
              <SwiperSlide key={i} className="swiper_slide_card">
                <div className="product_carousel_card_img">
                  <img
                    className="swiper_slide_card_img"
                    src={item?.img}
                    alt="card-img"
                  />
                </div>
                <div className="product_carousel_card_info">
                  <p>{item.catigory}</p>
                  <h5>{item.price.cost}$</h5>
                  <p>{item.title}</p>
                  <button>Xarid qilish</button>
                </div>
              </SwiperSlide>
            ))}
        </MainSwiperCarousel>
      </div>
    </div>
  );
};

export default Phones;
