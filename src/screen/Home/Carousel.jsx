import "./../../scss/Carousel.scss";
import { Carousel } from "antd";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

export const CarouselSlider = ({ data }) => {
  return (
    <div className="carousel">
      <Carousel
        arrows
        infinite={true}
        autoplaySpeed={3000}
        autoplay={false}
        effect="fade"
        speed={500}
        nextArrow={<RightCircleFilled />}
        prevArrow={<LeftCircleFilled />}
        dots={{ className: "dots-icon" }}
      >
        {data?.map((item) => {
          return (
            <div className="slide-item">
              <img src={item?.img} alt={item?.alt} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
