import React from "react";
import "./Footer.scss";
import { Container } from "../Container/Container.jsx";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="header-content">
          <div className="logo">
            <img src="../../../public/images/museum-logo-darc.svg" alt="logo" />
          </div>
          <div className="logo">
            <img src="../../../public/images/logo-modsen.svg" alt="logo" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
