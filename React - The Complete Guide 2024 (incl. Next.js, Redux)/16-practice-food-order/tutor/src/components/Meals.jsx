import React from "react";
import { useFetch } from "../hooks/useFetch.js";
import { fetchMeals } from "../http.js";
import Meal from "./Meal.jsx";

export default function Meals() {
  const {
    data: meals,
    loading: isLoadingMeals,
    error: errorLoadingMeals,
  } = useFetch(fetchMeals, []);

  return (
    <div id="meals">
      {isLoadingMeals && <p>Loading...</p>}
      {errorLoadingMeals && <p>{errorLoadingMeals}</p>}
      {meals &&
        meals.map((meal) => (
          <Meal
            id={meal.id}
            image={meal.image}
            name={meal.name}
            price={meal.price}
            description={meal.description}
          />
        ))}
    </div>
  );
}
