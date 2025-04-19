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
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
              stroke="#393939"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 28L22 22"
              stroke="#393939"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
