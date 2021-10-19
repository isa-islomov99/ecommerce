import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { filteredBrandCategory } from "../../service/api";
import SidebarCategoryLinks from "../sidebarCategoryLinks/SidebarCategoryLinks";

import { useDispatch, useSelector } from "react-redux";
// import { filteredBrandCategory } from "../../store/productSlice";

const FilteredBrandCategory = (props) => {
  const { match, history } = props;

  const dispatch = useDispatch();

  // 14,15,16 - qatordagi kodla qaysi brandga kirsa usha brendni nomini olish uchun Match ni url ni arrayga utqazib brand nomini kesib olib yana uni stringga utqazib filteredBrandCategory ga argument sifatida berib yuborilgan
  const cutUrl = match.url;
  const convertToArray = cutUrl.split("/");
  const convertToString = convertToArray.slice(2, 3).toString();

  // Brand va category larni filter qilib olish uchun
  const data = filteredBrandCategory(convertToString, match.params.id);

  // Redux Toolkitdan data larni olish
  // const data = useSelector((state) => state.products.filterProductDate);

  // Map qiganda hamma data ni brandining nomi emas faqat 1 ta sini nomi chiqishi uchun kesib olingan
  const slicesData = data.slice(data.length - 1);

  // useState for Heart of the Cards
  const [toggleHeart, setToggleHeart] = useState(false);

  // Function for Heart of the Cards
  const handleHeart = () => {
    setToggleHeart(!toggleHeart);
  };

  // useEffect(() => {
  //   dispatch(filteredBrandCategory(convertToString, match.params.id));
  // }, []);

  return (
    <div className="all_products_card">
      <div className="container">
        {slicesData &&
          slicesData.map((list, i) => (
            <h1 className="all_products_card__category_title" key={i}>
              {list.brand} Brendi mahsulotlari {list.category}
            </h1>
          ))}

        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className="all_brands_card__sidebar_links"
          >
            <SidebarCategoryLinks />
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={18}>
            <div className="all_products_card__filter_box">
              <h2 className="all_products_card__filter_title">Saralash:</h2>
              <NavLink
                to={`/category/Smartfonlar/sort-by-price`}
                className="all_products_card__filter_links"
              >
                Avval arzonlari
              </NavLink>
              <NavLink
                to={`/category/Smartfonlar/sort-by-price`}
                className="all_products_card__filter_links"
              >
                Qimmatligi bo'yicha
              </NavLink>
              <NavLink
                to={`/category/Smartfonlar/sort-by-price`}
                className="all_products_card__filter_links"
              >
                Chegirmada
              </NavLink>
            </div>
            <Row className="all_products_card__card_row">
              {data &&
                data.map((item, i) => (
                  <Col
                    key={i}
                    className="all_products_card__card_column"
                    xs={24}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={8}
                  >
                    <div
                      className="all_products_card__product_card_heart"
                      onClick={handleHeart}
                    >
                      {toggleHeart ? (
                        <HeartFilled
                          style={{ fontSize: "21px", color: "#a5c926" }}
                        />
                      ) : (
                        <HeartOutlined
                          style={{ fontSize: "21px", color: "#a5c926" }}
                        />
                      )}
                    </div>
                    <div className="product_carousel_card_img">
                      <img
                        className="all_products_card__card_img"
                        src={item?.img}
                        alt="card-img"
                      />
                    </div>
                    <div className="product_carousel_card_info">
                      {item.price.discount && (
                        <span className="all_products_card__product_sale_text">
                          Chegirma:
                        </span>
                      )}
                      <p className="all_products_card__product_category">
                        {item.category}
                      </p>
                      <div className="all_products_card__product_price">
                        <h5
                          className={
                            item.price.discount
                              ? "all_products_card__product_price_text"
                              : "all_products_card__product_sale_price_text"
                          }
                        >
                          {item.price.cost} so'm
                        </h5>
                        {item.price.discount && (
                          <span className="all_products_card__product_price_sale">
                            {item.price.discount_price} so'm
                          </span>
                        )}
                      </div>
                      <p className="all_products_card__product_title">
                        {item.title}
                      </p>
                      <button className="all_products_card__product_btn">
                        Xarid qilish
                      </button>
                    </div>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FilteredBrandCategory;
