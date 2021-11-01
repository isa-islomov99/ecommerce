import React, { useEffect } from "react";
import "./favorites.scss";
import { Row, Col } from "antd";
import { DeleteOutlined, HeartFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import { removeProductFromFavorites } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

const Favorites = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.products);

  // useEffect(() => {
  //   if (favorites.length > 0) {
  //     localStorage.setItem("favorite", JSON.stringify(favorites));
  //   }
  // }, []);

  // const favoriteDates = JSON.parse(localStorage.getItem("favorite"));

  return (
    <div className="favorites_products_card">
      <div className="container">
        <h1 className="favorites__title">{t("favorites_products")}</h1>
        {favorites.length > 0 ? (
          <Row gutter={14}>
            {favorites &&
              favorites.map((item, i) => (
                <Col
                  key={i}
                  className="favorites_products_card__card_column"
                  xs={24}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                >
                  <div className="favorites_products_card__product_card_heart">
                    <HeartFilled
                      style={{ fontSize: "21px", color: "#a5c926" }}
                    />
                  </div>
                  <NavLink to={`/product/view/${item.secondTitle}`}>
                    <div className="product_carousel_card_img">
                      <img
                        className="favorites_products_card__card_img"
                        src={item?.img}
                        alt="card-img"
                      />
                    </div>
                    <div className="product_carousel_card_info">
                      {item.price.discount && (
                        <span className="favorites_products_card__product_sale_text">
                          {t("sale_text")}
                        </span>
                      )}
                      <p className="favorites_products_card__product_category">
                        {item.category}
                      </p>
                      <div className="favorites_products_card__product_price">
                        <h5
                          className={
                            item.price.discount
                              ? "favorites_products_card__product_price_text"
                              : "favorites_products_card__product_sale_price_text"
                          }
                        >
                          {item.price.cost} {t("sum")}
                        </h5>
                        {item.price.discount && (
                          <span className="favorites_products_card__product_price_sale">
                            {item.price.discount_price} {t("sum")}
                          </span>
                        )}
                      </div>
                      <p className="favorites_products_card__product_title">
                        {item.title}
                      </p>
                    </div>
                  </NavLink>
                  <div className="favorites__buttons">
                    <NavLink to={`/product/view/${item.secondTitle}`}>
                      <button className="favorites_products_card__product_btn">
                        {t('buy')}
                      </button>
                    </NavLink>
                    <DeleteOutlined
                      className="favorite__delete_icon"
                      style={{ fontSize: "21px", color: "#a5c926" }}
                      onClick={() =>
                        dispatch(removeProductFromFavorites({ ...item }))
                      }
                    />
                  </div>
                </Col>
              ))}
          </Row>
        ) : (
          <h1 className="favorites_no_data_title">{t("favorites_no_data")}</h1>
        )}
      </div>
    </div>
  );
};

export default Favorites;
