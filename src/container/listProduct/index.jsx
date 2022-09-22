import CardProduct from "../../components/CardProduct";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetListProduct } from "redux/actions/getListProducts";

export default function ListProduct() {
  const dispatch = useDispatch();
  const { listProducts } = useSelector((state) => state.listProducts);

  useEffect(() => {
    dispatch(actGetListProduct());
  }, []);

  const renderListProducts = () => {
    return listProducts?.map((item, index) => {
      return <CardProduct key={index} product={item} />;
    });
  };

  return (
    <div className="container">
      <div className="ProductList">
        <h2 className="ListProductTitle">-Product Feature-</h2>
      </div>
      <div className="ListProductContent">{renderListProducts()}</div>
    </div>
  );
}
