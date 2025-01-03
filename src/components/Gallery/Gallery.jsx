import React from "react";
import "./Gallery.scss";
import GalleryCard from "../GalleryCard/GalleryCard.jsx";

const Gallery = () => {
  return (
    <div className="gallery-block">
      <div className="section-title">
        <span className="section-text">Topics for you</span>
        <h2>Our special gallery</h2>
      </div>
      <div className="gallery-card-block">
        <GalleryCard />
      </div>
    </div>
  );
};

export default Gallery;
