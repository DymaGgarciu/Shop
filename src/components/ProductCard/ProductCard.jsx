import React from "react";
import "./ProductCard.scss";

function ProductCard({ tags, price, color, img }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <span className="card-title">Color: </span>
            {color}
          </p>
          <p className="card-text">
            <span className="card-title">Price: </span>
            {price}
          </p>
          <p className="card-text">
            <span className="card-title">Tags: </span>
            {tags.map((tag, index) => (
              <span key={index}>{tag} &nbsp; </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
