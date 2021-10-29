import React from "react";
import "./checkoutThirdStep.scss";
import { Button, message } from "antd";

const CheckoutThirdStep = ({prev}) => {

  return (
    <div className="checkoutThirdStep">
      <h1 className="checkoutThirdStep__title">
        Siz barcha bosqishlarni to'liq tuldirdingiz va Buyurtmangiz yaqin 48
        soat ichida yetkazib beriladi. Haridingiz uchun tashakkur
      </h1>
      <button className="checkoutThirdStep__btn" onClick={() => prev()}>
        Orqaga
      </button>
      <button
        className="checkoutThirdStep__btn"
        onClick={() => message.success("Jarayon muvoffiyiqatli yakunlandi!")}
      >
        Yakunlash
      </button>
    </div>
  );
};

export default CheckoutThirdStep;
