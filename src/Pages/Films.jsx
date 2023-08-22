import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchFunction";
import Main from "../components/Main/Main";

const Films = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("films", setData, setLoading);
  }, []);

  return (
    <div className="loader-container">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <Main data={data} setData={setData} />
      )}
    </div>
  );
};
export default Films;
