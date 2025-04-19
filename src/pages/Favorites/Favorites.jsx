import React, { useState } from "react";
import "./Favorites.scss";
import SaveButton from "../../components/UI/SaveButton/SaveButton.jsx";
import { Container } from "../../components/Container/Container.jsx";

const checkFavorites = (prevFavorites, art) =>
  prevFavorites?.some(({ id }) => id === art.id)
    ? prevFavorites.filter(({ id }) => id !== art.id)
    : [...prevFavorites, art];

const Favorites = () => {
  const storedFavorites = JSON.parse(sessionStorage.getItem("favorites")) ?? [];
  const [favorites, setFavorites] = useState(storedFavorites);

  const handleFavorite = (art) => {
    const updatedFavorites = checkFavorites(favorites, art);
    sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <Container>
      <h1>
        Here are your <br />
        <span className="orange-span">
          <img
            className="favorites-icon"
            src="../../../public/icons/vector.svg"
            alt=""
          />
          favorites
        </span>
      </h1>
      <div className="section-title">
        <span className="section-text">Topics for you</span>
        <h2>Our special gallery</h2>
      </div>
      <div className="favorites-block">
        {favorites.length > 0 ? (
          favorites.map(({ id, title, artist_title, thumbnail }) => (
            <div className="thumbnail-card" key={id}>
              <div>
                <img
                  src={thumbnail.lqip}
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
          ))
        ) : (
          <p className="empty-message">Add pictures</p>
        )}
      </div>
    </Container>
  );
};

export default Favorites;
