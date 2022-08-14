import React from "react";
import { useState, useEffect } from "react";
import { dataToColor } from "../../Helpers/dataToColor";
import { AllProducts } from "../../Mock/Mock";
import "./Colors.scss";

function Colors({ setChekedColor }) {
  const AllColors = dataToColor(
    AllProducts.data.allContentfulProductPage.edges
  );
  const [colors, setColors] = useState(AllColors);
  const [all, setAll] = useState(true);

  const colorTogler = (name) => {
    setAll(false);
    setColors(
      colors.map((color) => {
        return color.color === name
          ? { ...color, cheked: !color.cheked }
          : color;
      })
    );
  };

  const viewAll = () => {
    setAll(true);
    setColors(
      colors.map((color) => {
        return { ...color, cheked: false };
      })
    );
  };

  useEffect(() => {
    const clear = colors
      .filter((item) => item.cheked)
      .map((item) => item.color);
    setChekedColor([...clear]);
  }, [colors]);

  return (
    <div className="container Colors">
      <h3>Colors</h3>
      <button onClick={viewAll} className={`btn btn-${all ? "dark" : "light"}`}>
        All Colors
      </button>

      {colors.map((color) => (
        <button
          key={color.color}
          onClick={() => colorTogler(color.color)}
          className="btn button"
          style={{
            backgroundColor: `${
              color.color == "natural" ? "#E5D3BF" : color.color
            }`,
            boxShadow: color.cheked
              ? "0px 0px 1px 6px rgba(34, 60, 80, 1)"
              : "",
          }}
        ></button>
      ))}
    </div>
  );
}

export default Colors;
