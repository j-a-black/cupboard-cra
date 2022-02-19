import React, { useState } from "react";
import ResultItem from "../../resultItem/ResultItem";
import MealModal from "../mealModal/MealModal";

import "./resultsList.scss";

const ResultsList = ({ data }) => {
  const [mealIdData, setMealIdData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  //   const onButtonSubmit = async () => {
  //   console.log(mealID);
  //   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
  //   const response = await fetch(url);
  //   const jsonListData = await response.json();
  //   const mealData = jsonListData.meals;
  //   console.log(mealData);
  // };

  const getMealID = async (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    const jsonListData = await response.json();
    const mealData = jsonListData.meals;
    setMealIdData(mealData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderResultItems = data.map((item, index) => {
    return (
      <ResultItem
        key={index}
        item={item}
        getMealID={getMealID}
        mealDataId={item.idMeal}
      />
    );
  });

  return (
    <div className="list-container">
      <div>Results: {data.length}</div>
      <br />
      {showModal ? (
        <MealModal closeModal={closeModal} mealIdData={mealIdData} />
      ) : null}
      {renderResultItems}
    </div>
  );
};

export default ResultsList;
