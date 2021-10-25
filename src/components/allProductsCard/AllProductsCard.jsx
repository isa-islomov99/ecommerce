import React, { useState, useEffect } from "react";
import "./allProductsCard.scss";
import { NavLink } from "react-router-dom";
import { Row, Col, Select, Pagination } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
// import { filteredCategory } from "../../service/api";

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

  // useState for Heart of the Cards
  const [toggleHeart, setToggleHeart] = useState(false);

  // States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  // Codes for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Function for Heart of the Cards
  const handleHeart = () => {
    setToggleHeart(!toggleHeart);
  };

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
                xl={6}
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
