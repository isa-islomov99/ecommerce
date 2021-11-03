import React, { useState, useEffect } from "react";
import "./allProductsCard.scss";
import { NavLink } from "react-router-dom";
import { Row, Pagination, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import { filteredCategory } from "../../service/api";
import Card from "../card/Card";

import { useDispatch, useSelector } from "react-redux";
import { filteredCategory } from "../../store/productSlice";
import { useTranslation } from "react-i18next";
import SelectBrands from "../selectBrands/SelectBrands";

const AllProductsCard = (props) => {
  const { t } = useTranslation();

  const { match } = props;

  const paramsId = match.params.id;

  const dispatch = useDispatch();

  // Brand larni service papkadagi Glavniy Api orqali filter qilib olish uchun
  // const data = filteredCategory(match.params.id);

  // Redux Toolkitdan data larni olish
  const data = useSelector((state) => state.products.filterCategory);

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
    console.log(e.target.value);
    setValueLength(e.target.value);
  };

  // Toolkitdan keladigan data lani path uzgarganda har safar render qilishi uchun useEffect ichida yozildi,bumasa har doim ham malumotla kemasdi
  useEffect(() => {
    dispatch(filteredCategory(paramsId));
  }, [paramsId]);

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
                to={`/category/${paramsId}/sort-by-price/${valueLength}`}
                className="all_products_card__filter_links"
              >
                <SearchOutlined />
              </NavLink>
            )}
          </div>
          <SelectBrands paramsId={paramsId} />
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

export default AllProductsCard;
