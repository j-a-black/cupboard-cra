import React, { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./components/header/Header";
import ResultsList from "./components/resultsList/ResultsList";
import "./app.scss";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [initialMealId, setInitialMealId] = useState(null);
  const [explode, setExplode] = useState(false);

  const onSearchSubmit = async (term) => {
    setLoading(true);
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${term}`;
    const response = await fetch(url);
    const jsonListData = await response.json();
    const results = await jsonListData.meals;

    setData(results);
    setInitialMealId(results[0].idMeal);
    setLoading(false);
  };

  const Fallback = () => {
    return (
      <div className="error-msg">
        Oops, something went wrong! Try another ingredient!
      </div>
    );
  };

  const handleReset = () => {
    setData([]);
  };

  useEffect(() => {
    if (loading) {
      document.querySelector(".list-container").style.visibility = "hidden";
    } else {
      document.querySelector(".list-container").style.visibility = "visible";
    }
  }, [loading]);

  return (
    <div>
      <Header onSearchSubmit={onSearchSubmit} />
      {loading ? (
        <div className="loader-overlay">
          <span className="loader"></span>
        </div>
      ) : null}
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={handleReset}
        resetKeys={[data]}
      >
        <ResultsList
          data={data}
          initialMealId={initialMealId}
          loading={loading}
          setLoading={setLoading}
        />
      </ErrorBoundary>
    </div>
  );
};

export default App;
