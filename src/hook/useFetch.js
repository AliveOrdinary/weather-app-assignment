import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (query) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(query);

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "5504bb8efamsh0bc0a72fa054b62p1414fcjsn4d8d9d51ad17",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      setResponse(res.data);
      // console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    fetchData();
  };
  return { response, error, isLoading, reFetch };
};

export default useFetch;
