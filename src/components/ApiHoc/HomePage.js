import React from "react";
import { useState } from "react";
import Coins from "./Coins";
import Exchanges from "./Exchanges";

const HomePage = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="conatiner">
        <div className="row">
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-lg btn-primary"
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
            >
              Coins
            </button>
            <button
              className="btn btn-lg btn-primary ms-4"
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
            >
              Exchange
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={openTab === 1 ? "block" : "d-none"}>
          <Coins />
        </div>
        <div className={openTab === 2 ? "block" : "d-none"}>
          <Exchanges />
        </div>
      </div>
    </>
  );
};

export default HomePage;
