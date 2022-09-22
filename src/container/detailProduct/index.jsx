import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actGetDetailProduct } from "redux/actions/getDetailProduct";

export default function DetailProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailProduct } = useSelector((state) => state.detailProduct);

  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    dispatch(actGetDetailProduct(id));
  }, []);

  const renderListSizes = () => {
    return detailProduct?.size?.map((item, index) => {
      return (
        <button
          key={index}
          type="button"
          // onClick={() => {
          //   setToggle(!toggle);
          // }}
          className={toggle ? "btnSize" : "btnSizeActive"}
        >
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
            <button
              className="btnCount"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
            <p>{count}</p>
            <button
              className="btnCount"
              onClick={() => {
                setCount(count - 1);
                if (count === 1) {
                  setCount(1);
                }
              }}
            >
              -
            </button>
          </div>
          <button type="button" className=" btnAddToCart">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
