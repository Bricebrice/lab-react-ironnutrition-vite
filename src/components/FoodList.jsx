import foodsJson from "../foods.json";

import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  console.log("foods", foods);

  // Delete Food
  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });

    setFoods(filteredFoods);
  };

  // Add new food
  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];

    setFoods(updatedFoods);
  };

  return (
    <div>
      <AddFoodForm addNewFood={addNewFood} />
      <hr />
      <h1>Food List</h1>
      {foods.map((food, id) => (
        <FoodBox key={id} food={food} clickToDelete={deleteFood} />
      ))}
    </div>
  );
}

export default FoodList;
