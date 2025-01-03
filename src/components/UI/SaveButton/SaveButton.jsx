import React, { useState } from "react";
import "./SaveButton.scss";

const SaveButton = ({ addFavorite }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    setIsSaved((prevIsSaved) => !prevIsSaved);
    addFavorite();
  };

  return (
    <button
      className={`save-button ${isSaved ? "active" : ""}`}
      onClick={handleClick}
    >
      <img src="../../../../public/icons/bookmark.svg" alt="bookmark" />
    </button>
  );
};

export default SaveButton;
