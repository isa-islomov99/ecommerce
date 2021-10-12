import React from "react";
import "./header.scss";
import logo from "../../assets/img/logo.svg";
import { Input, Select, Row, Col } from "antd";

const { Option } = Select;

const Header = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <header className="header">
      <div className="container">
        <Row className="header__container">
          <Col xs={0} sm={10} md={8} lg={8} xl={6} className="header__logo_box">
            <img className="header__logo_img" src={logo} alt="logo" />
            <h2 className="header__logo_title">shop.uz</h2>
          </Col>
          <Col
            xs={18}
            sm={10}
            md={10}
            lg={10}
            xl={12}
            className="header__serach_bar"
          >
            <Input
              className="header__input"
              placeholder="Mahsulotlarni qidirish..."
            />
          </Col>
          <Col
            xs={6}
            sm={4}
            md={6}
            lg={6}
            xl={6}
            className="header__language_bar"
          >
            <Select
              defaultValue="O'zb"
              style={{ width: 70 }}
              onChange={handleChange}
            >
              <Option value="O'zb">O'zb</Option>
              <Option value="Рус">Рус</Option>
            </Select>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
