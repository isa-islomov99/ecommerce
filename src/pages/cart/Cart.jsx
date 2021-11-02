import React from "react";
import "./cart.scss";
import { Row, Col } from "antd";
import {
  MinusOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  decreaseProduct,
  removeProduct,
} from "../../store/productSlice";

import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation();

  const { products } = useSelector((state) => state.products);

  const orderCost = products.map((item) => {
    return item.costPrice;
  });

  const toOrder = orderCost.reduce((a, b) => a + b, 0);

  console.log(toOrder);

  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="container">
        {products.length > 0 ? (
          <>
            <h1 className="cart_count_of_carts">
              {t("cart_title")} {products.length} {t("cart_product_title")}
            </h1>
            <Row>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={14}
                xl={14}
                className="cart__item"
              >
                {products &&
                  products.map((item) => (
                    <div key={item.id} className="cart__product_info">
                      <div className="cart__product_img">
                        <Link to={`/product/view/${item.secondTitle}`}>
                          <img
                            className="cart__product_img"
                            src={item?.img}
                            alt="product-img"
                          />
                        </Link>
                      </div>
                      <div className="cart__product_common_info">
                        <Link
                          to={`/product/view/${item.secondTitle}`}
                          className="cart__product_label"
                        >
                          {item.title}
                        </Link>
                        <div className="cart__product_price">
                          <h5
                            className={
                              item.price.discount
                                ? "cart__product_price_text"
                                : "cart__product_sale_price_text"
                            }
                          >
                            {item.price.cost} {t("sum")}
                          </h5>
                          {item.price.discount && (
                            <span className="cart__product_price_sale">
                              {item.price.discount_price} {t("sum")}
                            </span>
                          )}
                        </div>
                        <div className="cart__number_product_btn">
                          <MinusOutlined
                            className="cart__count_icon"
                            onClick={() =>
                              dispatch(decreaseProduct({ ...item }))
                            }
                          />
                          <span>{item.countNum}</span>
                          <PlusCircleOutlined
                            className="cart__count_icon"
                            onClick={() => dispatch(addProduct({ ...item }))}
                          />
                        </div>
                      </div>
                      <div className="cart__delete_box">
                        <DeleteOutlined
                          className="cart__delete_icon"
                          onClick={() => dispatch(removeProduct({ ...item }))}
                        />
                      </div>
                    </div>
                  ))}
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={8}
                xl={8}
                className="cart__cart_prices_info_box"
              >
                <div className="cart__product_sales_box">
                  <h4 className="cart__product_sales_tile">
                    {t("cart_product__price_title")}
                  </h4>
                  <h4 className="cart__product_sales_tile">
                    {new Intl.NumberFormat("en-US", {
                      style: "decimal",
                    }).format(toOrder.toFixed(2))}{" "}
                    {t("sum")}
                  </h4>
                </div>
                <div className="cart__product_sales_box">
                  <h4 className="cart__product_sales_tile">{t("sale_text")}</h4>
                  <h4 className="cart__product_sales_tile">0 {t("sum")}</h4>
                </div>
                <div className="cart__product_sales_box">
                  <h4 className="cart__product_sales_tile">
                    {t("cart_product__delivery_price")}
                  </h4>
                  <h4 className="cart__product_sales_tile">0 {t("sum")}</h4>
                </div>
                <div className="cart__product_sales_box">
                  <h3 className="cart__product_common_pay_title">
                    {t("cart_product__end_price")}
                  </h3>
                  <h3 className="cart__product_common_pay_title">
                    {new Intl.NumberFormat("en-US", {
                      style: "decimal",
                    }).format(toOrder.toFixed(2))}{" "}
                    {t("sum")}
                  </h3>
                </div>
                <div className="cart__order_button">
                  <Link to="/checkout">
                    <button className="cart__product_buy_btn">
                      {t("cart_product__buy_title")}
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <div className="cart__empty_cart_box">
            <img
              className="cart__empty_cart_img"
              src="https://olcha.uz/_nuxt/img/shoppingCart.9c0394b.png"
              alt="no-data"
            />
            <h1 className="cart__empty_cart_title">{t("cart_empty_text")}</h1>
            <h3 className="cart__empty_cart_subtitle">
              {t("cart_empty_text2")}
            </h3>
            <Link to="/">
              <button className="cart__redirect_main_page_btn">
                {t("cart_to_main_page_btn")}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
