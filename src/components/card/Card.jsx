import React, { useState } from "react";
import "./card.scss";
import { NavLink } from "react-router-dom";
import { Col } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { useDispatch } from "react-redux";
import {
  addProductToFavorites,
  removeProductFromFavorites,
} from "../../store/productSlice";

const Card = (props) => {
  const { title, secondTitle, img, category, price } = props;
  const items = { title, secondTitle, img, category, price };

  const dispatch = useDispatch();
  const [changeHeart, setChangeHeart] = useState(false);

  const addProduct = () => {
    dispatch(addProductToFavorites({ ...items }));
    setChangeHeart(true);
  };

  const removeProduct = () => {
    dispatch(removeProductFromFavorites({ ...items }));
    setChangeHeart(false);
  };

  return (
    <Col
      className="all_products_card__card_column"
      xs={24}
      sm={12}
      md={12}
      lg={6}
      xl={6}
    >
      <div className="all_products_card__product_card_heart">
        {changeHeart ? (
          <HeartFilled
            style={{ fontSize: "21px", color: "#a5c926" }}
            onClick={removeProduct}
          />
        ) : (
          <HeartOutlined
            style={{ fontSize: "21px", color: "#a5c926" }}
            onClick={addProduct}
          />
        )}
      </div>
      <NavLink to={`/product/view/${secondTitle}`}>
        <div className="product_carousel_card_img">
          <img
            className="all_products_card__card_img"
            src={img}
            alt="card-img"
          />
        </div>
        <div className="product_carousel_card_info">
          {price.discount && (
            <span className="all_products_card__product_sale_text">
              Chegirma:
            </span>
          )}
          <p className="all_products_card__product_category">{category}</p>
          <div className="all_products_card__product_price">
            <h5
              className={
                price.discount
                  ? "all_products_card__product_price_text"
                  : "all_products_card__product_sale_price_text"
              }
            >
              {price.cost} so'm
            </h5>
            {price.discount && (
              <span className="all_products_card__product_price_sale">
                {price.discount_price} so'm
              </span>
            )}
          </div>
          <p className="all_products_card__product_title">{title}</p>
        </div>
      </NavLink>
      <div className="all_products_card__button_box">
        <NavLink to={`/product/view/${secondTitle}`}>
          <button className="all_products_card__product_btn">
            Xarid qilish
          </button>
        </NavLink>
      </div>
    </Col>
  );
};

export default Card;
