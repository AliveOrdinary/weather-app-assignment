import React from "react";
import { ArrowLeft, Thermometer, Droplet, MapPin } from "react-feather";

import useFetch from "../hook/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { result } = useParams();
  const { response, isLoading, error, reFetch } = useFetch({
    query: result,
  });
  const handleGoBack = () => {
    navigate("/");
  };
  //   console.log(response);
  // {isLoading && <div>Loading...</div>}
  //       {error && <div>Error: {error.message}</div>}
  return (
    <div className="result-container">
      <div className="app-header">
        <ArrowLeft onClick={handleGoBack} color="#48b0fd" />
        <h2>Weather App</h2>
      </div>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">No place found!</div>
      ) : (
        response && (
          <div className="result-info">
            <img src={response.current.condition.icon} alt="" />
            <h1>{response.current.temp_c}&deg;C</h1>
            <h3>{response.current.condition.text}</h3>
            <div className="location">
              <MapPin color="#000000" />
              <h4>{response.location.name},</h4>
              <h4>{response.location.country}</h4>
            </div>
            <div className="footer">
              <div>
                <div className="icon-container">
                  <Thermometer color="#48b0fd" />
                  <h2>{response.current.feelslike_c}</h2>
                </div>
                <h4 style={{ textAlign: "center" }}>Feels like</h4>
              </div>
              <span></span>
              <div>
                <div className="icon-container">
                  <Droplet color="#48b0fd" />
                  <h2>{response.current.humidity}%</h2>
                </div>
                <h4 style={{ textAlign: "center" }}>Humidity</h4>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Result;
