import { NewProducts } from "../../utils/newProducts";
import "./../../scss/Product.scss";
import { LayoutProduct } from "./LayoutProduct";

export const Product = () => {
  return (
    <div className="product-container">
      <div className="product-page">
        <div className="title">SẢN PHẨM IN NHANH KỸ THUẬT SỐ</div>
        <LayoutProduct data={Object.values(NewProducts)} />
      </div>
    </div>
  );
};
