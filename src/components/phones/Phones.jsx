import React from "react";
import "./phones.scss";
import Data from "../../service/api";
import MainCarouselCards from "../mainCarouselCards/MainCarouselCards";
import { RightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SwiperSlide } from "swiper/react";

const Phones = () => {
  const { t } = useTranslation();

  // Asosiy Api dan Barcha category si Smartfon bugan datalani olish uchun
  const filteredData = Data.filter((list) => list.category === "Smartfonlar");

  // HomePage dagi Smartfonlar ni carouselida barcha Smartfonlar emas faqat 8 tasi chiqishi uchun kesib olingan
  const arrayCut = filteredData.slice(18);

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
            <h1 className="phones__section_title_text">{t("smartfoni")}</h1>
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
              {t("see_all")}
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
                        {t("sale_text")}
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
                        {item.price.cost} {t("sum")}
                      </h5>
                      {item.price.discount && (
                        <span className="main_swiper_carousel__product_price_sale">
                          {item.price.discount_price} {t("sum")}
                        </span>
                      )}
                    </div>
                    <p className="main_swiper_carousel__product_title">
                      {item.title}
                    </p>
                    <button className="main_swiper_carousel__product_btn">
                      {t("buy")}
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
