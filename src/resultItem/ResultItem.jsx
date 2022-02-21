import React from "react";

import "./resultItem.scss";

const ResultItem = ({ item, getMealID, mealDataId }) => {
  const onButtonClicked = () => {
    getMealID(mealDataId);
  };

  return (
    <article className="card">
      <img src={item.strMealThumb} alt={item.strMeal} />
      <div className="card__text-box">
        <span className="card__title">{item.strMeal}</span>
        <button className="card__btn" onClick={onButtonClicked}>
          View Recipe
        </button>
      </div>
    </article>
  );
};

export default ResultItem;
