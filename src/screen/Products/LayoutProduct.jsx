import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./../../scss/LayoutProduct.scss";

export const LayoutProduct = ({ data }) => {
  return (
    <div className="layout-product">
      <Row gutter={[40, 30]}>
        {data?.map((item) => {
          return (
            <Col className="gutter-row" span={6}>
              <Link to={item?.url}>
                <div className="product-item">
                  <div className="image">
                    <img src={item?.img1} alt={item?.title} className="img-1" />
                    <img src={item?.img2} alt={item?.title} className="img-2" />
                  </div>
                  <div className="title-item">{item?.title}</div>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
