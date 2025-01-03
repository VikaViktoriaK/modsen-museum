import { useEffect, useState } from "react";

const DEFAULT_LIMIT = 3;

export const useArtPosts = (limit) => {
  const [artData, setArtData] = useState([]);
  const [page, setPage] = useState(1);
  const l = limit ? limit : DEFAULT_LIMIT;

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${l}`)
      .then((res) => res.json())
      .then((data) => {
        setArtData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page]);

  return { artData, setPage, page };
};
