import React, { useState } from "react";
import "./filterProductByCost.scss";
import { NavLink } from "react-router-dom";
import { Row, Pagination, Input } from "antd";
import { SearchOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { filteredByCost } from "../../service/api";
import Card from "../card/Card";

import { useTranslation } from "react-i18next";
import SelectBrands from "../selectBrands/SelectBrands";

const FilterProductByCost = (props) => {
  const { t } = useTranslation();

  const { match, history } = props;

  // 18,19,20 - qatordagi kodla select dan brendni tanlaganda usha brandni productlarini chiqarish uchun Match ni url ni arrayga utqazib brand nomini kesib olib yana uni stringga utqazib filteredBrandCategory ga argument sifatida berib yuborilgan
  const cutUrl = match.url;
  const convertToArray = cutUrl.split("/");
  const convertToString = convertToArray.slice(2, 3).toString();

  //   console.log(convertToString)

  // Brand va category larni filter qilib olish uchun
  const data = filteredByCost(convertToString, match.params.id);

  // Map qiganda hamma data ni brandining nomi emas faqat 1 ta sini nomi chiqishi uchun kesib olingan
  const slicesData = data.slice(data.length - 1);

  const [valueLength, setValueLength] = useState("");

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

  // Function to take value of the input
  const onChange = (e) => {
    setValueLength(e.target.value);
  };

  return (
    <div className="all_products_card">
      <div className="container">
        {data.length > 0 ? (
          <>
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
              <div>
                <Input
                  placeholder="Narx buyicha qidirish"
                  allowClear
                  value={valueLength}
                  onChange={onChange}
                  style={{ width: "170px" }}
                />
                {valueLength.length > 0 && (
                  <NavLink
                    to={`/category/${convertToString}/sort-by-price/${valueLength}`}
                    className="all_products_card__filter_links"
                  >
                    <SearchOutlined />
                  </NavLink>
                )}
              </div>
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
          </>
        ) : (
          <div className="by_cost__no_data">
            <img
              src="https://olcha.uz/_nuxt/img/products-notfound.7e9e7ca.png"
              alt="no-data"
            />
            <h2>{t("search_no_data_title")}</h2>
            <button onClick={() => history.goBack()}>
              <ArrowLeftOutlined className="by_cost__button_back" />
              {t("cart_previous_btn")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterProductByCost;
