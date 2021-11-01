import React from "react";
import "./about.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="container">
        <h1 className="about__title">{t("footer_about_sub_title1")}</h1>
        <p className="about__subtitle">
          <span>Shop.uz </span>
          {t("about_page_text1")}
        </p>
        <p className="about__subtitle">{t("about_page_text2")}</p>
        <p className="about__subtitle">{t("about_page_text3")}</p>
      </div>
    </div>
  );
};

export default About;
