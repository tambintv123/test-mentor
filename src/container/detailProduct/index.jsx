import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetDetailProduct } from "redux/actions/getDetailProduct";

export default function DetailProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailProduct } = useSelector((state) => state.detailProduct);

  useEffect(() => {
    dispatch(actGetDetailProduct(id));
  }, []);

  const renderListSizes = () => {
    return detailProduct?.size?.map((item, index) => {
      return (
        <button key={index} type="button" className="btnSize ">
          {item}
        </button>
      );
    });
  };
  return (
    <div className="container">
      <div className="detail">
        <div>
          <img src={detailProduct.image} alt={detailProduct.image} />
        </div>
        <div>
          <h1 className="productName">{detailProduct.name}</h1>
          <p>{detailProduct.description}</p>
          <h2 className="productSize">Available size</h2>
          <div className="listSizes">{renderListSizes()}</div>
          <h2 className="productPrice ">{detailProduct.price}$</h2>
          <div className="btnListCount">
            <button className="btnCount">+</button>
            <p>1</p>
            <button className="btnCount">-</button>
          </div>
          <button type="button" className=" btnAddToCart">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
