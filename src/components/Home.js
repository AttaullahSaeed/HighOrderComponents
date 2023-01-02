import axios from "axios";
import React, { useEffect, useState } from "react";
import { POST_URL, GET_URL, DELETE_URL } from "./API";

const Home = () => {
  const [task, setTask] = useState("");
  const [loadingButton, setLoadingButton] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoadingButton(true);
      const { data } = await axios.post(`${POST_URL}`, { task });
      setLoadingButton(false);
      window.alert("created sucessfully..");
      setTask("");
      loadData();
    } catch (error) {
      setLoadingButton(false);
      console.log(error);
    }
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(GET_URL);
      setData(data.reverse());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`${DELETE_URL}/${id}`);
      window.alert("delete successfully...");
      loadData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="col-8 mx-auto  pt-5">
        <div className="border bg-white p-4">
          <div className="form-group">
            <label for="">Task</label>
            <input
              type="text"
              className="form-control"
              placeholder="task name"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            {loadingButton ? "loading..." : "Submit"}
          </button>
        </div>
      </div>
      <br />
      {/* Table  */}
      <div className="mx-auto col-8 border p-2">
        <table className="table table-hover overflow-x-auto bg-white">
          <thead>
            <tr>
              <th scope="col">index</th>
              <th scope="col">id</th>
              <th scope="col">Task</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {loading ? (
            <h3>Loading....</h3>
          ) : (
            <tbody>
              {data.map((res, id) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{res.id}</td>
                  <td>{res?.task}</td>
                  <td>{res?.createdAt}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(res.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Home;
