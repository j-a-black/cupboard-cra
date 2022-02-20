import React from "react";
import { MdChevronLeft } from "react-icons/md";
import Ingredients from "../ingredients/Ingredients";

import "./mealModal.scss";

const MealModal = ({ closeModal, mealIdData }) => {
  let ingredients = [];
  // looping through ingredients and measurements
  for (let i = 1; i <= 20; i++) {
    let obj = mealIdData[0];
    let ingItems = obj[`strIngredient${i}`];
    let measureItems = obj[`strMeasure${i}`];
    if (ingItems) {
      ingredients.push(`${ingItems} - ${measureItems}`);
    } else {
      break;
    }
  }

  const renderIngredients = ingredients.map((ingredient, index) => {
    return <Ingredients key={index} ingredient={ingredient} />;
  });

  let addExtraBreakBtnParagraphs = mealIdData[0].strInstructions.replace(
    /(?:\\[rn]|[\r\n]+)+/g,
    "\r\n\r\n"
  );

  return (
    <div className="modal-container">
      <div className="top-bar">
        <span className="top-bar__back-btn" onClick={closeModal}>
          <MdChevronLeft className="chevron-left" /> Back to results
        </span>
      </div>
      <div className="modal">
        <img
          className="modal__image"
          src={mealIdData[0].strMealThumb}
          alt={mealIdData[0].strMeal}
        />
        <div className="modal__text-box">
          <span className="modal__title">{mealIdData[0].strMeal}</span>
          <span className="modal__sub-text">
            Cuisine Type: {mealIdData[0].strArea}
          </span>
          <span className="modal__sub-text">
            Category: {mealIdData[0].strCategory}
          </span>
          <ul className="modal__ingredients-container">{renderIngredients}</ul>
          <div className="modal__instructions">
            {addExtraBreakBtnParagraphs}
          </div>
          <a
            className="modal__btn"
            href={mealIdData[0].strYoutube}
            rel="noreferrer"
            target="_blank"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
      {console.log(mealIdData[0])}
    </div>
  );
};

export default MealModal;
