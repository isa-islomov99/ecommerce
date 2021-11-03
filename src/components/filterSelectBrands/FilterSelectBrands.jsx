import React, { useState } from "react";
import "./filterSelectBrands.scss";
import { Row, Pagination } from "antd";
import { filteredSelectBrandsData } from "../../service/api";
import Card from "../card/Card";

import { useTranslation } from "react-i18next";
import SelectBrands from "../selectBrands/SelectBrands";


const FilterSelectBrands = (props) => {
  const { t } = useTranslation();

  const { match } = props;

  // 21,22,23 - qatordagi kodla select dan brendni tanlaganda usha brandni productlarini chiqarish uchun Match ni url ni arrayga utqazib brand nomini kesib olib yana uni stringga utqazib filteredBrandCategory ga argument sifatida berib yuborilgan
  const cutUrl = match.url;
  const convertToArray = cutUrl.split("/");
  const convertToString = convertToArray.slice(2, 3).toString();

//   console.log(convertToString)

  // Brand va category larni filter qilib olish uchun
  const data = filteredSelectBrandsData(convertToString, match.params.id);

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
              {list.category}
            </h1>
          ))}

        <div className="all_products_card__filter_box">
          <h2 className="all_products_card__filter_title">
            {t("filter_title")}
          </h2>
         
          <SelectBrands paramsId={convertToString} />
        </div>
        <Row>
          {currentPosts &&
            currentPosts.map((item, i) => <Card key={i} {...item} />)}
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

export default FilterSelectBrands;
