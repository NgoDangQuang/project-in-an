import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./../../scss/LayoutProduct.scss";

export const LayoutProduct = ({ data }) => {
  return (
    <div className="layout-product">
      <Row gutter={[30, 40]}>
        {data?.map((item) => {
          return (
            <Col className="gutter-row" xxl={4} xl={6} lg={8} sm={12} xs={24}>
              <Link to={`/san-pham/${item?.url}`}>
                <div className="product-item">
                  <div className="image-product-item">
                    <img
                      src={item?.imgs[0]}
                      alt={item?.title}
                      className="img-1"
                    />
                    <img
                      src={item?.imgs[1]}
                      alt={item?.title}
                      className="img-2"
                    />
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
