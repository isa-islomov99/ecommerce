import React from "react";
import { Select } from "antd";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

const { Option } = Select;

const SelectBrands = ({paramsId}) => {

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

  const slicesAppleData = filteredApple.slice(filteredApple.length - 1);
  const slicesSamsungData = filteredSamsung.slice(filteredSamsung.length - 1);
  const slicesXiaomiData = filteredXiaomi.slice(filteredXiaomi.length - 1);
  const slicesAcerData = filteredAcer.slice(filteredAcer.length - 1);
  const slicesAsusData = filteredAsus.slice(filteredAsus.length - 1);
  const slicesLenovoData = filteredLenovo.slice(filteredLenovo.length - 1);
  const slicesHPData = filteredHP.slice(filteredHP.length - 1);
  const slicesArtelData = filteredArtel.slice(filteredArtel.length - 1);

  const allSlicesData = [].concat(
    slicesAppleData,
    slicesSamsungData,
    slicesXiaomiData,
    slicesAcerData,
    slicesAsusData,
    slicesLenovoData,
    slicesHPData,
    slicesArtelData
  );

  return (
    <Select defaultValue={t("filter_brand_title")}>
      {allSlicesData &&
        allSlicesData.map((brand, index) => (
          <Option key={index} value={brand.brand}>
            <NavLink to={`/category/${paramsId}/${brand.brand}`} style={{color: "rgb(119, 119, 119)"}}>
              {brand.brand}
            </NavLink>
          </Option>
        ))}
    </Select>
  );
};

export default SelectBrands;
