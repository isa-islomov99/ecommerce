import React from "react";
import "./checkoutSecondStep.scss";

const CheckoutSecondStep = (props) => {
  const { prev, next, register, handleSubmit, errors } = props;

  const handleNext = () => {
    next();
  };

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
            placeholder="Yetkazib berish shahri"
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
            placeholder="Yetkazib berish okrugi"
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
            placeholder="Ko'cha"
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
            placeholder="Buyurtma uchun sharh qoldiring"
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
            Orqaga
          </button>
          <button type="submit" className="checkoutSecondStep__btn">
            Keyingisi
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutSecondStep;
