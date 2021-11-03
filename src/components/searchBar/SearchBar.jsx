import React, { useState, useEffect } from "react";
import "./searchBar.scss";
import Data from "../../service/api";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const SearchBar = ({ getInput, setGetInput }) => {

  const { t } = useTranslation();

  const [products, setProducts] = useState(false);
  const [filteredDate, setFilteredDate] = useState([]);

  useEffect(() => {
    if (getInput.length > 0) {
      setProducts(true);
    } else {
      setProducts(false);
    }

    setFilteredDate(
      Data.filter((val) => {
        if (getInput === "") {
          return val;
        } else if (val.title.toLowerCase().includes(getInput.toLowerCase())) {
          return val;
        }
      })
    );
  }, [getInput]);

  return (
    <div className={`${products ? "search_bar__active" : "search_bar"}`}>
      {filteredDate.length > 0 ? (
        products &&
        filteredDate.map((item) => (
          <Link key={item.id} to={`/product/view/${item.secondTitle}`}>
            <div className="search_bar__dates" onClick={() => setGetInput("")}>
              <div className="search_bar__product_img">
                <img src={item?.img} alt="product-img" />
              </div>
              <div className="search_bar__product_info">
                <p className="search_bar__product_title">{item.title}</p>
                <h3 className="search_bar__product_cost">
                  {item.price.cost} {t("sum")}
                </h3>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="search_bar__no_data">
          <img
            src="https://olcha.uz/_nuxt/img/products-notfound.7e9e7ca.png"
            alt="no-data"
          />
          <h2>{t("search_no_data_title")}</h2>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
