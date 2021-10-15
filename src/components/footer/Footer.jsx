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
              qiladi. 2017-2021 ©abad company. Barcha huquqlar himoyalangan.
            </p>
            <div className="footer__social_box">
              <FacebookFilled className="footer__socal_icon" />
              <InstagramOutlined className="footer__socal_icon" />
              <AppleFilled className="footer__socal_icon" />
            </div>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">Tadbirkorlar diqqatiga</h3>
            <p className="footer__text">Hamkor bo'lish</p>
            <p className="footer__text">Do'konlarga yordam</p>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">Malumot</h3>
            <p className="footer__text">Biz haqimizda</p>
            <p className="footer__text">Aloqa uchun</p>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">Xaridorlar diqqatiga</h3>
            <p className="footer__text">Buyurtma rasmiylashtirish</p>
            <p className="footer__text">To'lov</p>
            <p className="footer__text">Kredit</p>
            <p className="footer__text">Yetkazib berish</p>
            <p className="footer__text">Xavfsizlik</p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
