import CardProduct from "../../components/CardProduct";
import React from "react";
import { useSelector } from "react-redux";

export default function ListRelateProduct() {
  const { detailProduct } = useSelector((state) => state.detailProduct);

  const renderListProductRelate = () => {
    return detailProduct?.relatedProducts?.map((item, index) => {
      return <CardProduct key={index} product={item} />;
    });
  };
  return (
    <div className="container">
      <div className="ProductList">
        <h2 className="ListProductTitle">-Relate Product-</h2>
      </div>
      <div className="ListProductContent">{renderListProductRelate()}</div>
    </div>
  );
}
