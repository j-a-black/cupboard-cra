import React from "react";
import Search from "../search/Search";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Cupboard</h1>
        <span>What ingredient should you like to search for?</span>
        <Search />
      </div>
    </header>
  );
};

export default Header;
