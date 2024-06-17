import { Link } from "react-router-dom";
import banner from "./../../asset/img/banner-qc.jpg";
import "./../../scss/Home.scss";
import { Calculator } from "./Calculator";
import { CarouselSlider } from "./Carousel";
import { Information } from "./Information";
import { SliderProduct } from "./SliderProduct";
import { DataSlider } from "../../utils/sliderBanner";
import { DataFlashSale, DataHotProduct } from "../../utils";

export const Home = () => {
  return (
    <div className="home-page">
      <CarouselSlider data={DataSlider} />
      <div className="banner">
        <Link to="/">
          <img src={banner} alt="banner" />
        </Link>
      </div>
      <div className="slider-flash-sale">
        <SliderProduct data={DataFlashSale} title="FLASH SALE" />
      </div>
      <SliderProduct data={DataHotProduct} title="SẢN PHẨM HOT" />
      <Information />
      <Calculator />
    </div>
  );
};
