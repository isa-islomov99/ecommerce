import React from "react";
import "./badges.scss";
import { Badge } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

const Badges = () => {

  const { t } = useTranslation();

  const {products, favorites} = useSelector((state) => state.products);

  return (
    <div className="badges">
      <Link to="/" className="badges_container">
        <HomeOutlined className="badges_icon" />
        <p className="badges_title">{t("main_page_title")}</p>
      </Link>
      <Link to="/cart" className="badges_container">
        <Badge status="success" count={products.length}>
          <ShoppingCartOutlined className="badges_icon" />
        </Badge>
        <p className="badges_title">{t("badge_cart_title")}</p>
      </Link>
      <Link to="/favorite" className="badges_container">
        <Badge status="success" count={favorites?.length}>
          <HeartOutlined className="badges_icon" />
        </Badge>
        <p className="badges_title">{t("badge_favorite_title")}</p>
      </Link>
      <Link to="/account" className="badges_container">
        <UserOutlined className="badges_icon" />
        <p className="badges_title">{t("badge_accaunt_title")}</p>
      </Link>
    </div>
  );
};

export default Badges;
