import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

import inst from "../../assets/inst.png";
import fb from "../../assets/fb.png";

const Header = () => {
  return (
    <div className="header-nav">
      <Link to="/">
        <img src={logo} alt="logo" style={{ height: "35px" }} />
      </Link>
      <div className="nav-social">
        <p>Мы в социальных сетях:</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/grotesque.com.ua/">
            <img src={inst} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/grotesque.ua/">
            <img src={fb} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
