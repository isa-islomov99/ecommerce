import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";
import Card from "../card/Card";

import { filteredBrandCategory } from "../../service/api";
import SidebarCategoryLinks from "../sidebarCategoryLinks/SidebarCategoryLinks";

import { useTranslation } from "react-i18next";

const FilteredBrandCategory = (props) => {
  const { match } = props;

  const { t } = useTranslation();

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

  return (
    <div className="all_products_card">
      <div className="container">
        {slicesData &&
          slicesData.map((list, i) => (
            <h1 className="all_products_card__category_title" key={i}>
              {list.brand} {t("brand_title")} {list.category}
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

export default FilteredBrandCategory;
