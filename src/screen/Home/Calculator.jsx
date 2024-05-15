import { Button, Input, Select } from "antd";
import "./../../scss/Calculator.scss";
import { useState } from "react";

export const Calculator = () => {
  const [count, setCount] = useState(1);
  const [canMang, setCanMang] = useState(false);
  const [soMatIn, setSoMatIn] = useState(1);
  const [dinhLuongGiay, setDinhLuongGiay] = useState(80);
  const [giaTien, setGiaTien] = useState(0);

  const canMangOption = [
    { value: "can_mang", label: "Cán Màng" },
    { value: "khong_can_mang", label: "Không Cán Màng" },
  ];

  const soMatInOption = [
    { value: 1, label: "In 1 mặt" },
    { value: 2, label: "In 2 mặt" },
  ];

  const dinhLuongGiayOption = [
    {
      value: 80,
      label: "80 gsm",
    },
    {
      value: 100,
      label: "100 gsm",
    },
    {
      value: 115,
      label: "115 gsm",
    },
    {
      value: 150,
      label: "150 gsm",
    },
    {
      value: 180,
      label: "180 gsm",
    },
    {
      value: 200,
      label: "200 gsm",
    },
    {
      value: 210,
      label: "210 gsm",
    },
    {
      value: 230,
      label: "230 gsm",
    },
    {
      value: 250,
      label: "250 gsm",
    },
    {
      value: 280,
      label: "280 gsm",
    },
    {
      value: 300,
      label: "300 gsm",
    },
    {
      value: 350,
      label: "350 gsm",
    },
  ];

  const handleCalculator = () => {
    setGiaTien(1);
  };
  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="title">TÍNH GIÁ IN NHANH</div>
        <div className="infor">
          <div className="item-input">
            <div className="name">Nhập số lượng trang in A4</div>
            <Input
              type="number"
              className="input"
              defaultValue={1}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <div className="item-input">
            <div className="name">Cán màng</div>
            <Select
              className="input"
              defaultValue={canMangOption[0].value}
              options={canMangOption}
              onChange={(e) => setCanMang(e)}
            />
          </div>
          <div className="item-input">
            <div className="name">Số mặt in</div>
            <Select
              className="input"
              defaultValue={1}
              options={soMatInOption}
              onChange={(e) => setSoMatIn(e)}
            />
          </div>
          <div className="item-input">
            <div className="name">Định lượng giấy</div>
            <Select
              className="input"
              defaultValue={dinhLuongGiayOption[0].value}
              options={dinhLuongGiayOption}
              onChange={(e) => setDinhLuongGiay(e)}
            />
          </div>
          <div className="item-input">
            <div className="name"></div>
            <Button className="button" onClick={handleCalculator}>
              Tính giá
            </Button>
          </div>
          <div className="item-input">
            <div className="name"></div>
            <div className="result">{`Giá tiền tạm tính: ${giaTien}đ`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
