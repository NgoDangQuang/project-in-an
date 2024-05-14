import { Link } from "react-router-dom";
import { DataFlashSale, DataSlider } from "../../utils";
import banner from "./../../asset/img/banner-qc.jpg";
import "./../../scss/Home.scss";
import { CarouselSlider } from "./Carousel";
import { SliderProduct } from "./SliderProduct";
import { Information } from "./Information";

export const Home = () => {
  return (
    <div className="home-page">
      <CarouselSlider data={DataSlider} />
      <div className="banner">
        <Link to="/">
          <img src={banner} alt="banner" />
        </Link>
      </div>
      <SliderProduct data={DataFlashSale} title="FLASH SALE" />
      <SliderProduct data={DataFlashSale} title="SẢN PHẨM HOT" />
      <Information />
      <div style={{ height: "300px" }}></div>
    </div>
  );
};
