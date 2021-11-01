import React from "react";
import "./faq.scss";
import faqImg from "../../assets/img/faq_man.jpg";

import { Row, Col, Collapse } from "antd";
import { useTranslation } from "react-i18next";

const { Panel } = Collapse;

const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className="faq">
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h1 className="faq__section_title_text">{t("faq")}</h1>
          </Col>
        </Row>
        <Row className="faq__main_box">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img
              className="faq__illustrator_img"
              src={faqImg}
              alt="man-thinking"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="faq__collapse_box">
              <Collapse accordion>
                <Panel header={t("muddatli_tulov_title")} key="1">
                  <p>{t("muddatli_tulov_sub_title")}</p>
                </Panel>
                <Panel header={t("how_buy_title")} key="2">
                  <p>{t("how_buy_sub_title")}</p>
                </Panel>
                <Panel header={t("how_pay_title")} key="3">
                  {t("how_pay_sub_title")}
                </Panel>
                <Panel header={t("delivery_title")} key="4">
                  <p>{t("delivery_sub_title")}</p>
                </Panel>
                <Panel header={t("why_expensive_title")} key="5">
                  <p>{t("why_expensive_sub_title")}</p>
                </Panel>
              </Collapse>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Faq;
