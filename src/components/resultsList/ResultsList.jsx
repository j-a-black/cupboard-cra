import React, { useEffect, useState } from "react";
import ResultItem from "../../resultItem/ResultItem";
import MealModal from "../mealModal/MealModal";

import "./resultsList.scss";

const ResultsList = ({ data, initialMealId, loading, setLoading }) => {
  const [mealIdData, setMealIdData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    if (width >= 768 && initialMealId) {
      const fetchData = async (id) => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(url);
        const jsonListData = await response.json();
        const mealData = jsonListData.meals;
        setMealIdData(mealData);
        setShowModal(true);
      };
      fetchData(initialMealId);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialMealId]);

  useEffect(() => {
    document.querySelector(".render-results-box").scrollTo(0, 0);
    document.querySelector(".list-container").scrollTo(0, 0);
  }, [data]);

  return (
    <div className="list-container">
      <div className="quantity">Results: {data.length}</div>
      <br />
      <div className="data-box">
        <div className="render-results-box">{renderResultItems}</div>
        {showModal ? (
          <MealModal closeModal={closeModal} mealIdData={mealIdData} />
        ) : null}
      </div>
    </div>
  );
};

export default ResultsList;
