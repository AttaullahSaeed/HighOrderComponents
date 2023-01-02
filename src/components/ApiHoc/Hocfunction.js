import React, { useState, useEffect } from "react";
import axios from "axios";

const Hocfunction = (API_URL, title) =>
  function Fun() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(API_URL);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    if (loading) {
      return <h1>Loading.....</h1>;
    } else if (error) {
      return <h2>somthing went wrong...</h2>;
    }
    return (
      <>
        <div className="container">
          <h2 className="text-center my-5">{title}</h2>
          <div className="row">
            {data.map((x) => (
              <div className="col-md-3 my-2  mx-auto" key={x.id}>
                <div className="card" style={{ width: "17rem" }}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={x.image}
                      alt=""
                      width={70}
                      height={70}
                      className="pt-3"
                    />
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{x.rank}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{x.name}</h6>
                    <p className="card-text">
                      {x.current_price && <span>${x.current_price}</span>}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

export default Hocfunction;
