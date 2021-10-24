import React from "react";
import "./cart.scss";
import { Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="cart">
      <div className="container">
        <h1 className="cart_count_of_carts">
          Savatda {products.length} tovarlar
        </h1>
        <Row>
          <Col xs={24} sm={12} md={12} lg={16} xl={16} className="cart__item">
              {products && products.map((item) => (
                  <div key={item.id} className="cart__product_info">
                      <div className="cart__product_img">
                          <img src={item?.img} alt="product-img" />
                      </div>
                      <h5 className="cart__product_label">{item.title}</h5>
                  </div>
              ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cart;
