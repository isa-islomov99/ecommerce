import React, { useState, useEffect, useRef } from "react";
import "./productInfo.scss";
import { Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

import { useDispatch, useSelector } from "react-redux";
import {
  productView,
  addProduct,
  addProductToFavorites,
} from "../../store/productSlice";

import { SwiperSlide } from "swiper/react";
import MainCarouselCards from "../../components/mainCarouselCards/MainCarouselCards";

import { useTranslation } from "react-i18next";

const ProductInfo = (props) => {
  const { match, history } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  // Redux Toolkitdan data larni olish
  const data = useSelector((state) => state.products.productDate);

  const ref = useRef();

  // Function to back
  const handleGoBack = () => {
    history.goBack();
  };

  // Function to change slide imgs when click
  const handleTab = (index) => {
    setIndex((index = index));
    const images = ref.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  // Toolkitdan keladigan data lani path uzgarganda har safar render qilishi uchun useEffect ichida yozildi,bumasa har doim ham malumotla kemasdi
  useEffect(() => {
    dispatch(productView(match.params.id));
  }, [match.params.id]);

  return (
    <div className="product_info">
      <div className="container">
        {data &&
          data.map((item) => (
            <React.Fragment>
              <div key={item.id} className="product_info__product_router">
                <div className="product_info__btn_back">
                  <ArrowLeftOutlined
                    onClick={handleGoBack}
                    className="product_info__button_back"
                  />
                </div>
                <Link to="/" className="product_info__go_title_page">
                  {t("main_page_title")}
                </Link>
                <Link
                  to={`/category/${item.category}`}
                  className="product_info__go_title_page"
                >
                  {item.category}
                </Link>
                <p className="product_info__title_url">{item.brand}</p>
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
            </React.Fragment>
          ))}
        {data &&
          data.map((list, i) => (
            <>
              <Row key={i}>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={18}
                  className="product_info_sidebar_column"
                >
                  <Row>
                    <Col
                      xs={0}
                      sm={4}
                      md={3}
                      lg={3}
                      xl={3}
                      className="product_info__sidebar_slides_img_box"
                    >
                      <div
                        className="product_info__product_img_slide_gallery"
                        ref={ref}
                      >
                        {list.product_Corusel_Imgs.map((source, index) => (
                          <img
                            key={index}
                            src={source}
                            alt="product-img"
                            onClick={() => handleTab(index)}
                          />
                        ))}
                      </div>
                    </Col>
                    <Col
                      xs={24}
                      sm={12}
                      md={12}
                      lg={10}
                      xl={10}
                      className="product_info__sidebar_zoom_img_box"
                    >
                      <div className="product_info__magnify_img">
                        <ReactImageMagnify
                          {...{
                            smallImage: {
                              alt: "Wristwatch by Ted Baker London",
                              isFluidWidth: true,
                              src: list.product_Corusel_Imgs[index],
                            },
                            largeImage: {
                              src: list.product_Corusel_Imgs[index],
                              width: 1400,
                              height: 1300,
                            },
                          }}
                        />
                      </div>
                      <div className="product_info__mobile_slider">
                        <MainCarouselCards>
                          {list.product_Corusel_Imgs.map((source, index) => (
                            <SwiperSlide key={index}>
                              <img
                                src={source}
                                alt="product-img"
                                className="product_info__mobile_slider_img"
                              />
                            </SwiperSlide>
                          ))}
                        </MainCarouselCards>
                      </div>
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={24}
                      lg={10}
                      xl={10}
                      className="product_info__product_details_box"
                    >
                      <div className="product_info__product_price">
                        {list.price.discount && (
                          <p className="product_info__product_price_sale">
                            {list.price.discount_price} {t("sum")}
                          </p>
                        )}
                        <h1
                          className={
                            list.price.discount
                              ? "product_info__product_price_text"
                              : "product_info__product_sale_price_text"
                          }
                        >
                          {list.price.cost} {t("sum")}
                        </h1>
                      </div>
                      <h3 className="product_info__short_info__title">
                        {t("short_about_product")}
                      </h3>
                      <p className="product_info__guarantee_period_text">
                        {t("garantiya_product")} {t("month_product")}{" "}
                        {list.properties.guarantee}
                      </p>
                      <p className="product_info__product_desciription_text">
                        {list.description}
                      </p>
                      <h3 className="product_info__product_color">
                        {t("color_product")}:{" "}
                        <button>{list.properties.color}</button>
                      </h3>
                      <div className="product_info__product_add_buttons">
                        <button
                          className="product_info__add_to_cart_btn"
                          onClick={() => dispatch(addProduct({ ...list }))}
                        >
                          {t("add_product_to_cart_title")}
                        </button>
                        <button
                          className="product_info__add_to_like_btn"
                          onClick={() =>
                            dispatch(addProductToFavorites({ ...list }))
                          }
                        >
                          {t("add_product_to_favorites_title")}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                  <div className="product_info__delivery_info_box">
                    <div className="product_info__brand_img_box">
                      <Link to={`/brands/${list.brand}`}>
                        <img
                          className="product_info__brand_logo_img"
                          src={list?.brandLogo}
                          alt="product-brand-img"
                        />
                      </Link>
                    </div>
                    <p className="product_info__delivery_paragraf">
                      {t("product_delivery_title")}
                    </p>
                    <h2 className="product_info__delivery_title">
                      {t("product_delivery_sub_title")}
                    </h2>
                    <p className="product_info__delivery_paragraf">
                      {t("product_sklad_title")}
                    </p>
                    <h2 className="product_info__delivery_title">shop_uz</h2>
                    <p className="product_info__delivery_paragraf">
                      {t("product_salesman_title")}
                    </p>
                    <h2 className="product_info__delivery_title">shop_uz</h2>
                  </div>
                </Col>
              </Row>
              <div className="product_info__product_specifications">
                <h1 className="product_info__product_all_specifications_title">
                  {t("product_specifications_title")}
                </h1>
                <h1 className="product_info__product_common_info">
                  {t("product_common_info_title")}
                </h1>
                <div className="product_info__product_specifications_box">
                  <h3 className="product_info__specifications_key_title">
                    {t("garantiya_product")}
                  </h3>
                  <div className="product_info__specifications_line"></div>
                  <h3 className="product_info__specifications_key_title">
                    {list.properties.guarantee} Oy
                  </h3>
                </div>
                <div className="product_info__product_specifications_box">
                  <h3 className="product_info__specifications_key_title">
                    {t("color_product")}
                  </h3>
                  <div className="product_info__specifications_line"></div>
                  <h3 className="product_info__specifications_key_title">
                    {list.properties.color}
                  </h3>
                </div>
                <div className="product_info__product_specifications_box">
                  <h3 className="product_info__specifications_key_title">
                    {t("product_made_in_title")}
                  </h3>
                  <div className="product_info__specifications_line"></div>
                  <h3 className="product_info__specifications_key_title">
                    {list.properties.made_in}
                  </h3>
                </div>
                <div className="product_info__product_specifications_box">
                  <h3 className="product_info__specifications_key_title">
                    {t("product_weight_title")}
                  </h3>
                  <div className="product_info__specifications_line"></div>
                  <h3 className="product_info__specifications_key_title">
                    {list.properties.total_weight}
                  </h3>
                </div>
                {list.properties.store && (
                  <div className="product_info__product_specifications_box">
                    <h3 className="product_info__specifications_key_title">
                      {t("product_store_title")}
                    </h3>
                    <div className="product_info__specifications_line"></div>
                    <h3 className="product_info__specifications_key_title">
                      {list.properties.store}
                    </h3>
                  </div>
                )}
                {list.properties.RAM && (
                  <div className="product_info__product_specifications_box">
                    <h3 className="product_info__specifications_key_title">
                      {t("product_ram_info_title")}
                    </h3>
                    <div className="product_info__specifications_line"></div>
                    <h3 className="product_info__specifications_key_title">
                      {list.properties.RAM}
                    </h3>
                  </div>
                )}
                {list.properties.procceccor && (
                  <div className="product_info__product_specifications_box">
                    <h3 className="product_info__specifications_key_title">
                      {t("product_protsessor_title")}
                    </h3>
                    <div className="product_info__specifications_line"></div>
                    <h3 className="product_info__specifications_key_title">
                      {list.properties.procceccor}
                    </h3>
                  </div>
                )}
                {list.properties.ulchami && (
                  <div className="product_info__product_specifications_box">
                    <h3 className="product_info__specifications_key_title">
                      {t("product_razmer_title")}
                    </h3>
                    <div className="product_info__specifications_line"></div>
                    <h3 className="product_info__specifications_key_title">
                      {list.properties.ulchami}
                    </h3>
                  </div>
                )}
                {list.properties.power && (
                  <div className="product_info__product_specifications_box">
                    <h3 className="product_info__specifications_key_title">
                      {t("product_acumlator_title")}
                    </h3>
                    <div className="product_info__specifications_line"></div>
                    <h3 className="product_info__specifications_key_title">
                      {list.properties.power}
                    </h3>
                  </div>
                )}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default ProductInfo;
