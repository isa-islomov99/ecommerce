import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Pagination } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { filteredBrandCategory } from "../../service/api";
import SidebarCategoryLinks from "../sidebarCategoryLinks/SidebarCategoryLinks";

const FilteredBrandCategory = (props) => {
  const { match, history } = props;

  // 14,15,16 - qatordagi kodla qaysi brandga kirsa usha brendni nomini olish uchun Match ni url ni arrayga utqazib brand nomini kesib olib yana uni stringga utqazib filteredBrandCategory ga argument sifatida berib yuborilgan
  const cutUrl = match.url;
  const convertToArray = cutUrl.split("/");
  const convertToString = convertToArray.slice(2, 3).toString();

  // Brand va category larni filter qilib olish uchun
  const data = filteredBrandCategory(convertToString, match.params.id);

  // Map qiganda hamma data ni brandining nomi emas faqat 1 ta sini nomi chiqishi uchun kesib olingan
  const slicesData = data.slice(data.length - 1);

  // States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  // Codes for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // useState for Heart of the Cards
  const [toggleHeart, setToggleHeart] = useState(false);

  // Function for Heart of the Cards
  const handleHeart = () => {
    setToggleHeart(!toggleHeart);
  };

  // Function for take value of the antdPagination and for scrollTOTop when change page
  const getValuePagination = (val) => {
    setCurrentPage(val);
    window.scrollTo(0, 190);
  };

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
              {currentPosts &&
                currentPosts.map((item, i) => (
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
                    <NavLink to={`/product/view/${item.secondTitle}`}>
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
                    </NavLink>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
        <div className="all_products_card__pagination">
          <Pagination
            onChange={(value) => getValuePagination(value)}
            pageSize={postsPerPage}
            total={data.length}
            current={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default FilteredBrandCategory;