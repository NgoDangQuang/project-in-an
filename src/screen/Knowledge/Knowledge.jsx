import { Col, Row } from "antd";
import "./../../scss/Knowledge.scss";
import { KienThucInAn } from "../../utils/kienThucInAn";
import { Link } from "react-router-dom";

export const Knowledge = () => {
  return (
    <div className="knowledge-page">
      <div className="title-page">KIẾN THỨC VỀ IN ẤN</div>
      <Row className="list-data" gutter={[25, 40]}>
        {KienThucInAn?.map((item) => {
          return (
            <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
              <div className="item">
                <Link to={item?.url}>
                  <div className="image-thumnail">
                    <img src={item?.img} alt="" />
                  </div>
                  <div className="title">{item?.title}</div>
                </Link>
                <div className="description">{item?.descriptions}</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
