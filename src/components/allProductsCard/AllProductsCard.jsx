import React, { useState, useEffect } from "react";
import "./allProductsCard.scss";
import { NavLink } from "react-router-dom";
import { Row, Select, Pagination } from "antd";
// import { filteredCategory } from "../../service/api";
import Card from "../card/Card";

import { useDispatch, useSelector } from "react-redux";
import { filteredCategory } from "../../store/productSlice";

const { Option } = Select;

const AllProductsCard = (props) => {
  const { match } = props;

  const dispatch = useDispatch();

  // Brand larni service papkadagi Glavniy Api orqali filter qilib olish uchun
  // const data = filteredCategory(match.params.id);

  // Redux Toolkitdan data larni olish
  const data = useSelector((state) => state.products.filterCategory);

  // Map qiganda hamma data ni brandining nomi emas faqat 1 ta sini nomi chiqishi uchun kesib olingan
  const slicesData = data.slice(data.length - 1);

  // States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  // Codes for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Function to take value of the Select
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  // Function for take value of the antdPagination and for scrollTOTop when change page
  const getValuePagination = (val) => {
    setCurrentPage(val);
    window.scrollTo(0, 190);
  };

  // Toolkitdan keladigan data lani path uzgarganda har safar render qilishi uchun useEffect ichida yozildi,bumasa har doim ham malumotla kemasdi
  useEffect(() => {
    dispatch(filteredCategory(match.params.id));
    const filteredCard = () => {
      let cheapDates = [];
      for (let i = 0; i < currentPosts.length; i++) {
        cheapDates.push(currentPosts[i].NumCost);
      }
      console.log(cheapDates);
    };
    filteredCard();
  }, [match.params.id]);

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
          <Select
            defaultValue="Brend"
            style={{ width: 100 }}
            onChange={handleChange}
          >
            {data &&
              data.map((brand, index) => (
                <Option key={index} value={brand.brand}>
                  {brand.brand}
                </Option>
              ))}
          </Select>
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
