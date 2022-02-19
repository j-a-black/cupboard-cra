import React from "react";
import ResultItem from "../../resultItem/ResultItem";

import "./resultsList.scss";

const ResultsList = ({ data }) => {
  const renderResultItems = data.map((item, index) => {
    return <ResultItem key={index} item={item} mealID={item.idMeal} />;
  });

  return <div className="list-container">{renderResultItems}</div>;
};

export default ResultsList;
