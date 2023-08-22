import axios from "axios";

export const fetchData = async (starwars_id, setData, setLoading) => {
  const URL = `https://swapi.dev/api/${starwars_id}/`;
  try {
    const response = await axios.get(URL);
    setData(response.data.results);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.error("Error fetching data:", error);
  }
};
