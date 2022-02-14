import React, { useState } from "react";
import Header from "./components/header/Header";

import "./app.scss";
import ResultsList from "./components/resultsList/ResultsList";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const onSearchSubmit = async (term) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${term}`;

    try {
      const response = await fetch(url);
      const jsonListData = await response.json();
      const results = await jsonListData.meals;

      setData(results);
    } catch (err) {
      console.log(`Sorry! Something went wrong: ${err}`);
    }
  };

  return (
    <div>
      <Header onSearchSubmit={onSearchSubmit} />
      <ResultsList data={data} />
      {console.log(data[0])}
    </div>
  );
};

export default App;
