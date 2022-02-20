import React from "react";
import { GiCheckMark } from "react-icons/gi";

import "./ingredients.scss";

const Ingredients = ({ ingredient }) => {
  return (
    <li className="ingredients">
      <GiCheckMark
        style={{
          display: "inline-block",
          marginRight: "16px",
          color: "#e74c3c",
        }}
      />
      {ingredient}
    </li>
  );
};

export default Ingredients;
