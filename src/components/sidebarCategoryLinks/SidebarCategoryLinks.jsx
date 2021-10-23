import React from "react";
import "./sidebarCategoryLinks.scss";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarCategoryLinks = () => {

  // Redux Toolkitdan kegan brandlani categorysini olish uchun
  const data = useSelector((state) => state.products.brandsDate);

  const filteredSmartfons = data.filter(phones => phones.category === 'Smartfonlar')
  const filteredNotebooks = data.filter(phones => phones.category === 'Noutbuklar')
  const filteredAppliances = data.filter(phones => phones.category === 'Maishiy texnika')
  const filteredTv = data.filter(phones => phones.category === 'Televizorlar')

  const slicesSmartfonsData = filteredSmartfons.slice(filteredSmartfons.length - 1);
  const slicesNotebooksData = filteredNotebooks.slice(filteredNotebooks.length - 1);
  const slicesAppliancesData = filteredAppliances.slice(filteredAppliances.length - 1);
  const slicesTvData = filteredTv.slice(filteredTv.length - 1);

  const allSlicesData = [].concat(slicesSmartfonsData, slicesNotebooksData, slicesAppliancesData, slicesTvData)

  console.log(allSlicesData)

  return (
    <div>
      {allSlicesData &&
        allSlicesData.map((category, i) => (
          <NavLink
            key={i}
            to={`/brands/${category.brand}/${category.category}`}
            activeClassName="active_link"
            className="all_brands_card__brands_category_link"
          >
            {category.category}
          </NavLink>
        ))}
    </div>
  );
};

export default SidebarCategoryLinks;
