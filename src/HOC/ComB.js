import React from "react";
import Counter from "./Counter";

const ComB = ({ increament, handleIncreament }) => {
  return (
    <>
      <h3>{increament}</h3>
      <button className="btn btn-primary" onMouseOver={handleIncreament}>
        increament
      </button>
    </>
  );
};

export default Counter(ComB, 10);
