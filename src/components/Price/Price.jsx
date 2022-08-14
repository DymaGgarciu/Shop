import React, { useRef } from "react";
import "./Price.scss";

function Price({ setPrice }) {
  const priceMin = useRef(null);
  const priceMax = useRef(null);

  const submitPrice = () => {
    setPrice([+priceMin.current.value, +priceMax.current.value]);
  };
  const reset = () => {
    setPrice([0, 0]);
    priceMin.current.value = 0;
    priceMax.current.value = 0;
  };

  return (
    <div className="price-box container">
      <h3>Price:</h3>

      <div className=" price-form">
        <div className="input-group ">
          <span className="input-group-text" id="addon-wrapping">
            from
          </span>
          <input
            ref={priceMin}
            type="number"
            className="form-control"
            placeholder="from"
            aria-label="priceFrom"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="input-group ">
          <span className="input-group-text" id="addon-wrapping">
            to
          </span>
          <input
            ref={priceMax}
            type="number"
            className="form-control"
            placeholder="from"
            aria-label="priceFrom"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button onClick={submitPrice} className="btn btn-primary">
          Check
        </button>
        <button
          style={{ marginLeft: "20px" }}
          onClick={reset}
          className="btn btn-info"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Price;
