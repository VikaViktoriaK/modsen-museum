import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostsGallery.scss";
import SaveButton from "../UI/SaveButton/SaveButton.jsx";
import { useArtPosts } from "../../hooks/useArtPosts.js";
import { generateImageUrl } from "../../assets/helpers/generateImageUrl.js";

const checkFavorites = (prevFavorites, art) =>
  prevFavorites?.some(({ id }) => id === art.id)
    ? prevFavorites.filter(({ id }) => id !== art.id)
    : [...prevFavorites, art];

const PostsGallery = () => {
  const router = useNavigate();
  const { artData } = useArtPosts(9);
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
      <div className="thumbnail-container">
        {artData.data &&
          artData.data.map(
            ({ id, title, artist_title, image_id, thumbnail }) => (
              <div className="thumbnail-card" key={id}>
                <div>
                  <img
                    src={generateImageUrl(image_id)}
                    alt={thumbnail.alt_text}
                    className="thumbnail-img"
                  />
                </div>
                <div className="thumbnail-text">
                  <a
                    href="#"
                    className="thumbnail-name"
                    onClick={() => router(`/art-details/${id}`)}
                  >
                    {title}
                  </a>
                  <p className="thumbnail-author">{artist_title}</p>
                  <p className="thumbnail-status">Public</p>
                </div>
                <div className="thumbnail-button">
                  <SaveButton
                    addFavorite={() =>
                      handleFavorite({ id, title, artist_title, thumbnail })
                    }
                  />
                </div>
              </div>
            ),
          )}
      </div>
    </>
  );
};

export default PostsGallery;
