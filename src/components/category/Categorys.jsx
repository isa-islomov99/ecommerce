import React from "react";
import {NavLink } from "react-router-dom";
import "./categorys.scss";
import { Row, Col } from "antd";

const Categorys = () => {
  return (
    <div className="categorys">
      <div className="container">
        <Row className="category__links">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="categorys__box">
            <NavLink to={`/category/Smartfonlar`} className="category__links_text">
              Smartfonlar
            </NavLink>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="categorys__box">
            <NavLink to={`/category/Noutbuklar`} className="category__links_text">
              Noutbuklar
            </NavLink>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="categorys__box">
            <NavLink to={`/category/Maishiy texnika`} className="category__links_text">
              Maishiy texnika
            </NavLink>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="categorys__box">
            <NavLink to={`/category/Televizorlar`} className="category__links_text">
              Televizorlar
            </NavLink>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Categorys;
