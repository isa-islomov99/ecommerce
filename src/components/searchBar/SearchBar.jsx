import React, { useState, useEffect } from "react";
import "./searchBar.scss";
import Data from "../../service/api";
import { Link } from "react-router-dom";

const SearchBar = ({ getInput }) => {
  const [products, setProducts] = useState(false);

  useEffect(() => {
    if (getInput.length > 0) {
      setProducts(true);
    } else {
      setProducts(false);
    }
  }, [getInput]);

  console.log(getInput);

  return (
    <div className={`${products ? "search_bar__active" : "search_bar"}`}>
      {products &&
        Data.filter((val) => {
          if (getInput == "") {
            return val;
          } else if (val.title.toLowerCase().includes(getInput.toLowerCase())) {
            return val;
          }
        }).map((item) => (
          <Link to={`/product/view/${item.secondTitle}`}>
            <div key={item.id} className="search_bar__dates">
              <div className="search_bar__product_img">
                <img src={item?.img} alt="product-img" />
              </div>
              <div className="search_bar__product_info">
                <p className="search_bar__product_title">{item.title}</p>
                <h3 className="search_bar__product_cost">
                  {item.price.cost} so'm
                </h3>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchBar;
