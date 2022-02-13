import React from "react";
import Search from "../search/Search";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Cupboard</h1>
        <span className="subtext">
          What ingredient would you like to search for?
        </span>
        <Search />
      </div>
    </header>
  );
};

export default Header;
