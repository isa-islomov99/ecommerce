import React from "react";
import "./footer.scss";
import { Row, Col } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  AppleFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <Row>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">{t("footer_info_title")}</h3>
            <p className="footer__text">{t("footer_info_sub_title")}</p>
            <div className="footer__social_box">
              <FacebookFilled className="footer__socal_icon" />
              <InstagramOutlined className="footer__socal_icon" />
              <AppleFilled className="footer__socal_icon" />
            </div>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">{t("footer_sotuvchila_title")}</h3>
            <Link to="/" className="footer__link_text">
              {t("footer_sotuvchila_sub_title1")}
            </Link>
            <Link to="/" className="footer__link_text">
              {t("footer_sotuvchila_sub_title2")}
            </Link>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">{t("footer_about_title")}</h3>
            <Link to="/about" className="footer__link_text">
              {t("footer_about_sub_title1")}
            </Link>
            <Link to="/contact" className="footer__link_text">
              {t("footer_about_sub_title2")}
            </Link>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} className="footer__columns">
            <h3 className="footer__title">{t("footer_xaridorlar_title")}</h3>
            <Link to="/" className="footer__link_text">
              {t("footer_xaridorlar_sub_title1")}
            </Link>
            <Link to="/" className="footer__link_text">
              {t("footer_xaridorlar_sub_title2")}
            </Link>
            <Link to="/" className="footer__link_text">
              {t("footer_xaridorlar_sub_title3")}
            </Link>
            <Link to="/" className="footer__link_text">
              {t("footer_xaridorlar_sub_title4")}
            </Link>
            <Link to="/" className="footer__link_text">
              {t("footer_xaridorlar_sub_title5")}
            </Link>
          </Col>
        </Row>
      </div>
      <div className="footer_line"></div>
      <div className="container">
        <div className="footer__end">
          <p className="footer__end_text">{t("footer_end_title")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
