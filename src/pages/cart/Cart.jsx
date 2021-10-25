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

const Cart = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="cart">
      <div className="container">
        {products.length > 0 ? (
          <>
            <h1 className="cart_count_of_carts">
              Savatda {products.length} ta mahsulot
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
                            {item.price.cost} so'm
                          </h5>
                          {item.price.discount && (
                            <span className="cart__product_price_sale">
                              {item.price.discount_price} so'm
                            </span>
                          )}
                        </div>
                        <div className="cart__number_product_btn">
                          <MinusOutlined className="cart__count_icon" />
                          <span>{item.countNum}</span>
                          <PlusCircleOutlined className="cart__count_icon" />
                        </div>
                      </div>
                      <div className="cart__delete_box">
                        <DeleteOutlined className="cart__delete_icon" />
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
                  <h4 className="cart__product_sales_tile">Narxi:</h4>
                  <h4 className="cart__product_sales_tile"> so'm</h4>
                </div>
                <div className="cart__product_sales_box">
                  <h4 className="cart__product_sales_tile">Chegirma:</h4>
                  <h4 className="cart__product_sales_tile">0 so'm</h4>
                </div>
                <div className="cart__product_sales_box">
                  <h4 className="cart__product_sales_tile">
                    Yetkazib berish narxi:
                  </h4>
                  <h4 className="cart__product_sales_tile">0 so'm</h4>
                </div>
                <div className="cart__product_sales_box">
                  <h3 className="cart__product_common_pay_title">Jami:</h3>
                  <h3 className="cart__product_common_pay_title">so'm</h3>
                </div>
                <div className="cart__order_button">
                  <button className="cart__product_buy_btn">
                    Buyurtmani Rasmiylashtirish
                  </button>
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
            <h1 className="cart__empty_cart_title">
              Savatchangiz bo'shmi? Muammo yo'q!
            </h1>
            <h3 className="cart__empty_cart_subtitle">
              Bizning katalogimizdan keng assortimentidan mahsulot tanlashni
              boshlang.
            </h3>
            <Link to="/">
              <button className="cart__redirect_main_page_btn">
                Asosiy saxifaga
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
