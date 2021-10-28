import React from "react";
import "./phones.scss";
import Data from "../../service/api";
import MainCarouselCards from "../mainCarouselCards/MainCarouselCards";
import { RightOutlined} from "@ant-design/icons";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { SwiperSlide } from "swiper/react";

const Phones = () => {
  // Asosiy Api dan Barcha category si Smartfon bugan datalani olish uchun
  const filteredData = Data.filter((list) => list.category === "Smartfonlar");

  // HomePage dagi Smartfonlar ni carouselida barcha Smartfonlar emas faqat 8 tasi chiqishi uchun kesib olingan
  const arrayCut = filteredData.slice(18);

  const dispatch = useDispatch();

  return (
    <div className="phones">
      <div className="container">
        <Row className="phones__title_see_all">
          <Col
            xs={24}
            sm={12}
            md={18}
            lg={18}
            xl={18}
            className="phones__section_title"
          >
            <h1 className="phones__section_title_text">Smartfonlar</h1>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="phones__see_all_box"
          >
            <Link to={`/category/Smartfonlar`} className="phones__see_all_text">
              Hammasini ko'rish
              <RightOutlined
                style={{
                  fontSize: "14px",
                  color: "#a5c926",
                  padding: "9px 0 0 6px",
                }}
              />
            </Link>
          </Col>
        </Row>
        <MainCarouselCards>
          {arrayCut &&
            arrayCut.map((item, i) => (
              <SwiperSlide key={i} className="swiper_slide_card">
                <Link to={`/product/view/${item.secondTitle}`}>
                  <div className="product_carousel_card_img">
                    <img
                      className="swiper_slide_card_img"
                      src={item?.img}
                      alt="card-img"
                    />
                  </div>
                  <div className="product_carousel_card_info">
                    {item.price.discount && (
                      <span className="main_swiper_carousel__product_sale_text">
                        Chegirma:
                      </span>
                    )}
                    <p className="main_swiper_carousel__product_category">
                      {item.category}
                    </p>
                    <div className="main_swiper_carousel__product_price">
                      <h5
                        className={
                          item.price.discount
                            ? "main_swiper_carousel__product_price_text"
                            : "main_swiper_carousel__product_sale_price_text"
                        }
                      >
                        {item.price.cost} so'm
                      </h5>
                      {item.price.discount && (
                        <span className="main_swiper_carousel__product_price_sale">
                          {item.price.discount_price} so'm
                        </span>
                      )}
                    </div>
                    <p className="main_swiper_carousel__product_title">
                      {item.title}
                    </p>
                    <button className="main_swiper_carousel__product_btn">
                      Xarid qilish
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </MainCarouselCards>
      </div>
    </div>
  );
};

export default Phones;
