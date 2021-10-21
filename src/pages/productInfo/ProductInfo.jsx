import React, { useState, useEffect } from "react";
import "./productInfo.scss";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

import { useDispatch, useSelector } from "react-redux";
import { productView } from "../../store/productSlice";

const ProductInfo = (props) => {
  const { match, history } = props;

  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  // Redux Toolkitdan data larni olish
  const data = useSelector((state) => state.products.productDate);

  // Map qiganda hamma data lar emas faqat 1 ta sini nomi chiqishi uchun kesib olingan
  const slicesData = data.slice(data.length - 1);

  // Function to back
  const handleGoBack = () => {
    history.goBack();
  };

  const handleTab = (index) => {
    setIndex((index = index));
  };

  // Toolkitdan keladigan data lani path uzgarganda har safar render qilishi uchun useEffect ichida yozildi,bumasa har doim ham malumotla kemasdi
  useEffect(() => {
    dispatch(productView(match.params.id));
  }, [match.params.id]);
  return (
    <div className="product_info">
      <div className="container">
        {slicesData &&
          slicesData.map((item) => (
            <>
              <div key={item.id} className="product_info__product_router">
                <div className="product_info__btn_back">
                  <button
                    onClick={handleGoBack}
                    className="product_info__button_back"
                  >
                    Orqaga
                  </button>
                </div>
                <Link to="/" className="product_info__go_title_page">
                  Bosh sahifa
                </Link>
                <Link
                  to={`/category/${item.category}`}
                  className="product_info__go_title_page"
                >
                  {item.category}
                </Link>
                <p className="product_info__title_url">{item.category}</p>
              </div>
              <div className="product_info__product_titles">
                <Link
                  to={`/brands/${item.brand}`}
                  className="product_info__go_brands_page_title"
                >
                  {item.brand}
                </Link>
                <h1 className="product_info__product_title_name">
                  {item.title}
                </h1>
              </div>
            </>
          ))}
        {data &&
          data.map((list) => (
            <Row key={list.id}>
              <Col
                xs={24}
                sm={12}
                md={12}
                lg={18}
                xl={18}
                className="product_info_sidebar_column"
              >
                <Row>
                  <Col
                    xs={24}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                    className="product_info__sidebar_slides_img_box"
                  >
                    {list.product_Corusel_Imgs.map((source, index) => (
                      <div
                        key={list.id}
                        className="product_info__product_img_slide_gallery"
                      >
                        <img
                          className="product_info__slide_imgs"
                          key={index}
                          src={source}
                          alt="product-img"
                          onClick={() => handleTab(index)}
                        />
                      </div>
                    ))}
                  </Col>
                  <Col
                    xs={24}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={8}
                    className="product_info__sidebar_zoom_img_box"
                  >
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: list.product_Corusel_Imgs[index],
                        },
                        largeImage: {
                          src: list.product_Corusel_Imgs[index],
                          width: 1200,
                          height: 1800,
                        },
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={12} md={12} lg={6} xl={6}></Col>
            </Row>
          ))}
      </div>
    </div>
  );
};

export default ProductInfo;
