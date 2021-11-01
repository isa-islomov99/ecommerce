import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Pagination } from "antd";
import Card from "../card/Card";

import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";

// import { filteredBrands } from "../../service/api";
import { filteredBrands } from "../../store/productSlice";
import SidebarCategoryLinks from "../sidebarCategoryLinks/SidebarCategoryLinks";

const AllBrandsCard = (props) => {
  const { match, history } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  // Brand larni filter qilib olish uchun
  // const data = filteredBrands(match.params.id);

  // Redux Toolkitdan data larni olish
  const data = useSelector((state) => state.products.brandsDate);

  // Map qiganda hamma data ni brandining nomi emas faqat 1 ta sini nomi chiqishi uchun kesib olingan
  const slicesData = data.slice(data.length - 1);

  // States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  // Codes for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Function for take value of the antdPagination and for scrollTOTop when change page
  const getValuePagination = (val) => {
    setCurrentPage(val);
    window.scrollTo(0, 190);
  };

  // SidebarCategoryLinks componentdagi data ni malumotlari brand larga kirib chiqqanda ham chiqishi uchun
  useEffect(() => {
    dispatch(filteredBrands(match.params.id));
  }, []);

  return (
    <div className="all_products_card">
      <div className="container">
        {slicesData &&
          slicesData.map((list, i) => (
            <h1 className="all_products_card__category_title" key={i}>
              {list.brand} {t("brand_title")}
            </h1>
          ))}

        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={6}
            xl={5}
            className="all_brands_card__sidebar_links"
          >
            <SidebarCategoryLinks />
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={19}>
            <div className="all_products_card__filter_box">
              <h2 className="all_products_card__filter_title">
                {t("filter_title")}
              </h2>
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
                {t("filter_sale_title")}
              </NavLink>
            </div>
            <Row className="all_products_card__card_row">
              {currentPosts &&
                currentPosts.map((item, i) => <Card key={i} {...item} />)}
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

export default AllBrandsCard;
