import React from "react";
// css
import "./Header.css";

// Header component
const Header = ({ title }) => {
  return (
    <div className="header">
      <h3 className="header-title">{title}</h3>
    </div>
  );
};

export default Header;
