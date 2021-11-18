import React from "react";
import { Select } from "antd";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

const { Option } = Select;

const SelectBrands = ({ paramsId }) => {
  const { t } = useTranslation();

  const data = useSelector((state) => state.products.filterCategory);

  // Ushbu kodlar Selectda 1 ta brendni nomi 1 tadan kup chiqmasligi uchun
  const filteredApple = data.filter((phones) => phones.brand === "Apple");
  const filteredSamsung = data.filter((phones) => phones.brand === "Samsung");
  const filteredXiaomi = data.filter((phones) => phones.brand === "Xiaomi");
  const filteredAcer = data.filter((phones) => phones.brand === "Acer");
  const filteredAsus = data.filter((phones) => phones.brand === "Asus");
  const filteredLenovo = data.filter((phones) => phones.brand === "Lenovo");
  const filteredHP = data.filter((phones) => phones.brand === "HP");
  const filteredArtel = data.filter((phones) => phones.brand === "Artel");

  const allSlicesData = [].concat(
    filteredApple,
    filteredSamsung,
    filteredXiaomi,
    filteredAcer,
    filteredAsus,
    filteredLenovo,
    filteredHP,
    filteredArtel
  );

  const newSortedArray = allSlicesData.map((list) => {
    return list.brand;
  });
  
  const slicesBrands = [...new Set(newSortedArray)]

  return (
    <Select defaultValue={t("filter_brand_title")}>
      {slicesBrands &&
        slicesBrands.map((brand, index) => (
          <Option key={index} value={brand}>
            <NavLink
              to={`/category/${paramsId}/${brand}`}
              style={{ color: "rgb(119, 119, 119)" }}
            >
              {brand}
            </NavLink>
          </Option>
        ))}
    </Select>
  );
};

export default SelectBrands;
