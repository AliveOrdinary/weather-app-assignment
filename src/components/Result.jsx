import React from "react";
import useFetch from "../hook/useFetch";
import { useParams } from "react-router-dom";

const Result = () => {
  const { result } = useParams();
  const { response, isLoading, error, reFetch } = useFetch({
    query: result,
  });
  console.log(response);
  return <div></div>;
};

export default Result;
