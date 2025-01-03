import React, { useState } from "react";
import "./Header.scss";
import { Container } from "../Container/Container.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header">
      <Container>
        <div className="header-content">
          <div className="header-logo">
            <img src="../../../public/images/museum-logo.svg" alt="logo" />
          </div>
          <div className="burger-button" onClick={toggleMenu}>
            Menu
          </div>
          <div className="header-buttons-block">
            <div className="header-button">
              <Link to="/" className="header-link home-link">
                <img
                  className="header-icon"
                  src="../../../public/icons/home.svg"
                  alt=""
                />
                <span className="header-text">Home</span>
              </Link>
            </div>
            <div className="header-button">
              <Link to="/favorite" className="header-link">
                <img
                  className="header-icon"
                  src="../../../public/icons/bookmark.svg"
                  alt=""
                />
                <span className="header-text">Your favorites</span>
              </Link>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="menu-buttons-block">
            <div className="menu-button">
              <Link to="/" className="menu-link">
                <span className="menu-text">Home</span>
              </Link>
            </div>
            <div className="menu-button">
              <Link to="/favorite" className="menu-link">
                <span className="menu-text">Your favorites</span>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
