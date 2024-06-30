import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { useParams } from "react-router-dom";
import { Products } from "../../utils";
import "./../../scss/ProductDetail.scss";
import { LayoutProduct } from "./LayoutProduct";
import { Content } from "../Knowledge/Content";

export const ProductDetail = ({ dataProducts }) => {
  const { itemId } = useParams();
  const data = Object.values(dataProducts).find((item) => item.url === itemId);

  const [showImg, setShowImg] = useState(0);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="product-detail-container">
      <div className="layout-product-detail">
        <div className="product-detail">
          <div className="product-detail-image">
            <div className="title">{data?.title}</div>
            <div className="layout-img">
              <div className="image">
                <Image src={data?.imgs[showImg]} preview />
              </div>

              <div className="img-preview">
                <Carousel
                  responsive={responsive}
                  draggable
                  infinite={true}
                  transitionDuration={200}
                >
                  {data?.imgs?.map((item, index) => {
                    return (
                      <div
                        className={`img-item ${
                          showImg === index ? "active" : ""
                        }`}
                      >
                        <img
                          src={item}
                          alt=""
                          onClick={() => setShowImg(index)}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>

          <div className="product-content">
            <div className="title-detail">CHI TIẾT SẢN PHẨM</div>
            <div className="content">
              {data?.content?.map((item, index) => {
                return <Content key={index} data={item} id={item?.id} />;
              })}
            </div>
          </div>

          <div className="price">
            <div className="contact">
              <div className="contact-title">LIÊN HỆ TƯ VẤN</div>
              <div className="company-contact">
                <div className="name">CÔNG TY CỔ PHẦN IN AN NHÂN</div>
                <div className="content">
                  <div className="content-item">
                    <EnvironmentOutlined className="icon" />
                    958 Nguyễn Kiệm, P. 3, Q. Gò Vấp, Tp. HCM
                  </div>
                  <div className="content-item">
                    <PhoneOutlined className="icon" />
                    ĐT bàn (028) 3989 4779 - di động 089 89 89 443
                  </div>
                  <div className="content-item">
                    <MailOutlined className="icon" />
                    annhangovap@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-related-container">
          <div className="product-related-page">
            <div className="title">SẢN PHẨM KHÁC</div>
            <LayoutProduct data={Object.values(Products)} />
          </div>
        </div>
      </div>
    </div>
  );
};
