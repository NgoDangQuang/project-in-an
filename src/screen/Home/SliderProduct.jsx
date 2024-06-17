import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./../../scss/SliderProduct.scss";

export const SliderProduct = ({ data, title }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
    small: {
      breakpoint: { max: 460, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container-flash-sale">
      <div className="flash-sale">
        <div className="title">{title}</div>
        <div className="slider-product">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoplaySpeed={5000}
            autoPlay
            arrows
            effect="scrollx"
          >
            {data?.map((item) => {
              return (
                <div className="slide-item">
                  <Link to={`san-pham/${item?.url}`}>
                    <img
                      src={item?.imgs[0]}
                      alt={item?.title}
                      className="img-first"
                    />
                    <img
                      src={item?.imgs[1]}
                      alt={item?.title}
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
