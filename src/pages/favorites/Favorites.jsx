import React from "react";
import "./favorites.scss";
import { Row, Col } from "antd";
import { DeleteOutlined, HeartFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import { removeProductFromFavorites } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.products);

  return (
    <div className="favorites_products_card">
      <div className="container">
        <h1 className="favorites__title">Sevimli mahsulotlar</h1>
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
                          Chegirma:
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
                          {item.price.cost} so'm
                        </h5>
                        {item.price.discount && (
                          <span className="favorites_products_card__product_price_sale">
                            {item.price.discount_price} so'm
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
                        Xarid qilish
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
          <h1 className="favorites_no_data_title">
            Tanlangan mahsulotlar yo'q
          </h1>
        )}
      </div>
    </div>
  );
};

export default Favorites;
