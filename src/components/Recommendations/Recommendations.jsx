import React from "react";
import "./Recommendations.scss";
import PostsGallery from "../PostsGallery/PostsGallery.jsx";
import Select from "../UI/Select/Select.jsx";

const Recommendations = () => (
  <div>
    <div className="section-title">
      <span className="section-text">Here some more</span>
      <h2>Other works for you</h2>
    </div>
    <div className="thumbnail-card-block">
      <PostsGallery />
    </div>
  </div>
);

export default Recommendations;
