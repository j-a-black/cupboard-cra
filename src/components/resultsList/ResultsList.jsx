import React, { useState } from "react";
import ResultItem from "../../resultItem/ResultItem";
import MealModal from "../mealModal/MealModal";

import "./resultsList.scss";

const ResultsList = ({ data }) => {
  const [mealID, setMealID] = useState(null);

  const getMealID = async (id) => {
    setMealID(id);
    // console.log(mealID);
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
      {mealID ? <MealModal /> : null}
      <br />
      {renderResultItems}
    </div>
  );
};

export default ResultsList;
