import React from "react";
import "./phones.scss";
import Data from "../../service/api";
import MainSwiperCarousel from "../mainSwiperCarousel/MainSwiperCarousel";
import { RightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

// import { SwiperSlide } from "swiper/react";

const Phones = () => {
  console.log(Data);
  const filteredData = Data.filter((list) => list.catigory === "Smartfonlar");
  const arrayCut = filteredData.slice(16);
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
            <p className="phones__see_all_text">Hammasini ko'rish</p>
            <RightOutlined
              style={{
                fontSize: "14px",
                color: "#a5c926",
                padding: "9px 0 0 6px",
              }}
            />
          </Col>
        </Row>
        <MainSwiperCarousel arrayCut={arrayCut} />
        {/* <MainSwiperCarousel>
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
        </MainSwiperCarousel> */}
      </div>
    </div>
  );
};

export default Phones;
