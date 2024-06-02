import "./../../scss/Product.scss";
import { LayoutProduct } from "./LayoutProduct";

export const ProductList = ({ data }) => {
  return (
    <div className="product-container">
      <div className="product-page">
        <div className="title">{data?.title}</div>
        <LayoutProduct data={data} />
      </div>
    </div>
  );
};
