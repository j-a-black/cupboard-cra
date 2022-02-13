import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./search.scss";

const onFormSubmit = (event) => {
  event.preventDefault();
};

const Search = () => {
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <button
        className="search-button"
        type="submit"
        style={{ fontSize: "20px" }}
      >
        <AiOutlineSearch />
      </button>
      <input
        type="text"
        className="input-field"
        id="input-field"
        maxLength="100"
        placeholder="try 'eggs' or 'chicken breast'"
        autoFocus
      />
    </form>
  );
};

export default Search;
