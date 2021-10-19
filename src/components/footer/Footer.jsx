import React from "react";
import "./footer.scss";
import { Row, Col } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  AppleFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">Info</h3>
            <p className="footer__text">
              Ko'rsatilgan narxlar va xarid qilish shartlari joriy sanaga amal
              qiladi. 2017-2021 ©shop.uz company. Barcha huquqlar himoyalangan.
            </p>
            <div className="footer__social_box">
              <FacebookFilled className="footer__socal_icon" />
              <InstagramOutlined className="footer__socal_icon" />
              <AppleFilled className="footer__socal_icon" />
            </div>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">Tadbirkorlar diqqatiga</h3>
            <Link to="/" className="footer__link_text">
              Hamkor bo'lish
            </Link>
            <Link to="/" className="footer__link_text">
              Do'konlarga yordam
            </Link>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">Malumot</h3>
            <Link to="/about" className="footer__link_text">
              Biz haqimizda
            </Link>
            <Link to="/contact" className="footer__link_text">
              Aloqa uchun
            </Link>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">Xaridorlar diqqatiga</h3>
            <Link to="/" className="footer__link_text">
              Buyurtma rasmiylashtirish
            </Link>
            <Link to="/" className="footer__link_text">
              To'lov
            </Link>
            <Link to="/" className="footer__link_text">
              Kredit
            </Link>
            <Link to="/" className="footer__link_text">
              Yetkazib berish
            </Link>
            <Link to="/" className="footer__link_text">
              Xavfsizlik
            </Link>
          </Col>
        </Row>
      </div>
      <div className="footer_line"></div>
      <div className="footer__end">
        {/* <p className="footer__end_text">2021 Shop.uz © - Все права защищены.</p> */}
        <p className="footer__end_text">2021 Shop.uz © - Barcha xuquqlar himoyalangan.</p>
      </div>
    </footer>
  );
};

export default Footer;
