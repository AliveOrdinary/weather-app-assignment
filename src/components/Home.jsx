import React from "react";
import useFetch from "../hook/useFetch";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Home = () => {
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();
  const { response, isLoading, error, reFetch } = useFetch({
    query: query,
  });
  console.log(query);
  console.log(response);

  const handleLocation = () => {
    // setQuery("");
    // console.log(query);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          //   console.log(pos);
          const { lat, lng } = pos;
          const positionData = lat + "," + lng;
          setQuery(positionData);
          navigate("/weather/" + positionData);
        },
        function () {
          // handle errors here if any
        }
      );
    } else {
      // Browser doesn't support Geolocation
    }
  };
  return (
    <div>
      <h2>Wether App</h2>
      <Search />

      <button onClick={handleLocation}>Get Device Location</button>
    </div>
  );
};

export default Home;
