import React from "react";
import ResultItem from "../../resultItem/ResultItem";

import "./resultsList.scss";

const ResultsList = ({ data }) => {
  console.log(data);
  const renderResultItems = data.map((item, index) => {
    return <ResultItem key={index} item={item} />;
  });

  return <div className="list-container">{renderResultItems}</div>;
};

export default ResultsList;
