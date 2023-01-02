import React, { useState, useEffect } from "react";

const Watch = () => {
  const [date, setDate] = useState(new Date());
  const [colorr, setColorr] = useState("red");
  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  if (colorr === "red") {
    setTimeout(() => {
      setColorr("green");
    }, 10000);
  } else {
    setTimeout(() => {
      setColorr("red");
    }, 10000);
  }
  return (
    <div
      className="col-6 mx-auto p-3 border"
      style={{ background: `${colorr}` }}
    >
      <h1 className="text-center">{date.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Watch;
