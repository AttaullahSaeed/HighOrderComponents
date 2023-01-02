import React from "react";
import { useState } from "react";
const Counter = (WrappedComponent, num) => {
  console.log(num);
  const Counter = () => {
    const [increament, setIncreament] = useState(0);
    const handleIncreament = () => {
      setIncreament(increament + num);
    };
    return (
      <div>
        <WrappedComponent
          increament={increament}
          handleIncreament={handleIncreament}
        />
      </div>
    );
  };
  return Counter;
};

export default Counter;
