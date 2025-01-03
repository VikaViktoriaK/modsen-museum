import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounse.js";

const useArtSearch = (baseUrl, searchString) => {
  const [foundArts, setFoundArts] = useState([]);
  const debonunseValue = useDebounce(searchString, 500);

  useEffect(() => {
    if (!searchString) {
      setFoundArts([]);
      return;
    }

    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${debonunseValue}`)
      .then((response) => response.json())
      .then((data) => setFoundArts(data))
      .catch((err) => console.log("Fetch Error :-S", err));
  }, [baseUrl, debonunseValue]);
  console.log(foundArts);
  return foundArts;
};

export default useArtSearch;
