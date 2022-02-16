import React from "react";

import "./resultItem.scss";

const ResultItem = ({ item }) => {
  return (
    <article className="card">
      <div className="card__image-box">
        {/* <img src={item.strMealThumb} alt={item.strMeal} /> */}
      </div>
      <div className="card__text-box">
        <span className="card__title">{item.strMeal}</span>
        <button className="card__btn">View Receipe</button>
      </div>
    </article>
  );
};

export default ResultItem;
