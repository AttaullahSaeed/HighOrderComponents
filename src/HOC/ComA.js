import React from "react";
import Counter from "./Counter";

const ComA = ({ increament, handleIncreament }) => {
  return (
    <>
      <h3>{increament}</h3>
      <button className="btn btn-primary" onClick={handleIncreament}>
        increament
      </button>
    </>
  );
};

export default Counter(ComA, 5);
