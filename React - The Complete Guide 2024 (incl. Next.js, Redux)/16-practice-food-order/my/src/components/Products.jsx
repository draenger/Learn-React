import React from "react";
import { useFetch } from "../hooks/useFetch.js";
import { fetchMeals } from "../http.js";
import Product from "./Product.jsx";

export default function Products() {
  const {
    data: meals,
    setData: setMeals,
    loading: isLoadingMeals,
    error: errorLoadingMeals,
  } = useFetch(fetchMeals, []);

  return (
    <div id="meals">
      {isLoadingMeals && <p>Loading...</p>}
      {errorLoadingMeals && <p>{errorLoadingMeals}</p>}
      {meals &&
        meals.map((meal) => (
          <Product
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
