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
      <img
        className="modal-image"
        src={mealIdData.strMealThumb}
        alt={mealIdData.strMeal}
      />
    </div>
  );
};

export default MealModal;
