import React from "react";
import { useNavigate } from "react-router-dom";
import "./GalleryCard.scss";
import SaveButton from "../UI/SaveButton/SaveButton.jsx";
import { useArtPosts } from "../../hooks/useArtPosts.js";
import Pagination from "../UI/Pagination/Pagination.jsx";
import { generateImageUrl } from "../../assets/helpers/generateImageUrl.js";

const checkFavorites = (prevFavorites, art) =>
  prevFavorites?.some(({ id }) => id === art.id)
    ? prevFavorites.filter(({ id }) => id !== art.id)
    : [...prevFavorites, art];

const GalleryCard = () => {
  const router = useNavigate();
  const { artData, page, setPage } = useArtPosts();

  const handleFavorite = (art) => {
    const prevFavorites = JSON.parse(sessionStorage.getItem("favorites")) ?? [];
    const favorites = checkFavorites(prevFavorites, art);
    sessionStorage.setItem("favorites", JSON.stringify(favorites));
  };

  if (!artData || artData.length === 0) {
    return (
      <div>
        <img src="../../../public/icons/load.gif" alt="" />
      </div>
    );
  }

  return (
    <>
      <div className="gallery-container">
        {artData.data &&
          artData.data.map(
            ({ id, title, artist_title, image_id, thumbnail }) => (
              <div className="gallery-card" key={id}>
                <div>
                  <img
                    src={generateImageUrl(image_id)}
                    alt={thumbnail?.alt_text || "Image unavailable"}
                    className="card-img"
                  />
                </div>
                <div className="description-block">
                  <div className="description-content">
                    <a
                      href="#"
                      className="card-name"
                      onClick={() => router(`/art-details/${id}`)}
                    >
                      {title}
                    </a>
                    <p className="card-author">
                      {artist_title || "Unknown Artist"}
                    </p>
                    <p className="card-status">Public</p>
                  </div>
                  <div className="gallery-button">
                    <SaveButton
                      addFavorite={() =>
                        handleFavorite({ id, title, artist_title, thumbnail })
                      }
                    />
                  </div>
                </div>
              </div>
            ),
          )}
      </div>
      <div className="pagination">
        <Pagination selectedPage={page} setPage={setPage} />
      </div>
    </>
  );
};

export default GalleryCard;
