import { Outlet, Link } from "react-router-dom";
import "./../../scss/MainLayout.scss";
import logo from "./../../asset/img/logo.jpg";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
export const MainLayout = () => {
  return (
    <>
      <div className="container flex">
        <div className="header-layout flex">
          <div className="logo flex">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu">
            <div className="top-content flex">
              <div className="company-name item">
                <Link to="/">CÔNG TY CỔ PHẦN IN AN NHÂN</Link>
              </div>
              <div className="mail flex gap-10 item">
                <MailOutlined className="icon-mail" />
                annhangovap@gmail.com
              </div>
              <div className="phone flex gap-10 item">
                <PhoneOutlined className="icon-phone" />
                SĐT liên hệ: 089 89 89 443
              </div>
            </div>
            <div className="menu-items flex">
              <div className="item">
                <Link to="/">Trang chủ</Link>
              </div>
              <div className="item">
                <Link to="/products">Sản phẩm in</Link>
              </div>
              <div className="item">
                <Link to="/sticker">Tem nhãn</Link>
              </div>
              <div className="item">
                <Link to="/knowledge">Kiến thức về in ấn</Link>
              </div>
              <div className="item">
                <Link to="/contact">Liên hệ</Link>
              </div>
              <div className="item">
                <Link to="/sale">Khuyến mãi</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
