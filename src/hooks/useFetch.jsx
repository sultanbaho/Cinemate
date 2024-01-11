import { useState, useEffect } from "react";

export function useFetch(apipath, queryterm = "") {
  const apiKey = import.meta.env.VITE_REACT_API_KEY;
  const queryParam = queryterm !== "" ? `&query=${encodeURIComponent(queryterm)}` : "";
  const url = `https://api.themoviedb.org/3/${apipath}?api_key=${apiKey}${queryParam}`;

  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(url);
      const json = await response.json();
      setdata(json.results);
    }

    fetchdata();
  }, [apipath, queryterm, url]);

  return { data };
}
