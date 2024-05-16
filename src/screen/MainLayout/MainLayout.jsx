import { Outlet } from "react-router-dom";
import { Footer } from "../Home/Footer";
import { Header } from "../Home/Header";
import { Member } from "../Home/Member";
import "./../../scss/MainLayout.scss";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
      <Member />
      <Footer />
    </div>
  );
};
