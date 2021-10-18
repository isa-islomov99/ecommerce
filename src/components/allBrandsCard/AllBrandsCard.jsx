import React, { useState } from "react";
import "./allBrandsCard.scss";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { filteredBrands } from "../../service/api";

const AllBrandsCard = (props) => {
  const { match, history } = props;

  const data = filteredBrands(match.params.id);

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
              {list.brand} Brendi mahsulotlari
            </h1>
          ))}

        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className="all_brands_card__sidebar_links"
          >
            {data.map((category, i) => (
              <NavLink
                key={i}
                to={`/brands/${category.brand}/${category.category}`}
                className="all_brands_card__brands_category_link"
              >
                {category.category}
              </NavLink>
            ))}
            {/* <NavLink
              to={`/brands/Samsung/Televizorlar`}
              className="all_brands_card__brands_category_link"
            >
              Televizorlar
            </NavLink>
            <NavLink
              to={`/brands/Samsung/Smartfonlar`}
              className="all_brands_card__brands_category_link"
            >
              Smartfonlar
            </NavLink>
            <NavLink
              to={`/brands/Samsung/Maishiy texnika`}
              className="all_brands_card__brands_category_link"
            >
              Maishiy texnika
            </NavLink> */}
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={18}>
            <div className="all_products_card__filter_box">
              <h2 className="all_products_card__filter_title">Saralash:</h2>
              <NavLink
                to={`/category/Smartfonlar/sort-by-price`}
                className="all_products_card__filter_links"
              >
                Avval arzonlari
              </NavLink>
              <NavLink
                to={`/category/Smartfonlar/sort-by-price`}
                className="all_products_card__filter_links"
              >
                Qimmatligi bo'yicha
              </NavLink>
              <NavLink
                to={`/category/Smartfonlar/sort-by-price`}
                className="all_products_card__filter_links"
              >
                Chegirmada
              </NavLink>
            </div>
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
                    xl={8}
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AllBrandsCard;
