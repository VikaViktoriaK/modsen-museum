import React from "react";
import HomeLink from "../UI/Links/HomeLink/HomeLink.jsx";
import FavoriteLink from "../UI/Links/FavoriteLink/FavoriteLink.jsx";
import "./MobileMenu.scss";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <HomeLink />
      <FavoriteLink />
    </div>
  );
};
export default MobileMenu;
