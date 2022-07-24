import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="product">
      <div className="title">{props.title}</div>
      <img alt="product_img" src={props.image} className="product_img" />
      <div className="product_footer">more</div>
    </div>
  );
}

export default Product;
