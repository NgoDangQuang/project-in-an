import { Outlet } from "react-router-dom";
import { Footer } from "../Home/Footer";
import { Header } from "../Home/Header";
import { Member } from "../Home/Member";
import ZaloIcon from "./../../asset/icons/zalo_icon.svg";
import "./../../scss/MainLayout.scss";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
      <Member />
      <div className="zalo">
        <a
          href="https://zalo.me/0375486037"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ZaloIcon} alt="zalo_icon" />
        </a>
      </div>
      <Footer />
    </div>
  );
};
