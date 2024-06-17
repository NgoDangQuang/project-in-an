import { PhoneOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { member } from "../../utils";
import "./../../scss/Member.scss";

export const Member = () => {
  return (
    <div className="member-container">
      <div className="member">
        <div className="title">ĐỘI NGŨ NHÂN VIÊN KINH DOANH</div>
        <div className="member-groups">
          {member?.map((item) => {
            return (
              <div className="member-item-123">
                <div className="avt">
                  <Image src={item?.avt} />
                </div>
                <div className="name">{item?.name}</div>
                <div className="sdt">
                  <PhoneOutlined className="icon-phone" />
                  {item?.sdt}
                </div>
                <div className="mail">{item?.mail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
