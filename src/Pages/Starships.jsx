import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchFunction";
import Main from "../components/Main/Main";

const Starships = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("starships", setData, setLoading);
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

export default Starships;
