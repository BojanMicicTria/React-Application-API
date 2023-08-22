import { fetchData } from "../utils/fetchFunction";
import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";

const Vehicles = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("vehicles", setData, setLoading);
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

export default Vehicles;
