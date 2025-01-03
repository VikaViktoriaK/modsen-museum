import React, { useState } from "react";
import useArtSearch from "../../../hooks/useArtSearch.js";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

const Search = ({ baseUrl }) => {
  const [searchString, setSearchString] = useState("");
  const foundArts = useArtSearch(baseUrl, searchString);
  const router = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;

    setSearchString(value);
  };

  const renderResults = () => {
    if (foundArts.loading) {
      return <li>Loading...</li>;
    }

    if (foundArts.error) {
      return <li>Error fetching results, please try again later.</li>;
    }

    if (!foundArts.data || foundArts.data.length === 0) {
      return <li>No results found.</li>;
    }

    return foundArts.data.map(({ id, title, artist_title }) => (
      <li
        key={id}
        className="autocomplete-item"
        onClick={() => router(`/art-details/${id}`)}
      >
        {title} {artist_title}
      </li>
    ));
  };

  return (
    <div className="search-block">
      <div className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search art, artist, work..."
          value={searchString}
          onChange={handleSearchChange}
        />
        <div className="search-icon">
          <img src="/icons/search.svg" alt="Search" />
        </div>
      </div>
      {searchString && (
        <div className="autocomplete-block">
          <ul className="autocomplete">{renderResults()}</ul>
        </div>
      )}
    </div>
  );
};

export default Search;
