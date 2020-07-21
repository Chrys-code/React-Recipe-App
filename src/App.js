import React, { useEffect, useState } from "react";
import Recipe from "./recipe.js";
import "./App.css";

const App = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App container-sm">
      <form onSubmit={getSearch} className="search-form">
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Search..."
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="btn btn-block btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
      <div id="accordion">
        {recipes.map((recipe) => (
          <Recipe
            index={recipes.indexOf(recipe)}
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
