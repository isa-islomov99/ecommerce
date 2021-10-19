import React from "react";
import "./sidebarCategoryLinks.scss";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarCategoryLinks = () => {

  // Redux Toolkitdan kegan brandlani categorysini olish uchun
  const data = useSelector((state) => state.products.brandsDate);

  return (
    <div>
      {data &&
        data.map((category, i) => (
          <NavLink
            key={i}
            to={`/brands/${category.brand}/${category.category}`}
            className="all_brands_card__brands_category_link"
          >
            {category.category}
          </NavLink>
        ))}
    </div>
  );
};

export default SidebarCategoryLinks;
