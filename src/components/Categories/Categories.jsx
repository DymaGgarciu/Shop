import React, { useEffect } from "react";
import logo from "../../img/circle-logo-png.webp";
import { AllProducts } from "../../Mock/Mock";
import { dataToCategory } from "../../Helpers/dataToCategory";
import "./Categories.scss";
import { useState } from "react";

function Categories({ setChekedCategory, setAllTop }) {
  const categories = dataToCategory(
    AllProducts.data.allContentfulProductPage.edges
  );

  const [products, setProducts] = useState(categories);
  const [all, setAll] = useState(true);

  const productTogler = (category) => {
    setAll(false);
    setProducts(
      products.map((product) => {
        return product.product === category
          ? { ...product, cheked: !product.cheked }
          : product;
      })
    );
    setAll(false);
  };

  useEffect(() => {
    const clear = products
      .filter((item) => item.cheked)
      .map((item) => item.product);
    setChekedCategory([...clear]);
  }, [products]);

  const viewAll = () => {
    setAll(true);
    setProducts(
      products.map((product) => {
        return { ...product, cheked: false };
      })
    );
  };

  return (
    <>
      <div className="Categories container-lg ">
        <button
          onClick={viewAll}
          type="button"
          className={`btn btn-${all ? "dark" : "light"}`}
        >
          All
        </button>
        {products.map((item) => (
          <button
            key={item.product}
            onClick={() => productTogler(item.product)}
            type="button"
            className={`btn btn-${item.cheked ? "dark" : "light"}`}
          >
            {item.product}
          </button>
        ))}
      </div>
      <hr className="container-lg line" />
    </>
  );
}

export default Categories;

{
  /* <div>
          <img
            className="Categories__logo"
            height="100px"
            src={logo}
            alt="logo"
          />
        </div> */
}
