import { reasons } from "../../utils";
import "./../../scss/Information.scss";

export const Information = () => {
  return (
    <div className="container-information">
      <div className="information">
        <div className="layout-tile flex">
          <div className="title">VÌ SAO CHỌN CHÚNG TÔI</div>
        </div>
        <div className="reasons">
          {reasons?.map((item) => {
            return (
              <div className="item flex">
                <div className="layout-icon flex">{item?.icon}</div>
                <div className="content">
                  <div className="title-content">{item?.title}</div>
                  <div className="description">{item?.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
