import React, { useState } from "react";
import useFetch from "../hook/useFetch";
import { useNavigate } from "react-router-dom";

function SearchComponent() {
  const [query, setQuery] = useState("");
  const { response, error, isLoading, reFetch } = useFetch({ q: query });
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    reFetch();
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleResult = () => {
    navigate("/weather/" + query);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={handleInputChange} />
      </form>
      {isLoading && <div>Loading...</div>}
      {/* {error && <div>Error: {error.message}</div>} */}
      {response && (
        <div>
          <h2 onClick={handleResult}>{response.location.name}</h2>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
