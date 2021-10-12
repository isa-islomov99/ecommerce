import React from "react";
// import { Link } from "react-router-dom";
import "./categorys.scss";
import { Row, Col } from "antd";

const Categorys = () => {
  return (
    <div className="categorys">
      <div className="container">
        <Row className="category__links">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="categorys__box">
            {/* <Link> */}
            <a href="#" className="category__links_text">Smartfonlar</a>
            {/* </Link> */}
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="categorys__box">
            {/* <Link> */}
            <a href="#" className="category__links_text">Noutbuklar</a>
            {/* </Link> */}
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="categorys__box">
            {/* <Link> */}
            <a href="#" className="category__links_text">Maishiy texnika</a>
            {/* </Link> */}
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="categorys__box">
            {/* <Link> */}
            <a href="#" className="category__links_text">Televizorlar</a>
            {/* </Link> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Categorys;
