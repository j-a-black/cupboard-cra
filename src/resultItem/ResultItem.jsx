import React from "react";

import "./resultItem.scss";

const ResultItem = ({ item, mealID }) => {
  const onButtonSubmit = async (e) => {
    // const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`;
    // const response = await fetch(url);
    // const jsonListData = await response.json();
    // const mealData = jsonListData.meals;
    console.log(mealID);
  };
  return (
    <article className="card">
      <img src={item.strMealThumb} alt={item.strMeal} />
      <div className="card__text-box">
        <span className="card__title">{item.strMeal}</span>
        <button className="card__btn" onClick={onButtonSubmit}>
          View Receipe
        </button>
      </div>
    </article>
  );
};

export default ResultItem;
