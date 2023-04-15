import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/weather/" + query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
      </form>
    </div>
  );
}

export default Search;
