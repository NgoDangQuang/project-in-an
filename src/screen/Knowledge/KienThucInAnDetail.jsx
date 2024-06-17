import "./../../scss/KnowledgeDetail.scss";
import { Content } from "./Content";

export const KienThucInAnDetail = ({ data }) => {
  return (
    <div className="kien-thuc-in-an-detail-layout">
      <div className="kien-thuc-in-an-detail">
        <div className="title-page-detail">{data?.title}</div>
        <div className="divider"></div>
        <div className="content">
          {data?.content?.map((item) => {
            return <Content data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
