import React from "react";
import "./checkoutSecondStep.scss";

import { useTranslation } from "react-i18next";

const CheckoutSecondStep = (props) => {
  const { prev, next, register, handleSubmit, errors } = props;

  const handleNext = () => {
    next();
  };

  const { t } = useTranslation();

  return (
    <div className="checkoutSecondStep">
      <form
        onSubmit={handleSubmit(handleNext)}
        className="checkoutSecondStep__form"
      >
        <div className="checkoutSecondStep__input_box">
          <input
            className="checkoutSecondStep__input"
            type="text"
            placeholder={t("cart_input_placeholder1")}
            name="city"
            {...register("City", {
              required: "Iltimos, o'z hududingizni kiriting",
            })}
          />
        </div>
        {errors.City && (
          <p className="checkoutSecondStep__error_text">
            {errors.City.message}
          </p>
        )}
        <div className="checkoutSecondStep__input_box">
          <input
            type="text"
            className="checkoutSecondStep__input"
            placeholder={t("cart_input_placeholder2")}
            name="tuman"
            {...register("Tuman", {
              required: "Iltimos, tumaningizni tanlang",
            })}
          />
        </div>
        {errors.Tuman && (
          <p className="checkoutSecondStep__error_text">
            {errors.Tuman.message}
          </p>
        )}
        <div className="checkoutSecondStep__input_box">
          <input
            type="text"
            className="checkoutSecondStep__input"
            placeholder={t("cart_input_placeholder3")}
            name="street"
            {...register("Street", {
              required: "Iltimos, ko'changiz nomini kiriting",
            })}
          />
        </div>
        {errors.Street && (
          <p className="checkoutSecondStep__error_text">
            {errors.Street.message}
          </p>
        )}
        <div className="checkoutSecondStep__input_box">
          <textarea
            className="checkoutSecondStep__texterea"
            placeholder={t("cart_input_placeholder4")}
            name="texterea"
            {...register("Text", {
              required: "Iltimos, sharh qoldiring",
            })}
          />
        </div>
        {errors.Text && (
          <p className="checkoutSecondStep__error_text">
            {errors.Text.message}
          </p>
        )}
        <div className="checkoutSecondStep__button_box">
          <button className="checkoutSecondStep__btn" onClick={() => prev()}>
            {t("cart_previous_btn")}
          </button>
          <button type="submit" className="checkoutSecondStep__btn">
            {t("cart_next_btn")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutSecondStep;
