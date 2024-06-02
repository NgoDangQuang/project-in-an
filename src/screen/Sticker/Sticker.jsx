import { TemNhanDecal } from "../../utils/temNhanDecal";
import { LayoutProduct } from "../Products/LayoutProduct";
import "./../../scss/Sticker.scss";

export const Sticker = () => {
  return (
    <div className="product-container">
      <div className="product-page">
        <div className="title">TEM NHÃN DECAL</div>
        <LayoutProduct data={TemNhanDecal} />
      </div>
    </div>
  );
};
