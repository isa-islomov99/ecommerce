import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/img/logo.svg";
import { Input, Select, Row, Col } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const { Option } = Select;

const Header = () => {
  const { t } = useTranslation();

  const [getInput, setGetInput] = useState("");

  const handleChange = (value) => {
    i18next.changeLanguage(value);
  };

  const handleFilter = (event) => {
    setGetInput(event.target.value);
  };

  return (
    <header className="header">
      <div className="container">
        <Row className="header__container">
          <Col xs={0} sm={10} md={8} lg={8} xl={6}>
            <Link to="/" className="header__logo_link">
              <img className="header__logo_img" src={logo} alt="logo" />
              <h2 className="header__logo_title">shop.uz</h2>
            </Link>
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
              // placeholder="Mahsulotlarni qidirish..."
              placeholder={t("placeholder_input")}
              value={getInput}
              onChange={handleFilter}
            />
            {getInput.length === 0 ? (
              <SearchOutlined className="header__search_icon" />
            ) : (
              <CloseOutlined
                className="header__close_icon"
                onClick={() => setGetInput("")}
              />
            )}
            <SearchBar getInput={getInput} setGetInput={setGetInput} />
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
              name="language"
              style={{ width: 70 }}
              onChange={handleChange}
            >
              <Option value="uz">O'zb</Option>
              <Option value="ru">Рус</Option>
            </Select>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;