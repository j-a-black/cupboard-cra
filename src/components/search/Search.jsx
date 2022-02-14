import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./search.scss";

const Search = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setTerm(e.target.value);
    console.log(term);
  };

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
        maxLength="100"
        placeholder="try 'eggs' or 'chicken breast'"
        autoFocus
        value={term}
        onChange={onInputChange}
      />
    </form>
  );
};

export default Search;
