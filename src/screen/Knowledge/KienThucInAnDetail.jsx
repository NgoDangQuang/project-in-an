// import { useParams } from "react-router-dom";
// import { KienThucInAn } from "../../utils/kienThucInAn";
// import "./../../scss/KnowledgeDetail.scss";
// import { Content } from "./Content";
// import { UnorderedListOutlined } from "@ant-design/icons";

// export const KienThucInAnDetail = () => {
//   const { itemId } = useParams();
//   const data = KienThucInAn?.filter((item) => item?.url === itemId);

//   return (
//     <div className="kien-thuc-in-an-detail-layout">
//       <div className="kien-thuc-in-an-detail">
//         <div className="title-page-detail">{data?.[0]?.title}</div>
//         <div className="divider"></div>
//         <div className="layout-content">
//           <div className="contents-page">
//             {data?.[0]?.content?.map((item) => {
//               return <Content data={item} />;
//             })}
//           </div>

//           <div className="muc-luc">
//             <div className="title-muc-luc">
//               <UnorderedListOutlined className="icon-menu" />
//               <div className="text">Nội dung bài viết</div>
//             </div>
//             <ul>
//               {data?.[0]?.mucLuc?.map((item) => {
//                 return (
//                   <div className={`item-muc-luc ${item?.level}`}>
//                     <li>{item?.content}</li>
//                   </div>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { KienThucInAn } from "../../utils/kienThucInAn";
import "./../../scss/KnowledgeDetail.scss";
import { Content } from "./Content";
import {
  UnorderedListOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";

export const KienThucInAnDetail = () => {
  const { itemId } = useParams();
  const [isMucLucOpen, setIsMucLucOpen] = useState(true);
  const data = KienThucInAn?.filter((item) => item?.url === itemId);

  const toggleMucLuc = () => {
    setIsMucLucOpen(!isMucLucOpen);
  };

  return (
    <div className="kien-thuc-in-an-detail-layout">
      <div className="kien-thuc-in-an-detail">
        <div className="title-page-detail">{data?.[0]?.title}</div>
        <div className="divider"></div>
        <div className="layout-content">
          <div className="muc-luc">
            <div className="title-muc-luc" onClick={toggleMucLuc}>
              <div className="text-muc-luc">
                <UnorderedListOutlined className="icon-menu" />
                <div className="text">Nội dung bài viết</div>
              </div>
              {isMucLucOpen ? <DownOutlined /> : <RightOutlined />}
            </div>
            {isMucLucOpen && (
              <ul className="content-muc-luc">
                {data?.[0]?.mucLuc?.map((item) => {
                  return (
                    <div
                      className={`item-muc-luc ${item?.level}`}
                      key={item?.content}
                    >
                      <li>
                        <a href={`#${item?.id}`}>{item?.content}</a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="contents-page">
            {data?.[0]?.content?.map((item, index) => {
              return <Content key={index} data={item} id={item?.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
