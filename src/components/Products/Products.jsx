import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.scss";

function Products({ products }) {
  return (
    <div className="Products container-lg">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          color={product.color}
          price={product.price}
          img={product.img}
          tags={product.tags}
        />
      ))}
    </div>
  );
}

export default Products;
