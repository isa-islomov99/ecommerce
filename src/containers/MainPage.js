import React from "react";
import Brands from "../components/brands/Brands";
import Comments from "../components/comments/Comments";
import Faq from "../components/faq/Faq";
import HomeMainCarousel from "../components/homeMainCarousel/HomeMainCarousel";
import Notebooks from "../components/notebooks/Notebooks";
import Phones from "../components/phones/Phones";

const MainPage = () => {
  return (
    <div>
      <HomeMainCarousel />
      <Phones />
      <Notebooks />
      <Brands />
      <Comments />
      <Faq />
    </div>
  );
};

export default MainPage;
