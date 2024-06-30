import {
  CloseOutlined,
  MailOutlined,
  MenuOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "./../../asset/img/logo.jpg";

import "./../../scss/Header.scss";
import { useState } from "react";
export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="desktop-screen">
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
                  <Link to="/san-pham">Sản phẩm in</Link>
                </div>
                <div className="item">
                  <Link to="/kien-thuc-in-an">Kiến thức về in ấn</Link>
                </div>
                <div className="item">
                  <Link to="/lien-he">Liên hệ</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="screen-mobile-1024">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu-icon flex">
          <MenuOutlined className="icon" onClick={() => setIsVisible(true)} />
        </div>

        {isVisible && (
          <div className="menu-dropdown">
            <div className="icon-close">
              <CloseOutlined
                className="icon-close"
                onClick={() => setIsVisible(false)}
              />
            </div>
            <div className="nav-content">
              <div className="item">
                <Link onClick={() => setIsVisible(false)} to="/">
                  Trang chủ
                </Link>
              </div>
              <div className="item">
                <Link onClick={() => setIsVisible(false)} to="/san-pham">
                  Sản phẩm in
                </Link>
              </div>
              <div className="item">
                <Link onClick={() => setIsVisible(false)} to="/kien-thuc-in-an">
                  Kiến thức về in ấn
                </Link>
              </div>
              <div className="item">
                <Link onClick={() => setIsVisible(false)} to="/lien-he">
                  Liên hệ
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
