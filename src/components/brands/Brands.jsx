import React from "react";
import "./brands.scss";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import appleLogo from "../../assets/img/apple.jpg";
import samsungLogo from "../../assets/img/Samsung.png";
import xiaomiLogo from "../../assets/img/xiaomi.png";
import acerLogo from "../../assets/img/acer.png";
import asusLogo from "../../assets/img/asus-logo.jpg";
import hpLogo from "../../assets/img/HP-logo.png";
import lenovoLogo from "../../assets/img/lenovo.jpg";
import artelLogo from "../../assets/img/Artel.png";

const Brands = () => {
  const BrandsData = [
    {
      brandLogo: appleLogo,
      brandName: "Apple",
    },
    {
      brandLogo: samsungLogo,
      brandName: "Samsung",
    },
    {
      brandLogo: xiaomiLogo,
      brandName: "Xiaomi",
    },
    {
      brandLogo: acerLogo,
      brandName: "Acer",
    },
    {
      brandLogo: asusLogo,
      brandName: "Asus",
    },
    {
      brandLogo: hpLogo,
      brandName: "HP",
    },
    {
      brandLogo: lenovoLogo,
      brandName: "Lenovo",
    },
    {
      brandLogo: artelLogo,
      brandName: "Artel",
    },
  ];
  return (
    <div className="phones">
      <div className="container">
        <Row className="phones__title_see_all">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            className="phones__section_title"
          >
            <h1 className="phones__section_title_text">Brendlar</h1>
          </Col>
        </Row>

        <div className="brands_box">
          <Row>
            {BrandsData &&
              BrandsData.map((item, i) => (
                <Col
                  key={i}
                  xs={12}
                  sm={8}
                  md={6}
                  lg={6}
                  xl={6}
                  className="brands__container"
                >
                  <Link to="/brands/apple">
                    <img
                      className="brands__logo"
                      src={item.brandLogo}
                      alt="brand-logo"
                    />
                    <p className="brands__name_title">{item.brandName}</p>
                  </Link>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Brands;
