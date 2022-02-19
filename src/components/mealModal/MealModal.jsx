import React from "react";
import { MdChevronLeft } from "react-icons/md";

import "./mealModal.scss";

const MealModal = ({ closeModal, mealIdData }) => {
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
      </div>
      {console.log(mealIdData)}
    </div>
  );
};

export default MealModal;
