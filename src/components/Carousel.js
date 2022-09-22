import React from "react";
import "./../sass/pages/home/_home.scss";
export default function Carousel() {
  return (
    <div className="carousel">
      <img className="imageShoes" src="./assets/image/shoes.png" alt="" />
      <div className="carouselContent">
        <h1 className="carouselTitle">Product name</h1>
        <h4 className="carouselDescription">Product description ...</h4>
        <button className="btnBuyNow">Buy now</button>
      </div>
      <div className="arrowLeft"></div>
      <div className="arrowRight"></div>
      <div className="dots">
        <div className="dotsItem"></div>
        <div className="dotsItem"></div>
        <div className="dotsItem"></div>
      </div>
    </div>
  );
}
