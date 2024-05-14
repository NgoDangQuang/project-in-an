import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./../../scss/SliderProduct.scss";

export const SliderProduct = ({ data, title }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="container-flash-sale">
      <div className="flash-sale">
        <div className="title">{title}</div>
        <div className="slider-product">
          <Carousel
            responsive={responsive}
            draggable
            infinite
            transitionDuration={200}
            autoPlay
          >
            {data?.map((item) => {
              return (
                <div className="slide-item">
                  <Link to={item?.link}>
                    <img
                      src={item?.img}
                      alt={item?.alt}
                      className="img-first"
                    />
                    <img
                      src={item?.imgSecond}
                      alt={item?.alt}
                      className="second-img"
                    />
                    <div className="category">{item?.title}</div>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};