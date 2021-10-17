import React, { useState } from "react";
import "./allProductsCard.scss";
import { NavLink } from "react-router-dom";
import { Row, Col, Card } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { filteredDate } from "../../service/api";

const { Meta } = Card;

const AllProductsCard = (props) => {
  const { match, history } = props;

  const data = filteredDate(match.params.id);

  const slicesData = data.slice(data.length - 1);

  const [toggleHeart, setToggleHeart] = useState(false);

  const handleHeart = () => {
    setToggleHeart(!toggleHeart);
  };

  return (
    <div className="all_products_card">
      <div className="container">
        {slicesData &&
          slicesData.map((list, i) => (
            <h1 className="all_products_card__category_title" key={i}>
              {list.category}
            </h1>
          ))}
        <Row className="all_products_card__card_row">
          {data &&
            data.map((item, i) => (
              <Col
                key={i}
                className="all_products_card__card_column"
                xs={24}
                sm={12}
                md={12}
                lg={6}
                xl={6}
              >
                <div
                  className="all_products_card__product_card_heart"
                  onClick={handleHeart}
                >
                  {toggleHeart ? (
                    <HeartFilled
                      style={{ fontSize: "21px", color: "#a5c926" }}
                    />
                  ) : (
                    <HeartOutlined
                      style={{ fontSize: "21px", color: "#a5c926" }}
                    />
                  )}
                </div>
                <div className="product_carousel_card_img">
                  <img
                    className="all_products_card__card_img"
                    src={item?.img}
                    alt="card-img"
                  />
                </div>
                <div className="product_carousel_card_info">
                  {item.price.discount && (
                    <span className="all_products_card__product_sale_text">
                      Chegirma:
                    </span>
                  )}
                  <p className="all_products_card__product_category">
                    {item.category}
                  </p>
                  <div className="all_products_card__product_price">
                    <h5
                      className={
                        item.price.discount
                          ? "all_products_card__product_price_text"
                          : "all_products_card__product_sale_price_text"
                      }
                    >
                      {item.price.cost} so'm
                    </h5>
                    {item.price.discount && (
                      <span className="all_products_card__product_price_sale">
                        {item.price.discount_price} so'm
                      </span>
                    )}
                  </div>
                  <p className="all_products_card__product_title">
                    {item.title}
                  </p>
                  <button className="all_products_card__product_btn">
                    Xarid qilish
                  </button>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default AllProductsCard;
