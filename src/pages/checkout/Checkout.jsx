import React, { useState } from "react";
import "./checkout.scss";
import { Steps } from "antd";
import CheckoutFirstStep from "../checkoutFirstStep/CheckoutFirstStep";
import CheckoutSecondStep from "../checkoutSecondStep/CheckoutSecondStep";
import CheckoutThirdStep from "../checkoutThirdStep/CheckoutThirdStep";
import { useForm } from "react-hook-form";

// const { Step } = Steps;

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <CheckoutFirstStep
            next={next}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        );
      case 1:
        return (
          <CheckoutSecondStep
            prev={prev}
            next={next}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        );
      case 2:
        return <CheckoutThirdStep prev={prev} />;
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <div className="checkout">
      <div className="container">
        <Steps current={current}></Steps>
        {getStepContent(current)}
      </div>
    </div>
  );
};

export default Checkout;
