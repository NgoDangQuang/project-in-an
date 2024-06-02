import { Select } from "antd";
import React, { useState } from "react";
import "./../../scss/PricingForm.scss";

const PricingForm = ({ data }) => {
  const initialFormValues = data.reduce((acc, curr) => {
    acc[curr.title] = curr.options[0].value;
    return acc;
  }, {});

  const [formValues, setFormValues] = useState(initialFormValues);
  const [price, setPrice] = useState(0);

  const handleChange = (value, key) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const calculatePrice = () => {
    let price = Object.values(formValues).reduce(
      (total, value) => total + Number(value),
      0
    );
    setPrice(price);
  };

  return (
    <div className="pricing-form">
      <div className="title">BÁO GIÁ NHANH</div>
      <form className="form">
        {data.map((field) => {
          console.log("🚀 ~ PricingForm ~ field:", field);
          return (
            <div key={field.title}>
              <label>
                <div className="label-option">{field.title}</div>
                <Select
                  options={field.options}
                  onChange={(e) => {
                    handleChange(e, field.title);
                  }}
                  className="select-box"
                />
              </label>
              <br />
            </div>
          );
        })}
        <div className="result">
          <button type="button" onClick={calculatePrice} className="button">
            Tính giá
          </button>
          <div className="price-product">{price}</div>
          <p>VND</p>
        </div>
      </form>
    </div>
  );
};

export default PricingForm;
