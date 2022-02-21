import React, { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./components/header/Header";
import ResultsList from "./components/resultsList/ResultsList";
// import { Fallback } from "./components/fallback/Fallback.js";
import "./app.scss";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [initialMealId, setInitialMealId] = useState(null);
  const [explode, setExplode] = useState(false);

  const onSearchSubmit = async (term) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${term}`;
    const response = await fetch(url);
    const jsonListData = await response.json();
    const results = await jsonListData.meals;

    setData(results);
    setInitialMealId(results[0].idMeal);
  };

  const Fallback = () => {
    return <div>Oops, something went wrong! Try another ingredient!</div>;
  };

  const handleReset = () => {
    setData([]);
  };

  return (
    <div>
      <Header onSearchSubmit={onSearchSubmit} />
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={handleReset}
        resetKeys={[data]}
      >
        <ResultsList data={data} initialMealId={initialMealId} />
      </ErrorBoundary>
      {console.log(data)}
    </div>
  );
};

export default App;
