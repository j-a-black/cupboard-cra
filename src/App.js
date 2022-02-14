import React, { useState } from "react";
import Header from "./components/header/Header";

import "./app.scss";
import ResultsList from "./components/resultsList/ResultsList";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const onSearchSubmit = async (term) => {
    // TODO: add fetch
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${term}`;
    try {
      const response = await fetch(url);
      const jsonListData = await response.json();
      const mealData = jsonListData.meals;

      // return { mealData };
      console.log(mealData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header onSearchSubmit={onSearchSubmit} />
      <ResultsList />
    </div>
  );
};

export default App;
