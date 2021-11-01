import React from "react";
import "./checkoutThirdStep.scss";
import { message } from "antd";

import { useTranslation } from "react-i18next";

const CheckoutThirdStep = ({ prev }) => {
  const { t } = useTranslation();

  return (
    <div className="checkoutThirdStep">
      <h1 className="checkoutThirdStep__title">{t("cart_finish_text")}</h1>
      <button className="checkoutThirdStep__btn" onClick={() => prev()}>
        {t("cart_previous_btn")}
      </button>
      <button
        className="checkoutThirdStep__btn"
        onClick={() => message.success("Jarayon muvoffiyiqatli yakunlandi!")}
      >
        {t("cart_end_btn")}
      </button>
    </div>
  );
};

export default CheckoutThirdStep;
