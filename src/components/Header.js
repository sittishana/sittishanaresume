import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <a href="/" className="logo">
        CompanyLogo
      </a>
      <div className="header-right">
        <a className="active" href="/">
          Home
        </a>
        <a href="contact">Contact</a>
        <a href="aboutus">About</a>
      </div>
    </div>
  );
}

export default Header;
