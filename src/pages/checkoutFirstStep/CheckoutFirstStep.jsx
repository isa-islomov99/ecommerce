import React from "react";
import "./checkoutFirstStep.scss";

import { useTranslation } from "react-i18next";

const CheckoutFirstStep = (props) => {
  const { next, register, handleSubmit, errors } = props;

  const handleNext = () => {
    next();
  };

  const { t } = useTranslation();

  return (
    <div className="checkoutFirstStep">
      <h1 className="checkoutFirstStep__own_info_title">
        {t("cart_personal_info")}
      </h1>
      <form
        onSubmit={handleSubmit(handleNext)}
        className="checkoutFirstStep__form"
      >
        <div className="checkoutFirstStep__input_box">
          <input
            className="checkoutFirstStep__input"
            type="text"
            placeholder={t("cart_input_name")}
            name="firstName"
            {...register("Firstname", {
              required: "Iltimos, ismingizni va familiyangizni kiriting",
            })}
          />
        </div>
        {errors.Firstname && (
          <p className="checkoutFirstStep__error_text">
            {errors.Firstname.message}
          </p>
        )}
        <div className="checkoutFirstStep__input_box">
          <input
            type="text"
            className="checkoutFirstStep__input"
            placeholder={t("cart_input_number")}
            name="phoneNumber"
            {...register("Phonenumber", {
              required: "Iltimos Raqamingizni kiriting!",
              pattern: {
                value:
                  /^998([12345789][012345789]|6[125679]|7[01234569])[0-9]{7}$/,
                message:
                  "Raqamingizni quyidagi kurinishda kiriting! 998919508787",
              },
            })}
          />
        </div>
        {errors.Phonenumber && (
          <p className="checkoutFirstStep__error_text">
            {errors.Phonenumber.message}
          </p>
        )}
        <button type="submit" className="checkoutFirstStep__btn">
          {t("cart_next_btn")}
        </button>
      </form>
    </div>
  );
};

export default CheckoutFirstStep;
