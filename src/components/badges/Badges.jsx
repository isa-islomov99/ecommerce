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

const Badges = () => {
  const {products} = useSelector((state) => state.products);
  console.log(products)
  return (
    <div className="badges">
      <Link to="/" className="badges_container">
        <HomeOutlined className="badges_icon" />
        <p className="badges_title">Bosh sahifa</p>
      </Link>
      <Link to="/cart" className="badges_container">
        <Badge status="success" count={products.length}>
          <ShoppingCartOutlined className="badges_icon" />
        </Badge>
        <p className="badges_title">Savatcha</p>
      </Link>
      <Link to="/favorite" className="badges_container">
        <Badge status="success" count={0}>
          <HeartOutlined className="badges_icon" />
        </Badge>
        <p className="badges_title">Sevimlilar</p>
      </Link>
      <Link to="/account" className="badges_container">
        <UserOutlined className="badges_icon" />
        <p className="badges_title">Profil</p>
      </Link>
    </div>
  );
};

export default Badges;
