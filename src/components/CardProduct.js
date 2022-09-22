import React from "react";
import { Link } from "react-router-dom";

export default function CardProduct(props) {
  const { product } = props;
  return (
    <>
      <Link to={`/detail/${product.id}`}>
        <div className=" card">
          <img src={product.image} alt={product.image} className="cardImage" />
          <div className="cardContent">
            <div className="cardText">
              <h2 className="cardTitle ">{product.name}</h2>
              <p className="cardDescription ">
                {product.description.slice(0, 20)}...
              </p>
            </div>
            <div className="listButtons">
              <button type="button" className="btnCardBuy ">
                Buy now
              </button>
              <button type="button" className="btnCardPrice ">
                {product.price}$
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
