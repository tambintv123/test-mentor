import DetailProduct from "container/detailProduct";
import React from "react";
import "./../../sass/pages/detail/_detail.scss";
import ListRelateProduct from "container/listRelateProduct";

export default function DetailPage() {
  return (
    <div>
      <DetailProduct />
      <ListRelateProduct />
    </div>
  );
}
